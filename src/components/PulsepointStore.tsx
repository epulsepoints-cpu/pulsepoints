import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PulsepointStore.module.css';
import { usePulseStore } from './usePulseStore';
import storeData from './storeItems';
import { DownloadService } from '@/services/downloadService';
import { toast as showToast } from '@/components/ui/use-toast';
import { billingService, GEM_PACKS, HEART_PACKS } from '../services/BillingService.ts';
import { getAuth } from 'firebase/auth';
import InternationalAddressForm from './InternationalAddressForm';
import { OrderManagementService, ShippingAddress, OrderItem } from '@/services/OrderManagementService';

// Fallback for empty or missing storeData (in case of import issues)
const digitalItemsRaw = storeData?.digitalStoreItems || [];
const bonusQuizIdx = digitalItemsRaw.findIndex(item => item.id === 'bonus_quiz');
let digitalItemsOrdered = [...digitalItemsRaw];
if (bonusQuizIdx > -1) {
  const [bonusQuiz] = digitalItemsOrdered.splice(bonusQuizIdx, 1);
  digitalItemsOrdered = [
    {
      ...bonusQuiz,
      title: bonusQuiz.name + ' (Double Reward!)',
      description: (bonusQuiz.description || '') + '\n\nBuy this for a double benefit: complete the quiz to earn XP & gems instantly!',
      cta: 'Take Quiz for Double Reward',
    } as any, // type assertion to allow extra fields
    ...digitalItemsOrdered
  ];
}
const digitalItems = digitalItemsOrdered.map(item => ({
  ...item,
  title: (item as any).title || item.name,
  cost: { xp: item.cost },
  cta: (item as any).cta, // allow cta for bonus_quiz
}));
const physicalItems = (storeData?.gemStoreItems || []).map(item => ({
  ...item,
  title: item.name,
  cost: { gems: item.cost },
}));
const gemPacks = storeData?.gemPacks || [
  { id: 'starter', name: 'Starter Pulsepack', gems: 100, price: 100, bonus: 0 },
  { id: 'learner', name: 'Learner Pack', gems: 250, price: 250, bonus: 10 },
  { id: 'mastery', name: 'Mastery Pack', gems: 500, price: 500, bonus: 30 },
  { id: 'elite', name: 'ECGKID Elite Pack', gems: 1000, price: 1000, bonus: 100 },
  { id: 'hero', name: 'ECG Hero Bundle', gems: 2000, price: 2000, bonus: 250, badge: true },
];

function PulsepointStore() {
  const { xp, gems, spendXP, spendGems, loading } = usePulseStore();
  const [tab, setTab] = useState('digital');
  const [modal, setModal] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<any>(null);
  const [shipping, setShipping] = useState({ name: '', address: '', phone: '' });
  const [toast, setToast] = useState('');
  const [purchasing, setPurchasing] = useState(false);
  const [billingInitialized, setBillingInitialized] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const navigate = useNavigate();

  // Initialize billing service on component mount
  useEffect(() => {
    const initBilling = async () => {
      const success = await billingService.initialize();
      setBillingInitialized(success);
      if (!success) {
        console.warn('⚠️ Billing service failed to initialize - purchases will be disabled');
      }
    };
    initBilling();

    // Set user ID for RevenueCat when user is authenticated
    const user = getAuth().currentUser;
    if (user && billingInitialized) {
      billingService.setUserID(user.uid);
    }
  }, [billingInitialized]);

  // --- Tabs: digital, physical, gems ---
  const tabs = [
    { key: 'digital', label: '📘 Digital Products (XP)' },
    { key: 'physical', label: '💎 ECGKID Gear (Gems)' },
    { key: 'hearts', label: '💖 Buy Hearts' },
    { key: 'gems', label: '💼 Buy Gems' },
  ];

  const handleRedeem = (item) => {
    setModal(item);
    setModalItem(item);
  };

  // Handle Google Play gem purchases
  const handleGemPurchase = async (gemPack) => {
    if (!billingInitialized) {
      showToast({
        title: "Billing Not Available",
        description: "Google Play Billing is not available on this device. Please try again later.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setPurchasing(true);
    
    try {
      console.log(`🛒 Starting purchase for ${gemPack.name}...`);
      
      const result = await billingService.purchaseGemPack(gemPack.productId);
      
      if (result.success) {
        showToast({
          title: "Purchase Successful! 💎",
          description: result.message,
          duration: 6000,
        });
        
        // Refresh user data to show new gem balance
        window.location.reload();
      } else {
        showToast({
          title: "Purchase Failed",
          description: result.message,
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('❌ Purchase error:', error);
      showToast({
        title: "Purchase Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setPurchasing(false);
    }
  };

  // Handle Google Play heart purchases
  const handleHeartPurchase = async (heartPack) => {
    if (!billingInitialized) {
      showToast({
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
        showToast({
          title: "Hearts Purchased! 💖",
          description: result.message,
          duration: 6000,
        });
        
        // Refresh user data to show new heart balance
        window.location.reload();
      } else {
        showToast({
          title: "Purchase Failed",
          description: result.message,
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('❌ Heart purchase error:', error);
      showToast({
        title: "Heart Purchase Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setPurchasing(false);
    }
  };

  // Handle restore purchases
  const handleRestorePurchases = async () => {
    if (!billingInitialized) {
      showToast({
        title: "Billing Not Available",
        description: "Google Play Billing is not available on this device.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setPurchasing(true);
    
    try {
      const result = await billingService.restorePurchases();
      
      showToast({
        title: result.success ? "Restore Complete" : "Restore Failed",
        description: result.message,
        variant: result.success ? "default" : "destructive",
        duration: 4000,
      });
      
      if (result.success) {
        // Refresh user data to show restored gems
        window.location.reload();
      }
    } catch (error) {
      console.error('❌ Restore error:', error);
      showToast({
        title: "Restore Error",
        description: "Failed to restore purchases. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setPurchasing(false);
    }
  };

  const confirmRedeem = async () => {
    if (!modalItem) return;
    
    if (modalItem.type === 'digital') {
      const ok = await spendXP(modalItem.cost.xp);
      if (ok) {
        // Handle bonus quiz differently
        if (modalItem.id === 'bonus_quiz') {
          setToast('Bonus Quiz unlocked! Redirecting...');
          setTimeout(() => navigate('/bonus-quiz'), 1200);
        } else {
          // Handle digital downloads
          try {
            const downloadResult = await DownloadService.downloadFile(modalItem.id);
            
            if (downloadResult.success) {
              // Record download in user's library
              try {
                const fileInfo = DownloadService.getFileInfo(modalItem.id);
                await OrderManagementService.recordDigitalDownload(
                  modalItem.id,
                  modalItem.title,
                  fileInfo?.fileSize || '2.0 MB',
                  fileInfo?.fileType || 'pdf',
                  fileInfo?.fileUrl || `/digital-products/${modalItem.id}.pdf`
                );
              } catch (recordError) {
                console.warn('Failed to record download in library:', recordError);
                // Continue with download even if recording fails
              }
              
              setToast(downloadResult.message);
              
              // Show success toast with download info and library access
              showToast({
                title: "Download Started! 📥",
                description: `${downloadResult.message} - Access anytime from Downloads menu`,
                duration: 4000,
              });
            } else {
              // Fallback to demo for development
              const demoResult = DownloadService.simulateDownload(modalItem.id);
              
              // Still record demo download in library for testing
              try {
                await OrderManagementService.recordDigitalDownload(
                  modalItem.id,
                  modalItem.title,
                  '2.0 MB (Demo)',
                  'pdf',
                  `/digital-products/demo/${modalItem.id}.pdf`
                );
              } catch (recordError) {
                console.warn('Failed to record demo download:', recordError);
              }
              
              setToast(demoResult.message);
              
              showToast({
                title: "Demo Mode 🎭",
                description: `${demoResult.message} - Added to Downloads library`,
                duration: 4000,
              });
            }
          } catch (error) {
            console.error('Download error:', error);
            setToast('Download failed. Please try again.');
            
            showToast({
              title: "Download Failed",
              description: "Unable to start download. Please try again or contact support.",
              variant: "destructive",
              duration: 4000,
            });
          }
        }
        setTimeout(() => setToast(''), 4000);
      }
    } else {
      // Physical item - check if we can spend gems first
      const ok = await spendGems(modalItem.cost.gems);
      if (ok) {
        // Show address form for physical items
        setShowAddressForm(true);
      }
    }
    setModal(null);
    setModalItem(null);
  };

  // Handle address form submission for physical products
  const handleAddressSubmit = async (address: ShippingAddress) => {
    if (!modalItem) return;

    setIsProcessingOrder(true);
    
    try {
      // Create order item
      const orderItem: OrderItem = {
        id: modalItem.id,
        name: modalItem.title,
        type: 'physical',
        cost: modalItem.cost,
        image: modalItem.image
      };

      // Create the order
      const result = await OrderManagementService.createPhysicalOrder([orderItem], address);
      
      if (result.success) {
        showToast({
          title: "Order Placed Successfully! 🎉",
          description: result.message,
          duration: 6000,
        });
        
        setToast('Order placed! Check your email for confirmation.');
        setTimeout(() => setToast(''), 4000);
      } else {
        showToast({
          title: "Order Failed",
          description: result.message,
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Order creation failed:', error);
      showToast({
        title: "Order Error",
        description: "Unable to process your order. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsProcessingOrder(false);
      setShowAddressForm(false);
      setModalItem(null);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setToast('Shipping info submitted!');
    setTimeout(() => setToast(''), 2000);
    setModal(null);
    setModalItem(null);
    setShipping({ name: '', address: '', phone: '' });
  };

  return (
    <div className={styles.storeContainer}>
      {/* Onboarding Flow for Store (Joyride) */}
      {/* <OnboardingFlow /> can be placed here if you want onboarding in the store only */}
      <div className={styles.tabs}>
        {tabs.map(t => (
          <button
            key={t.key}
            className={tab === t.key ? styles.tabButtonActive : styles.tabButton}
            onClick={() => setTab(t.key)}
            id={t.key === 'store' ? 'store-tab' : t.key === 'digital' ? 'store-digital-tab' : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'digital' && (
        <div className={styles.grid} id="store-digital-section">
          {digitalItems.map(item => {
            const fileInfo = DownloadService.getFileInfo(item.id);
            return (
              <div
                className={styles.card}
                key={item.id}
                id={item.id === 'bonus_quiz' ? 'bonus-quiz-item' : `store-digital-item-${item.id}`}
              >
                <img src={item.image} alt={item.title} className={styles.cardImage} />
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardDesc}>{item.description}</div>
                
                {/* Show file info for downloadable items */}
                {fileInfo && item.id !== 'bonus_quiz' && (
                  <div className={styles.fileInfo}>
                    <span className={styles.fileType}>📄 {fileInfo.fileType.toUpperCase()}</span>
                    <span className={styles.fileSize}>{fileInfo.fileSize}</span>
                  </div>
                )}
                
                <div className={styles.cardCost}>🪙 {item.cost.xp} XP</div>
                <button
                  className={styles.redeemBtn}
                  disabled={xp < item.cost.xp}
                  onClick={() => handleRedeem(item)}
                  tabIndex={0}
                >
                  {item.id === 'bonus_quiz' && item.cta ? item.cta : 
                   item.id === 'bonus_quiz' ? 'Take Quiz' : 'Download'}
                </button>
                {item.id === 'bonus_quiz' && (
                  <div className={styles.bonusCta} style={{color:'#6366f1',fontWeight:700,marginTop:4,fontSize:'0.95em'}}>Earn XP & Gems instantly!</div>
                )}
                {xp < item.cost.xp && (
                  <div className={styles.tooltip}>
                    This item costs {item.cost.xp} XP. You have {xp} XP.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {tab === 'physical' && (
        <div className={styles.grid} id="store-physical-section">
          {physicalItems.map((item, idx) => (
            <div className={styles.card} key={item.id} id={idx === 0 ? 'physical-product' : `store-physical-item-${item.id}` }>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDesc}>{item.description}</div>
              <div className={styles.cardCost}>💎 {item.cost.gems} Gems</div>
              <button
                className={styles.redeemBtn}
                disabled={gems < item.cost.gems}
                onClick={() => handleRedeem(item)}
                tabIndex={0}
              >
                Redeem
              </button>
              {gems < item.cost.gems && (
                <div className={styles.tooltip}>
                  This item costs {item.cost.gems} Gems. You have {gems} Gems.
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {tab === 'hearts' && (
        <div>
          <div className={styles.gemCta} style={{ marginBottom: 16 }}>
            Purchase Heart Packs - Continue Learning Immediately!
            {!billingInitialized && (
              <div style={{ fontSize: '0.8rem', color: '#f59e42', marginTop: '0.5rem' }}>
                ⚠️ Google Play Billing not available
              </div>
            )}
          </div>
          
          <div style={{ marginBottom: 16, textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
            💡 Hearts regenerate automatically every 30 minutes, or purchase to continue immediately!
          </div>

          {HEART_PACKS.map(pack => (
            <div className={styles.gemPack} key={pack.id} style={{ 
              border: pack.popular ? '3px solid #10b981' : '2px solid #e5e5e5',
              position: 'relative'
            }}>
              {pack.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#10b981',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  Most Popular
                </div>
              )}
              <div className={styles.gemPackTitle}>
                💖 {pack.name}
                {pack.badge && (
                  <span style={{ 
                    fontSize: '0.8rem', 
                    background: '#3b82f6', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: '10px',
                    marginLeft: '8px'
                  }}>
                    {pack.badge}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                Restore {pack.hearts} hearts instantly
              </div>
              <div>
                ₹{pack.price}
              </div>
              <button
                onClick={() => handleHeartPurchase(pack)}
                disabled={purchasing || !billingInitialized}
                className={styles.gemPackButton}
                style={{ 
                  background: pack.popular ? 'linear-gradient(90deg, #10b981, #34d399)' : 'linear-gradient(90deg, #ec4899, #f472b6)',
                  opacity: purchasing || !billingInitialized ? 0.6 : 1
                }}
              >
                {purchasing ? 'Processing...' : 'Buy Hearts 💖'}
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === 'gems' && (
        <div>
          <div className={styles.gemCta} style={{ marginBottom: 16 }}>
            Purchase Gem Packs
            {!billingInitialized && (
              <div style={{ fontSize: '0.8rem', color: '#f59e42', marginTop: '0.5rem' }}>
                ⚠️ Google Play Billing not available
              </div>
            )}
          </div>
          
          {/* Restore Purchases Button */}
          <div style={{ marginBottom: 16, textAlign: 'center' }}>
            <button 
              onClick={handleRestorePurchases}
              disabled={purchasing || !billingInitialized}
              style={{
                background: 'linear-gradient(90deg, #10b981, #34d399)',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: purchasing || !billingInitialized ? 'not-allowed' : 'pointer',
                opacity: purchasing || !billingInitialized ? 0.6 : 1
              }}
            >
              {purchasing ? 'Restoring...' : 'Restore Purchases'}
            </button>
          </div>

          {GEM_PACKS.map(pack => (
            <div className={styles.gemPack} key={pack.id}>
              <div className={styles.gemPackTitle}>
                {pack.name} <span>({pack.gems} gems)</span>
              </div>
              <div>
                ₹{pack.price} 
                {pack.bonus > 0 && (
                  <span className={styles.gemPackBonus}>
                    +{pack.bonus} gems{pack.badge && ' + exclusive badge 🎖️'}
                  </span>
                )}
              </div>
              <button 
                className={styles.gemBuyBtn}
                onClick={() => handleGemPurchase(pack)}
                disabled={purchasing || !billingInitialized}
                style={{
                  cursor: purchasing || !billingInitialized ? 'not-allowed' : 'pointer',
                  opacity: purchasing || !billingInitialized ? 0.6 : 1
                }}
              >
                {purchasing ? 'Processing...' : 'Buy'}
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Modal for confirmation and shipping */}
      {modal && modal !== 'shipping' && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.3)',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'#fff',borderRadius:'1rem',padding:'2rem',minWidth:280,maxWidth:340}}>
            <h3 style={{fontWeight:700,fontSize:'1.1rem',marginBottom:12}}>Confirm Redemption</h3>
            <div style={{marginBottom:18}}>
              Redeem <b>{modalItem?.title}</b> for {modalItem?.type==='digital' ? `${modalItem?.cost.xp} XP` : `${modalItem?.cost.gems} Gems`}?
            </div>
            <div style={{display:'flex',gap:12,justifyContent:'flex-end'}}>
              <button onClick={()=>{setModal(null);setModalItem(null);}} style={{background:'#eee',border:'none',borderRadius:8,padding:'0.5rem 1.2rem',fontWeight:600}}>Cancel</button>
              <button onClick={confirmRedeem} style={{background:'linear-gradient(90deg,#6366f1,#a5b4fc)',color:'#fff',border:'none',borderRadius:8,padding:'0.5rem 1.2rem',fontWeight:600}}>Confirm</button>
            </div>
          </div>
        </div>
      )}
      {modal==='shipping' && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.3)',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <form onSubmit={handleShippingSubmit} style={{background:'#fff',borderRadius:'1rem',padding:'2rem',minWidth:280,maxWidth:340}}>
            <h3 style={{fontWeight:700,fontSize:'1.1rem',marginBottom:12}}>Shipping Info</h3>
            <input required placeholder="Name" value={shipping.name} onChange={e=>setShipping(s=>({...s,name:e.target.value}))} style={{width:'100%',marginBottom:10,padding:8,borderRadius:6,border:'1px solid #eee'}} />
            <input required placeholder="Address" value={shipping.address} onChange={e=>setShipping(s=>({...s,address:e.target.value}))} style={{width:'100%',marginBottom:10,padding:8,borderRadius:6,border:'1px solid #eee'}} />
            <input required placeholder="Phone" value={shipping.phone} onChange={e=>setShipping(s=>({...s,phone:e.target.value}))} style={{width:'100%',marginBottom:18,padding:8,borderRadius:6,border:'1px solid #eee'}} />
            <div style={{display:'flex',gap:12,justifyContent:'flex-end'}}>
              <button type="button" onClick={()=>setModal(null)} style={{background:'#eee',border:'none',borderRadius:8,padding:'0.5rem 1.2rem',fontWeight:600}}>Cancel</button>
              <button type="submit" style={{background:'linear-gradient(90deg,#6366f1,#a5b4fc)',color:'#fff',border:'none',borderRadius:8,padding:'0.5rem 1.2rem',fontWeight:600}}>Submit</button>
            </div>
          </form>
        </div>
      )}
      {toast && (
        <div style={{position:'fixed',bottom:30,left:'50%',transform:'translateX(-50%)',background:'#6366f1',color:'#fff',padding:'0.7rem 1.5rem',borderRadius:999,zIndex:200,fontWeight:700,boxShadow:'0 2px 8px 0 rgba(99,102,241,0.13)'}}>{toast}</div>
      )}
      
      {/* Enhanced International Address Form for Physical Products */}
      {showAddressForm && modalItem && (
        <InternationalAddressForm
          onSubmit={handleAddressSubmit}
          onCancel={() => {
            setShowAddressForm(false);
            setModalItem(null);
          }}
          isLoading={isProcessingOrder}
        />
      )}
    </div>
  );
}

export default PulsepointStore;
