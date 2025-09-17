import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
// RevenueCat product IDs (you'll need to create these in RevenueCat dashboard)
export const GEM_PACKS = [
    {
        id: 'starter',
        name: 'Starter Pulsepack',
        gems: 100,
        price: 100,
        bonus: 0,
        productId: 'gem_pack_starter'
    },
    {
        id: 'learner',
        name: 'Learner Pack',
        gems: 250,
        price: 250,
        bonus: 10,
        productId: 'gem_pack_learner'
    },
    {
        id: 'mastery',
        name: 'Mastery Pack',
        gems: 500,
        price: 500,
        bonus: 30,
        productId: 'gem_pack_mastery'
    },
    {
        id: 'elite',
        name: 'ECGKID Elite Pack',
        gems: 1000,
        price: 1000,
        bonus: 100,
        productId: 'gem_pack_elite'
    },
    {
        id: 'hero',
        name: 'ECG Hero Bundle',
        gems: 2000,
        price: 2000,
        bonus: 250,
        badge: true,
        productId: 'gem_pack_hero'
    }
];
class BillingService {
    isInitialized = false;
    async initialize() {
        try {
            // Configure RevenueCat with debug logging
            await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
            // TODO: Replace with your actual RevenueCat API key
            // Get this from RevenueCat dashboard at https://app.revenuecat.com/
            const apiKey = 'rcat_YOUR_API_KEY_HERE';
            await Purchases.configure({
                apiKey,
                appUserID: null // RevenueCat will generate anonymous ID
            });
            // Set user ID if authenticated
            const user = getAuth().currentUser;
            if (user) {
                await Purchases.logIn({ appUserID: user.uid });
            }
            this.isInitialized = true;
            console.log('✅ RevenueCat initialized successfully');
            return true;
        }
        catch (error) {
            console.error('❌ Failed to initialize RevenueCat:', error);
            return false;
        }
    }
    async purchaseGemPack(productId) {
        try {
            if (!this.isInitialized) {
                const initialized = await this.initialize();
                if (!initialized) {
                    return { success: false, message: 'Failed to initialize billing service' };
                }
            }
            const user = getAuth().currentUser;
            if (!user) {
                return { success: false, message: 'Please sign in to make purchases' };
            }
            // Find the gem pack
            const gemPack = GEM_PACKS.find(pack => pack.productId === productId);
            if (!gemPack) {
                return { success: false, message: 'Product not found' };
            }
            console.log(`🛒 Starting purchase for ${gemPack.name}...`);
            // Get current offerings
            const offerings = await Purchases.getOfferings();
            const currentOffering = offerings.current;
            if (!currentOffering) {
                return { success: false, message: 'No products available for purchase' };
            }
            // Find the package by identifier
            const packageToPurchase = currentOffering.availablePackages.find(pkg => pkg.identifier === productId);
            if (!packageToPurchase) {
                return { success: false, message: 'Product not available for purchase' };
            }
            // Make the purchase
            const purchaseResult = await Purchases.purchasePackage({
                aPackage: packageToPurchase
            });
            // Check if purchase was successful
            const customerInfo = purchaseResult.customerInfo;
            const hasActiveEntitlement = Object.keys(customerInfo.entitlements.active).length > 0;
            if (hasActiveEntitlement) {
                // Calculate total gems (base + bonus)
                const totalGems = gemPack.gems + gemPack.bonus;
                // Update user's gems in Firestore
                const userRef = doc(db, 'users', user.uid);
                await updateDoc(userRef, {
                    gems: increment(totalGems),
                    lastPurchase: new Date().toISOString(),
                    totalPurchases: increment(1),
                    revenueCatUserId: customerInfo.originalAppUserId
                });
                // If this is the hero bundle, award the exclusive badge
                if (gemPack.badge) {
                    await updateDoc(userRef, {
                        badges: increment(1),
                        exclusiveBadges: increment(1)
                    });
                }
                console.log(`✅ Purchase successful! Awarded ${totalGems} gems to ${user.email}`);
                return {
                    success: true,
                    message: `Successfully purchased ${gemPack.name}! You received ${totalGems} gems.`,
                    gems: totalGems
                };
            }
            else {
                console.log('❌ Purchase failed or was cancelled');
                return {
                    success: false,
                    message: 'Purchase was cancelled or failed. No charges were made.'
                };
            }
        }
        catch (error) {
            console.error('❌ Purchase error:', error);
            // Handle specific RevenueCat errors
            if (error.code === 'PURCHASE_CANCELLED') {
                return { success: false, message: 'Purchase was cancelled.' };
            }
            else if (error.code === 'STORE_PROBLEM') {
                return { success: false, message: 'There was a problem with the Google Play Store. Please try again.' };
            }
            else if (error.code === 'PAYMENT_PENDING') {
                return { success: false, message: 'Payment is pending. You will receive your gems once payment is processed.' };
            }
            else {
                return { success: false, message: `Purchase failed: ${error.message || 'Unknown error'}` };
            }
        }
    }
    async restorePurchases() {
        try {
            if (!this.isInitialized) {
                const initialized = await this.initialize();
                if (!initialized) {
                    return { success: false, message: 'Failed to initialize billing service' };
                }
            }
            const user = getAuth().currentUser;
            if (!user) {
                return { success: false, message: 'Please sign in to restore purchases' };
            }
            // Restore purchases
            const restoreResult = await Purchases.restorePurchases();
            let restoredCount = 0;
            const activeEntitlements = restoreResult.customerInfo.entitlements.active;
            for (const [entitlementId] of Object.entries(activeEntitlements)) {
                // Find the gem pack for this entitlement
                const gemPack = GEM_PACKS.find(pack => pack.productId === entitlementId);
                if (gemPack) {
                    const totalGems = gemPack.gems + gemPack.bonus;
                    // Award gems (only if not already awarded)
                    const userRef = doc(db, 'users', user.uid);
                    await updateDoc(userRef, {
                        gems: increment(totalGems),
                        [`restored_${entitlementId}`]: new Date().toISOString()
                    });
                    if (gemPack.badge) {
                        await updateDoc(userRef, {
                            badges: increment(1),
                            exclusiveBadges: increment(1)
                        });
                    }
                    restoredCount++;
                }
            }
            if (restoredCount > 0) {
                return {
                    success: true,
                    message: `Successfully restored ${restoredCount} purchase(s)`
                };
            }
            else {
                return {
                    success: true,
                    message: 'No purchases found to restore'
                };
            }
        }
        catch (error) {
            console.error('❌ Restore purchases error:', error);
            return {
                success: false,
                message: `Failed to restore purchases: ${error.message || 'Unknown error'}`
            };
        }
    }
    async setUserID(userID) {
        try {
            if (this.isInitialized) {
                await Purchases.logIn({ appUserID: userID });
                console.log(`✅ RevenueCat user ID set to: ${userID}`);
            }
        }
        catch (error) {
            console.error('❌ Error setting RevenueCat user ID:', error);
        }
    }
    async logout() {
        try {
            if (this.isInitialized) {
                await Purchases.logOut();
                console.log('🔌 Logged out from RevenueCat');
            }
        }
        catch (error) {
            console.error('❌ Error logging out from RevenueCat:', error);
        }
    }
}
// Export singleton instance
export const billingService = new BillingService();
