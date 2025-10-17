# ECG Quiz Image Analysis Script
# This script analyzes all image references in quiz files and checks their existence

$quizFiles = @(
    "src\data\ecg-quizzes-25.ts",
    "src\data\ecg-quizzes-26-50.ts", 
    "src\data\ecg-quizzes-MI-50.ts",
    "src\data\ecg-flash-mode-quizzes.ts"
)

$allImageUrls = @()
$missingImages = @()
$existingImages = @()

Write-Host "=== ECG QUIZ IMAGE ANALYSIS ===" -ForegroundColor Cyan

# Extract all image URLs from quiz files
foreach ($file in $quizFiles) {
    if (Test-Path $file) {
        Write-Host "Analyzing: $file" -ForegroundColor Yellow
        $content = Get-Content $file -Raw
        $matches = [regex]::Matches($content, '"imageUrl":\s*"([^"]+)"')
        foreach ($match in $matches) {
            $imageUrl = $match.Groups[1].Value
            $allImageUrls += $imageUrl
        }
    }
}

Write-Host "`nTOTAL IMAGES REFERENCED: $($allImageUrls.Count)" -ForegroundColor Green

# Group by type
$medicalAccurate = $allImageUrls | Where-Object { $_ -match "medical_accurate" }
$miDatabase = $allImageUrls | Where-Object { $_ -match "MI_ecg_database" }
$wellensPattern = $allImageUrls | Where-Object { $_ -match "Wellens" }

Write-Host "Medical Accurate: $($medicalAccurate.Count)" -ForegroundColor White
Write-Host "MI Database: $($miDatabase.Count)" -ForegroundColor White
Write-Host "Wellens Pattern: $($wellensPattern.Count)" -ForegroundColor White

# Check which images are missing
Write-Host "`n=== CHECKING IMAGE EXISTENCE ===" -ForegroundColor Cyan

foreach ($imageUrl in ($allImageUrls | Sort-Object | Get-Unique)) {
    # Convert URL to file path
    $filePath = $imageUrl.TrimStart('/')
    $fullPath = Join-Path "public" $filePath
    
    if (Test-Path $fullPath) {
        $existingImages += $imageUrl
    } else {
        $missingImages += $imageUrl
        Write-Host "MISSING: $imageUrl" -ForegroundColor Red
    }
}

Write-Host "`n=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total Images Referenced: $($allImageUrls.Count)" -ForegroundColor White
Write-Host "Existing Images: $($existingImages.Count)" -ForegroundColor Green
Write-Host "Missing Images: $($missingImages.Count)" -ForegroundColor Red

if ($missingImages.Count -gt 0) {
    Write-Host "`n=== MISSING IMAGES BY CATEGORY ===" -ForegroundColor Cyan
    
    $missingMedical = $missingImages | Where-Object { $_ -match "medical_accurate" }
    $missingMI = $missingImages | Where-Object { $_ -match "MI_ecg_database" }
    $missingWellens = $missingImages | Where-Object { $_ -match "Wellens" }
    
    Write-Host "`nMISSING MEDICAL_ACCURATE ($($missingMedical.Count)):" -ForegroundColor Yellow
    $missingMedical | ForEach-Object { Write-Host "  $_" }
    
    Write-Host "`nMISSING MI_DATABASE ($($missingMI.Count)):" -ForegroundColor Yellow  
    $missingMI | ForEach-Object { Write-Host "  $_" }
    
    Write-Host "`nMISSING WELLENS PATTERN ($($missingWellens.Count)):" -ForegroundColor Yellow
    $missingWellens | ForEach-Object { Write-Host "  $_" }
}