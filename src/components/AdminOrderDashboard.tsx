import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { OrderManagementService, Order, ShippingAddress } from '@/services/OrderManagementService';
import { Clipboard, Package, Truck, CheckCircle, XCircle, Eye, Edit, Search, Filter, Download } from 'lucide-react';

interface AdminOrderDashboardProps {
  isAdmin?: boolean;
  onClose?: () => void;
}

const AdminOrderDashboard: React.FC<AdminOrderDashboardProps> = ({ isAdmin = true, onClose }) => {
  // Immediate debug logging
  console.log('🎛️ AdminOrderDashboard component loaded!');
  console.log('🔐 isAdmin prop received:', isAdmin, 'type:', typeof isAdmin);
  console.log('🔗 onClose prop received:', typeof onClose);
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<Order['orderStatus']>('pending');

  // Debug logging
  useEffect(() => {
    console.log('🔍 AdminOrderDashboard - isAdmin prop:', isAdmin);
    console.log('🔍 AdminOrderDashboard - onClose prop:', typeof onClose);
  }, [isAdmin, onClose]);

  // Only render if user is admin
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin Access Required</h3>
          <p className="text-gray-600 mb-4">
            You need admin privileges to access the order management dashboard.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Debug Info: isAdmin = {String(isAdmin)}
          </p>
          {onClose && (
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          )}
        </div>
      </div>
    );
  }

  useEffect(() => {
    loadAllOrders();
  }, []);

  const loadAllOrders = async () => {
    setLoading(true);
    try {
      // Get all orders using the paginated method
      const result = await OrderManagementService.getAllOrders(100); // Get up to 100 orders
      const allOrders = result.orders;
      setOrders(allOrders.sort((a, b) => {
        const dateA = new Date(a.orderDate || a.createdAt || '').getTime();
        const dateB = new Date(b.orderDate || b.createdAt || '').getTime();
        return dateB - dateA;
      }));
    } catch (error) {
      console.error('Failed to load orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Order['orderStatus']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['orderStatus']) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'processing': return '📦';
      case 'shipped': return '🚚';
      case 'delivered': return '✅';
      case 'cancelled': return '❌';
      default: return '❓';
    }
  };

  const handleUpdateOrderStatus = async () => {
    if (!selectedOrder) return;

    try {
      await OrderManagementService.updateOrderStatus(
        selectedOrder.id,
        orderStatus,
        trackingNumber || undefined
      );

      // Reload orders
      await loadAllOrders();
      setUpdateModal(false);
      setSelectedOrder(null);
      alert('Order status updated successfully!');
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order status');
    }
  };

  const exportOrdersToCSV = () => {
    const csvData = orders.map(order => ({
      OrderID: order.id,
      Date: order.orderDate.toLocaleDateString(),
      CustomerName: order.shippingAddress?.name || 'N/A',
      Email: order.shippingAddress?.email || 'N/A',
      Phone: order.shippingAddress?.phone || 'N/A',
      Address: `${order.shippingAddress?.addressLine1}, ${order.shippingAddress?.city}, ${order.shippingAddress?.state}, ${order.shippingAddress?.postalCode}`,
      Items: order.items.map(item => item.name).join('; '),
      Status: order.orderStatus,
      TotalGems: order.totalCost.gems,
      TrackingNumber: order.trackingNumber || 'N/A'
    }));

    const csvString = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).map(val => `"${val}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `orders_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.shippingAddress?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.shippingAddress?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || order.orderStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Package className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Order Management Dashboard</h1>
          <p className="text-gray-600">Manage all physical product orders</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={exportOrdersToCSV} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Orders
          </Button>
          {onClose && (
            <Button variant="outline" onClick={onClose} className="flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Close
            </Button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {(['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map(status => {
          const count = orders.filter(order => order.orderStatus === status).length;
          return (
            <Card key={status} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 capitalize">{status}</p>
                    <p className="text-2xl font-bold text-gray-900">{count}</p>
                  </div>
                  <div className="text-2xl">{getStatusIcon(status)}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search orders by ID, customer name, email, or product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders ({filteredOrders.length})</CardTitle>
          <CardDescription>
            Manage and track all physical product orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Order ID</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Items</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Total</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <div className="font-mono text-sm">#{order.id.slice(-8)}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-sm">{order.orderDate.toLocaleDateString()}</div>
                    </td>
                    <td className="p-2">
                      <div>
                        <div className="font-medium">{order.shippingAddress?.name}</div>
                        <div className="text-sm text-gray-600">{order.shippingAddress?.email}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-sm">
                        {order.items.map(item => item.name).join(', ')}
                      </div>
                    </td>
                    <td className="p-2">
                      <Badge className={getStatusColor(order.orderStatus)}>
                        {getStatusIcon(order.orderStatus)} {order.orderStatus}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="text-sm">{order.totalCost.gems} 💎</div>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowOrderDetails(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedOrder(order);
                            setOrderStatus(order.orderStatus);
                            setTrackingNumber(order.trackingNumber || '');
                            setUpdateModal(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Modal */}
      {showOrderDetails && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Order Details</h3>
              <Button
                variant="ghost"
                onClick={() => setShowOrderDetails(false)}
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Order ID:</label>
                  <p className="font-mono">{selectedOrder.id}</p>
                </div>
                <div>
                  <label className="font-medium">Date:</label>
                  <p>{selectedOrder.orderDate.toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">📦 Items Ordered:</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between border p-2 rounded">
                      <span>{item.name}</span>
                      <span>{item.cost.gems} 💎</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">🏠 Shipping Address:</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <p><strong>Name:</strong> {selectedOrder.shippingAddress?.name}</p>
                  <p><strong>Email:</strong> {selectedOrder.shippingAddress?.email}</p>
                  <p><strong>Phone:</strong> {selectedOrder.shippingAddress?.phone}</p>
                  <p><strong>Address:</strong> {selectedOrder.shippingAddress?.addressLine1}</p>
                  {selectedOrder.shippingAddress?.addressLine2 && (
                    <p><strong>Address 2:</strong> {selectedOrder.shippingAddress?.addressLine2}</p>
                  )}
                  <p><strong>City:</strong> {selectedOrder.shippingAddress?.city}</p>
                  <p><strong>State:</strong> {selectedOrder.shippingAddress?.state}</p>
                  <p><strong>PIN:</strong> {selectedOrder.shippingAddress?.postalCode}</p>
                  <p><strong>Country:</strong> {selectedOrder.shippingAddress?.country}</p>
                  {selectedOrder.shippingAddress?.landmark && (
                    <p><strong>Landmark:</strong> {selectedOrder.shippingAddress?.landmark}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <strong>Status:</strong>
                  <Badge className={`ml-2 ${getStatusColor(selectedOrder.orderStatus)}`}>
                    {getStatusIcon(selectedOrder.orderStatus)} {selectedOrder.orderStatus}
                  </Badge>
                </div>
                {selectedOrder.trackingNumber && (
                  <div>
                    <strong>Tracking:</strong> {selectedOrder.trackingNumber}
                  </div>
                )}
              </div>

              <div>
                <strong>Total Cost:</strong> {selectedOrder.totalCost.gems} 💎
              </div>
            </div>

            {/* Copy Address Button */}
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => {
                  const address = selectedOrder.shippingAddress;
                  const fullAddress = `${address?.name}\n${address?.email}\n${address?.phone}\n${address?.addressLine1}\n${address?.addressLine2 || ''}\n${address?.city}, ${address?.state} ${address?.postalCode}\n${address?.country}${address?.landmark ? `\nLandmark: ${address.landmark}` : ''}`;
                  navigator.clipboard.writeText(fullAddress);
                  alert('Address copied to clipboard!');
                }}
                className="flex items-center gap-2"
              >
                <Clipboard className="w-4 h-4" />
                Copy Address
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Update Order Status Modal */}
      {updateModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Update Order Status</h3>
              <Button
                variant="ghost"
                onClick={() => setUpdateModal(false)}
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Order Status:</label>
                <Select value={orderStatus} onValueChange={(value) => setOrderStatus(value as Order['orderStatus'])}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">⏳ Pending</SelectItem>
                    <SelectItem value="processing">📦 Processing</SelectItem>
                    <SelectItem value="shipped">🚚 Shipped</SelectItem>
                    <SelectItem value="delivered">✅ Delivered</SelectItem>
                    <SelectItem value="cancelled">❌ Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Tracking Number (optional):
                </label>
                <Input
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number..."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleUpdateOrderStatus} className="flex-1">
                  Update Order
                </Button>
                <Button variant="outline" onClick={() => setUpdateModal(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderDashboard;
