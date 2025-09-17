import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingCart, Zap, Crown } from 'lucide-react';
import { billingService, HEART_PACKS } from '../services/BillingService.ts';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface HeartShopProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseSuccess?: (hearts: number) => void;
}

const HeartShop: React.FC<HeartShopProps> = ({ isOpen, onClose, onPurchaseSuccess }) => {
  const [purchasing, setPurchasing] = useState(false);
  const [billingInitialized, setBillingInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeBilling = async () => {
      try {
        const initialized = await billingService.initialize();
        setBillingInitialized(initialized);
        if (!initialized) {
          console.warn('⚠️ Google Play Billing not available');
        }
      } catch (error) {
        console.error('❌ Failed to initialize billing:', error);
        setBillingInitialized(false);
      }
    };

    if (isOpen) {
      initializeBilling();
    }
  }, [isOpen]);

  const handleHeartPurchase = async (heartPack: typeof HEART_PACKS[0]) => {
    if (!billingInitialized) {
      toast({
        title: "Billing Not Available",
        description: "Google Play Billing is not available on this device. Please try again later.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setPurchasing(true);

    try {
      console.log(`💖 Starting heart purchase for ${heartPack.name}...`);
      const result = await billingService.purchaseHeartPack(heartPack.productId);
      
      if (result.success) {
        toast({
          title: "Hearts Purchased! 💖",
          description: result.message,
          duration: 6000,
        });

        // Call success callback
        if (onPurchaseSuccess && result.hearts) {
          onPurchaseSuccess(result.hearts);
        }

        // Close the modal
        onClose();

        // Refresh the page to update heart count
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast({
          title: "Purchase Failed",
          description: result.message,
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('❌ Heart purchase error:', error);
      toast({
        title: "Purchase Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setPurchasing(false);
    }
  };

  const handleStoreNavigation = () => {
    onClose();
    navigate('/store');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Out of Hearts!</h2>
            <p className="text-white/90">
              Purchase hearts to continue learning immediately, or wait for hearts to regenerate naturally.
            </p>
          </div>
        </div>

        {/* Heart Packs */}
        <div className="p-6 space-y-4">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Hearts regenerate automatically (1 heart every 30 minutes)
            </p>
          </div>

          {HEART_PACKS.map((pack, index) => (
            <div 
              key={pack.id}
              className={`relative border-2 rounded-2xl p-4 transition-all ${
                pack.popular 
                  ? 'border-green-500 bg-green-50 scale-105 shadow-lg' 
                  : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {pack.badge && !pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {pack.badge}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(pack.hearts, 5) }).map((_, i) => (
                      <Heart 
                        key={i}
                        className="w-5 h-5 text-pink-500 fill-pink-500" 
                      />
                    ))}
                    {pack.hearts > 5 && (
                      <span className="text-pink-600 font-bold ml-1">
                        +{pack.hearts - 5}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{pack.name}</h3>
                    <p className="text-gray-600 text-sm">
                      Restore {pack.hearts} hearts instantly
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ₹{pack.price}
                  </div>
                  <button
                    onClick={() => handleHeartPurchase(pack)}
                    disabled={purchasing}
                    className={`mt-2 px-4 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                      pack.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                        : 'bg-pink-500 hover:bg-pink-600 text-white'
                    } ${
                      purchasing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {purchasing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Buy Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Alternative Options */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-center mb-4 text-gray-700">
              Other Options
            </h3>
            
            <div className="space-y-3">
              <button
                onClick={handleStoreNavigation}
                className="w-full p-3 border border-blue-300 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-blue-600"
              >
                <Zap className="w-4 h-4" />
                Visit PulsePoints Store for More Options
              </button>
              
              <button
                onClick={onClose}
                className="w-full p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
              >
                Wait for Hearts to Regenerate (Free)
              </button>
            </div>
          </div>

          {/* Heart Regeneration Info */}
          <div className="mt-4 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">
                Heart Regeneration
              </span>
            </div>
            <p className="text-xs text-gray-600">
              • Hearts regenerate automatically every 30 minutes
              • Maximum of 5 hearts can be stored
              • Perfect lesson scores restore 1 heart immediately
              • No waiting when you purchase hearts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartShop;
