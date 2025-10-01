# Implementation Script for Android Lazy Loading Optimization

Write-Host "🚀 Starting Android Lazy Loading Implementation..." -ForegroundColor Green

# Step 1: Backup current ECGMasterHub
Write-Host "📋 Step 1: Backing up current ECGMasterHub..." -ForegroundColor Yellow
if (Test-Path "src\components\ECGMasterHub.tsx") {
    Copy-Item "src\components\ECGMasterHub.tsx" "src\components\ECGMasterHub.backup.tsx" -Force
    Write-Host "✅ Backup created: ECGMasterHub.backup.tsx" -ForegroundColor Green
} else {
    Write-Host "⚠️  ECGMasterHub.tsx not found in expected location" -ForegroundColor Red
}

# Step 2: Replace with optimized version
Write-Host "📋 Step 2: Replacing with optimized version..." -ForegroundColor Yellow
if (Test-Path "src\components\OptimizedECGMasterHub.tsx") {
    Copy-Item "src\components\OptimizedECGMasterHub.tsx" "src\components\ECGMasterHub.tsx" -Force
    Write-Host "✅ ECGMasterHub.tsx replaced with optimized version" -ForegroundColor Green
} else {
    Write-Host "❌ OptimizedECGMasterHub.tsx not found" -ForegroundColor Red
    exit 1
}

# Step 3: Check if all required files exist
Write-Host "📋 Step 3: Checking required files..." -ForegroundColor Yellow

$requiredFiles = @(
    "src\services\LazyLessonLoader.ts",
    "src\hooks\useLazyLesson.ts",
    "src\components\LessonLoading.tsx",
    "src\components\LazyMedia.tsx",
    "src\components\PerformanceMonitor.tsx"
)

$allFilesExist = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file exists" -ForegroundColor Green
    } else {
        Write-Host "❌ $file missing" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host "❌ Some required files are missing. Please ensure all files are created." -ForegroundColor Red
    exit 1
}

# Step 4: Build and test
Write-Host "📋 Step 4: Building project..." -ForegroundColor Yellow
try {
    npm run build 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Build successful!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Build completed with warnings. Check console for details." -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Build failed. Running npm run build to see errors..." -ForegroundColor Red
    npm run build
    exit 1
}

# Step 5: Show bundle size comparison
Write-Host "📋 Step 5: Checking bundle sizes..." -ForegroundColor Yellow
if (Test-Path "dist\assets") {
    $jsFiles = Get-ChildItem "dist\assets\*.js" | Sort-Object Length -Descending
    Write-Host "📊 JavaScript bundle sizes:" -ForegroundColor Cyan
    foreach ($file in $jsFiles) {
        $sizeKB = [math]::Round($file.Length / 1KB, 2)
        $sizeColor = if ($sizeKB -lt 500) { "Green" } elseif ($sizeKB -lt 2000) { "Yellow" } else { "Red" }
        Write-Host "   $($file.Name): $sizeKB KB" -ForegroundColor $sizeColor
    }
    
    $totalSizeKB = ($jsFiles | Measure-Object Length -Sum).Sum / 1KB
    Write-Host "   Total JS size: $([math]::Round($totalSizeKB, 2)) KB" -ForegroundColor Cyan
    
    if ($totalSizeKB -lt 5000) {
        Write-Host "✅ Bundle size optimized! Under 5MB total" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Bundle size still large. Consider further optimization." -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  dist/assets folder not found. Build may have failed." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Implementation Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Testing on Android:" -ForegroundColor Cyan
Write-Host "1. Open Chrome DevTools (chrome://inspect)" -ForegroundColor White
Write-Host "2. Check Memory tab - should show <100MB usage" -ForegroundColor White
Write-Host "3. Test lesson loading - should be smooth without freezing" -ForegroundColor White
Write-Host "4. Use Performance Monitor component for real-time metrics" -ForegroundColor White
Write-Host ""
Write-Host "🔧 If you encounter issues:" -ForegroundColor Cyan
Write-Host "- Restore backup: Copy-Item 'src\components\ECGMasterHub.backup.tsx' 'src\components\ECGMasterHub.tsx' -Force" -ForegroundColor White
Write-Host "- Check console for TypeScript errors" -ForegroundColor White
Write-Host "- Ensure all import paths are correct" -ForegroundColor White