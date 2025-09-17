import { getAuth } from 'firebase/auth';
import { doc, collection, addDoc, getDocs, updateDoc, query, where, orderBy, limit, startAfter, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

// Order and download interfaces
export interface ShippingAddress {
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  landmark?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  type: 'physical' | 'digital';
  cost: { gems?: number; xp?: number };
  image?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  customerInfo: CustomerInfo;
  shippingAddress?: ShippingAddress;
  orderStatus: OrderStatus;
  paymentStatus: 'paid' | 'pending' | 'failed';
  orderDate: Date;
  totalCost: { gems: number; xp: number };
  trackingNumber?: string;
  deliveryDate?: Date;
  createdAt?: string;
  updatedAt?: string;
}

export interface DownloadHistory {
  id: string;
  userId: string;
  itemId: string;
  itemName: string;
  downloadDate: Date;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
  isActive: boolean; // For re-downloads
}

export class OrderManagementService {
  
  /**
   * Create a new order for physical products
   */
  static async createPhysicalOrder(
    items: OrderItem[], 
    shippingAddress: ShippingAddress
  ): Promise<{ success: boolean; orderId?: string; message: string }> {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        return { success: false, message: 'User not authenticated' };
      }

      // Calculate total cost
      const totalCost = items.reduce(
        (acc, item) => ({
          gems: acc.gems + (item.cost.gems || 0),
          xp: acc.xp + (item.cost.xp || 0)
        }),
        { gems: 0, xp: 0 }
      );

      const order: Omit<Order, 'id'> = {
        userId: user.uid,
        customerInfo: {
          name: shippingAddress.name,
          email: shippingAddress.email,
          phone: shippingAddress.phone
        },
        items,
        shippingAddress,
        orderStatus: 'pending',
        paymentStatus: 'paid', // Assuming payment via gems is instant
        orderDate: new Date(),
        totalCost
      };

      const docRef = await addDoc(collection(db, 'orders'), {
        ...order,
        orderDate: Timestamp.fromDate(order.orderDate)
      });

      console.log('✅ Physical order created:', docRef.id);
      
      return { 
        success: true, 
        orderId: docRef.id,
        message: `Order #${docRef.id.slice(-6)} created successfully! You will receive a confirmation email.` 
      };

    } catch (error) {
      console.error('❌ Failed to create order:', error);
      return { 
        success: false, 
        message: 'Failed to create order. Please try again.' 
      };
    }
  }

  /**
   * Record digital download
   */
  static async recordDigitalDownload(
    itemId: string,
    itemName: string,
    fileSize: string,
    fileType: string,
    downloadUrl: string
  ): Promise<{ success: boolean; downloadId?: string; message: string }> {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        return { success: false, message: 'User not authenticated' };
      }

      const downloadRecord: Omit<DownloadHistory, 'id'> = {
        userId: user.uid,
        itemId,
        itemName,
        downloadDate: new Date(),
        fileSize,
        fileType,
        downloadUrl,
        isActive: true
      };

      const docRef = await addDoc(collection(db, 'downloadHistory'), {
        ...downloadRecord,
        downloadDate: Timestamp.fromDate(downloadRecord.downloadDate)
      });

      console.log('📥 Download recorded:', docRef.id);
      
      return { 
        success: true, 
        downloadId: docRef.id,
        message: `Download recorded successfully! Access it anytime from your downloads.` 
      };

    } catch (error) {
      console.error('❌ Failed to record download:', error);
      return { 
        success: false, 
        message: 'Failed to record download.' 
      };
    }
  }

  /**
   * Get user's order history
   */
  static async getUserOrders(userId?: string): Promise<Order[]> {
    try {
      const user = getAuth().currentUser;
      const targetUserId = userId || user?.uid;
      
      if (!targetUserId) {
        console.warn('No user ID provided for order history');
        return [];
      }

      const q = query(
        collection(db, 'orders'),
        where('userId', '==', targetUserId),
        orderBy('orderDate', 'desc')
      );

      const querySnapshot = await getDocs(q);
      
      const orders: Order[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          orderDate: data.orderDate.toDate()
        } as Order;
      });

      console.log(`📦 Found ${orders.length} orders for user`);
      return orders;

    } catch (error) {
      console.error('❌ Failed to fetch orders:', error);
      return [];
    }
  }

  /**
   * Get user's download history
   */
  static async getUserDownloads(userId?: string): Promise<DownloadHistory[]> {
    try {
      const user = getAuth().currentUser;
      const targetUserId = userId || user?.uid;
      
      if (!targetUserId) {
        console.warn('No user ID provided for download history');
        return [];
      }

      const q = query(
        collection(db, 'downloadHistory'),
        where('userId', '==', targetUserId),
        where('isActive', '==', true),
        orderBy('downloadDate', 'desc')
      );

      const querySnapshot = await getDocs(q);
      
      const downloads: DownloadHistory[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          downloadDate: data.downloadDate.toDate()
        } as DownloadHistory;
      });

      console.log(`📥 Found ${downloads.length} downloads for user`);
      return downloads;

    } catch (error) {
      console.error('❌ Failed to fetch downloads:', error);
      return [];
    }
  }

  /**
   * Validate shipping address (International)
   */
  static validateShippingAddress(address: ShippingAddress): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Required field validation
    if (!address.name.trim()) errors.push('Name is required');
    if (!address.email.trim()) errors.push('Email is required');
    if (!address.phone.trim()) errors.push('Phone number is required');
    if (!address.addressLine1.trim()) errors.push('Address is required');
    if (!address.city.trim()) errors.push('City is required');
    if (!address.postalCode.trim()) errors.push('Postal code is required');
    if (!address.country.trim()) errors.push('Country is required');

    // Length validations
    if (address.name.trim().length < 2) errors.push('Name must be at least 2 characters');
    if (address.addressLine1.trim().length < 5) errors.push('Address must be at least 5 characters');
    if (address.city.trim().length < 2) errors.push('City must be at least 2 characters');

    // Email validation (international)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (address.email && !emailRegex.test(address.email)) {
      errors.push('Please enter a valid email address');
    }

    // International phone validation (more flexible)
    const phoneClean = address.phone.replace(/\D/g, '');
    if (address.phone && phoneClean.length < 7) {
      errors.push('Phone number must be at least 7 digits');
    }

    // Basic postal code validation (varies by country)
    if (address.postalCode && address.postalCode.trim().length < 3) {
      errors.push('Postal code must be at least 3 characters');
    }

    // Country name validation
    const validCountries = [
      'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 
      'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Sweden', 
      'Norway', 'Denmark', 'Finland', 'India', 'Japan', 'South Korea', 'China', 
      'Singapore', 'Malaysia', 'Thailand', 'Indonesia', 'Philippines', 'Vietnam',
      'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia', 'Peru', 'New Zealand',
      'South Africa', 'Egypt', 'Nigeria', 'Kenya', 'United Arab Emirates', 
      'Saudi Arabia', 'Israel', 'Turkey', 'Russia', 'Poland', 'Czech Republic',
      'Hungary', 'Greece', 'Portugal', 'Ireland', 'Romania', 'Bulgaria', 'Croatia'
    ];
    
    if (address.country && !validCountries.includes(address.country)) {
      errors.push('Please select a valid country from the list');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Get order tracking info
   */
  static getTrackingInfo(order: Order): { 
    statusColor: string; 
    statusIcon: string; 
    estimatedDelivery?: string;
    trackingUrl?: string;
  } {
    const baseTrackingUrl = 'https://example-shipping.com/track/';
    
    switch (order.orderStatus) {
      case 'pending':
        return {
          statusColor: '#f59e0b',
          statusIcon: '⏳',
          estimatedDelivery: '7-10 business days from confirmation'
        };
      case 'processing':
        return {
          statusColor: '#3b82f6',
          statusIcon: '📦',
          estimatedDelivery: '5-7 business days'
        };
      case 'shipped':
        return {
          statusColor: '#8b5cf6',
          statusIcon: '🚚',
          estimatedDelivery: '2-3 business days',
          trackingUrl: order.trackingNumber ? `${baseTrackingUrl}${order.trackingNumber}` : undefined
        };
      case 'delivered':
        return {
          statusColor: '#10b981',
          statusIcon: '✅',
          estimatedDelivery: 'Delivered'
        };
      case 'cancelled':
        return {
          statusColor: '#ef4444',
          statusIcon: '❌',
          estimatedDelivery: 'Order cancelled'
        };
      default:
        return {
          statusColor: '#6b7280',
          statusIcon: '❓'
        };
    }
  }

  /**
   * Get all orders for admin dashboard (with pagination)
   */
  static async getAllOrders(limitCount: number = 50, startAfterDoc?: any): Promise<{
    orders: Order[];
    hasMore: boolean;
    lastDoc: any;
  }> {
    try {
      let ordersQuery = query(
        collection(db, 'orders'),
        orderBy('createdAt', 'desc'),
        limit(limitCount + 1) // Get one extra to check if there are more
      );
      
      if (startAfterDoc) {
        ordersQuery = query(
          collection(db, 'orders'),
          orderBy('createdAt', 'desc'),
          startAfter(startAfterDoc),
          limit(limitCount + 1)
        );
      }
      
      const snapshot = await getDocs(ordersQuery);
      const orders = snapshot.docs.slice(0, limitCount).map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Order));
      
      const hasMore = snapshot.docs.length > limitCount;
      const lastDoc = hasMore ? snapshot.docs[limitCount - 1] : null;
      
      return {
        orders,
        hasMore,
        lastDoc
      };
    } catch (error) {
      console.error('Error fetching all orders:', error);
      throw new Error('Failed to fetch orders');
    }
  }

  /**
   * Update order status (admin function)
   */
  static async updateOrderStatus(orderId: string, status: OrderStatus, trackingNumber?: string): Promise<void> {
    try {
      const orderRef = doc(db, 'orders', orderId);
      const updateData: any = {
        orderStatus: status,
        updatedAt: new Date().toISOString()
      };
      
      if (trackingNumber) {
        updateData.trackingNumber = trackingNumber;
      }
      
      await updateDoc(orderRef, updateData);
      
      console.log(`✅ Order ${orderId} status updated to ${status}`);
    } catch (error) {
      console.error('Error updating order status:', error);
      throw new Error('Failed to update order status');
    }
  }

  /**
   * Get orders by status for admin filtering
   */
  static async getOrdersByStatus(status: OrderStatus, limitCount: number = 20): Promise<Order[]> {
    try {
      const ordersQuery = query(
        collection(db, 'orders'),
        where('orderStatus', '==', status),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(ordersQuery);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Order));
    } catch (error) {
      console.error('Error fetching orders by status:', error);
      throw new Error('Failed to fetch orders by status');
    }
  }

  /**
   * Search orders by customer email or order ID
   */
  static async searchOrders(searchTerm: string): Promise<Order[]> {
    try {
      // Note: Firestore doesn't support partial string matching well
      // This is a simplified implementation - consider using Algolia or similar for better search
      const ordersQuery = query(
        collection(db, 'orders'),
        orderBy('createdAt', 'desc'),
        limit(100) // Limit to prevent too many reads
      );
      
      const snapshot = await getDocs(ordersQuery);
      const allOrders = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Order));
      
      // Client-side filtering (not ideal for large datasets)
      return allOrders.filter(order => 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerInfo.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (order.customerInfo.name && order.customerInfo.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } catch (error) {
      console.error('Error searching orders:', error);
      throw new Error('Failed to search orders');
    }
  }
}

export default OrderManagementService;
