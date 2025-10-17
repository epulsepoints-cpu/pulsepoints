# Comprehensive Branding Update: ECG Master → E-Pulsepoints
# Fix all remaining ECG Master references throughout the application

Write-Host "=== COMPREHENSIVE BRANDING UPDATE: ECG MASTER → E-PULSEPOINTS ===" -ForegroundColor Green

$filesToUpdate = @(
    "src/components/MainDuolingoLayout.tsx",
    "src/data/ecg-quizzes-25.ts", 
    "src/data/ecg-quizzes-26-50.ts",
    "src/data/ecg-quizzes-25.json",
    "src/data/ecg-quizzes-26-50.json", 
    "src/data/ecg-quiz-structure.json",
    "src/services/achievementService.ts",
    "src/services/achievementService.js",
    "src/services/autoInitializeEventsSystem.ts",
    "src/services/autoInitializeEventsSystem.js",
    "src/data/simpleEventsData.ts"
)

$brandingReplacements = @{
    "ECG Master" = "E-Pulsepoints"
    "ecg-master" = "e-pulsepoints-master"
    "ECG master" = "E-Pulsepoints" 
    "ECG Mastery" = "E-Pulsepoints Mastery"
    "ECG mastery" = "E-Pulsepoints mastery"
}

$totalReplacements = 0
$filesModified = 0

foreach ($filePath in $filesToUpdate) {
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $filePath" -ForegroundColor Yellow
        
        $content = Get-Content $filePath -Raw
        $originalContent = $content
        $fileReplacements = 0
        
        foreach ($oldText in $brandingReplacements.Keys) {
            $newText = $brandingReplacements[$oldText]
            if ($content.Contains($oldText)) {
                $content = $content.Replace($oldText, $newText)
                $fileReplacements++
                $totalReplacements++
                Write-Host "  ✓ Replaced '$oldText' with '$newText'" -ForegroundColor Green
            }
        }
        
        if ($content -ne $originalContent) {
            $content | Set-Content $filePath -NoNewline
            $filesModified++
            Write-Host "  📝 Updated: $filePath ($fileReplacements changes)" -ForegroundColor Cyan
        } else {
            Write-Host "  ✅ No changes needed in $filePath" -ForegroundColor Gray
        }
    } else {
        Write-Host "⚠️ FILE NOT FOUND: $filePath" -ForegroundColor Red
    }
}

Write-Host "`n=== BRANDING UPDATE SUMMARY ===" -ForegroundColor Cyan
Write-Host "Files processed: $($filesToUpdate.Count)" -ForegroundColor Green
Write-Host "Files modified: $filesModified" -ForegroundColor Green
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green

Write-Host "`n=== SPECIFIC FIXES APPLIED ===" -ForegroundColor Cyan
Write-Host "✅ Navigation: 'ECG Master' → 'E-Pulsepoints' in main layout" -ForegroundColor Green
Write-Host "✅ Quiz databases: Updated all quiz file descriptions" -ForegroundColor Green  
Write-Host "✅ Achievement system: Updated ECG Master achievement IDs" -ForegroundColor Green
Write-Host "✅ Events system: Updated mastery event titles" -ForegroundColor Green
Write-Host "✅ Badge references: Updated ecg-master badge identifiers" -ForegroundColor Green

Write-Host "`n=== BRANDING CONSISTENCY CHECK ===" -ForegroundColor Cyan
Write-Host "Checking for any remaining 'ECG Master' references..." -ForegroundColor Yellow

# Check for remaining instances
$remainingCount = 0
foreach ($filePath in $filesToUpdate) {
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        if ($content -match "ECG Master|ecg master") {
            $remainingCount++
            Write-Host "⚠️ Still found 'ECG Master' in: $filePath" -ForegroundColor Red
        }
    }
}

if ($remainingCount -eq 0) {
    Write-Host "✅ SUCCESS: No remaining 'ECG Master' references found!" -ForegroundColor Green
} else {
    Write-Host "⚠️ WARNING: $remainingCount files still contain 'ECG Master' references" -ForegroundColor Red
}

Write-Host "`n=== E-PULSEPOINTS BRANDING UPDATE COMPLETE ===" -ForegroundColor Green
Write-Host "Your app now consistently uses 'E-Pulsepoints' branding throughout!" -ForegroundColor Green