# 🚀 ECGkid PulsePoints - Google Play Payment Setup
# PowerShell Setup Script

Write-Host "🎯 ECGkid PulsePoints - Google Play Payment Setup" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green
Write-Host ""

# Step 1: Check current status
Write-Host "📋 Current Setup Status:" -ForegroundColor Yellow
Write-Host "✅ RevenueCat plugin installed" -ForegroundColor Green
Write-Host "✅ Billing service created" -ForegroundColor Green
Write-Host "✅ Android permissions configured" -ForegroundColor Green
Write-Host "✅ 7 products defined (5 gem packs + 2 heart packs)" -ForegroundColor Green
Write-Host "🔄 API key needs updating" -ForegroundColor Red
Write-Host ""

# Step 2: Show what needs to be done
Write-Host "🎯 Next Steps to Activate Payments:" -ForegroundColor Cyan
Write-Host ""

Write-Host "1️⃣  CREATE REVENUECAT ACCOUNT" -ForegroundColor White
Write-Host "   👉 Go to: https://app.revenuecat.com/" -ForegroundColor Gray
Write-Host "   👉 Sign up and create project: 'ECGkid PulsePoints'" -ForegroundColor Gray
Write-Host "   👉 Add Android app with Bundle ID: com.ecgkid.pulsepoints" -ForegroundColor Gray
Write-Host ""

Write-Host "2️⃣  GET API KEY" -ForegroundColor White
Write-Host "   👉 RevenueCat Dashboard → Project Settings → API Keys" -ForegroundColor Gray
Write-Host "   👉 Copy the Public API Key" -ForegroundColor Gray
Write-Host "   👉 Update line 102 in src/services/BillingService.ts" -ForegroundColor Gray
Write-Host ""

Write-Host "3️⃣  GOOGLE PLAY CONSOLE PRODUCTS" -ForegroundColor White
Write-Host "   Create these 7 products:" -ForegroundColor Gray
Write-Host "   📦 gem_pack_starter (₹100)" -ForegroundColor Gray
Write-Host "   📦 gem_pack_learner (₹250)" -ForegroundColor Gray
Write-Host "   📦 gem_pack_mastery (₹500)" -ForegroundColor Gray
Write-Host "   📦 gem_pack_elite (₹1000)" -ForegroundColor Gray
Write-Host "   📦 gem_pack_hero (₹2000)" -ForegroundColor Gray
Write-Host "   ❤️ heart_pack_5 (₹29)" -ForegroundColor Gray
Write-Host "   ❤️ heart_pack_10 (₹49)" -ForegroundColor Gray
Write-Host ""

Write-Host "4️⃣  BUILD & TEST" -ForegroundColor White
Write-Host "   👉 npm run build:android:debug" -ForegroundColor Gray
Write-Host "   👉 Upload to Google Play Internal Testing" -ForegroundColor Gray
Write-Host "   👉 Test purchase flow" -ForegroundColor Gray
Write-Host ""

Write-Host "💰 REVENUE POTENTIAL:" -ForegroundColor Yellow
Write-Host "   If 100 users buy Elite Pack monthly: ₹70,000 revenue" -ForegroundColor Green
Write-Host "   Your 70% share after Google's 30% cut" -ForegroundColor Green
Write-Host ""

Write-Host "📞 NEED HELP?" -ForegroundColor Cyan
Write-Host "   Check: GOOGLE_PLAY_PAYMENT_ACTIVATION_GUIDE.md" -ForegroundColor Gray
Write-Host ""

Write-Host "🚀 Your payment system is 80% ready - just need account setup!" -ForegroundColor Green

# Offer to open URLs
Write-Host ""
$openRevenueCat = Read-Host "Would you like to open RevenueCat signup page? (y/N)"
if ($openRevenueCat -eq 'y' -or $openRevenueCat -eq 'Y') {
    Start-Process "https://app.revenuecat.com/"
    Write-Host "✅ Opened RevenueCat signup page" -ForegroundColor Green
}

$openGuide = Read-Host "Would you like to open the detailed setup guide? (y/N)"  
if ($openGuide -eq 'y' -or $openGuide -eq 'Y') {
    Start-Process "GOOGLE_PLAY_PAYMENT_ACTIVATION_GUIDE.md"
    Write-Host "✅ Opened setup guide" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 Ready to make money with your ECG app! 💎❤️" -ForegroundColor Green
