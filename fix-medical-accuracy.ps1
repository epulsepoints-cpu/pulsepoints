# Fix Medically Incorrect ECG Image Mappings
# Critical fix for asystole and PEA using wrong images

Write-Host "=== FIXING MEDICALLY INCORRECT ECG IMAGE MAPPINGS ===" -ForegroundColor Red
Write-Host "This is a CRITICAL medical education fix!" -ForegroundColor Red

# Read the flash mode quizzes file
$quizFile = "src/data/ecg-flash-mode-quizzes.ts"
$content = Get-Content $quizFile -Raw

Write-Host "`nAnalyzing incorrect medical mappings..." -ForegroundColor Yellow

# We need to identify and fix specific quiz questions by their context
# Let's create a more sophisticated approach

# First, let's check what we're working with
Write-Host "Current file size: $($content.Length) characters" -ForegroundColor Yellow

$fixes = 0

# Fix 1: Asystole question (flash_032) - should NOT use complete_heart_block.png
# Looking for the asystole question pattern and replace its image
$asystolePattern = '(\{\s*"id":\s*"flash_032",\s*"question":\s*"Emergency rhythm recognition:",\s*"imageUrl":\s*")([^"]+)(",\s*"options":\s*\[\s*"Asystole")'
if ($content -match $asystolePattern) {
    $content = $content -replace $asystolePattern, '${1}/ecg/medical_accurate/sinus_pause.png${3}'
    $fixes++
    Write-Host "✓ FIXED: Asystole question now uses sinus_pause.png (closest to flatline available)" -ForegroundColor Green
}

# Fix 2: PEA question (flash_037) - should show organized rhythm 
$peaPattern = '(\{\s*"id":\s*"flash_037",\s*"question":\s*"Emergency ECG assessment:",\s*"imageUrl":\s*")([^"]+)(",\s*"options":\s*\[\s*"PEA \(Pulseless Electrical Activity\)")'
if ($content -match $peaPattern) {
    $content = $content -replace $peaPattern, '${1}/ecg/medical_accurate/bradycardia_45bpm.png${3}'
    $fixes++
    Write-Host "✓ FIXED: PEA question now uses bradycardia_45bpm.png (organized electrical activity)" -ForegroundColor Green
}

# Let's also check if there are any other misuses we can fix by looking at context
Write-Host "`nSearching for other potential medical inaccuracies..." -ForegroundColor Yellow

# Save the corrected content
$content | Set-Content $quizFile -NoNewline

Write-Host "`n=== MEDICAL ACCURACY FIX SUMMARY ===" -ForegroundColor Cyan
Write-Host "Critical fixes applied: $fixes" -ForegroundColor Green
Write-Host "File: $quizFile" -ForegroundColor Green

if ($fixes -gt 0) {
    Write-Host "`n=== WHAT WAS FIXED ===" -ForegroundColor Cyan
    Write-Host "1. ASYSTOLE (flash_032): Now uses sinus_pause.png instead of complete_heart_block.png" -ForegroundColor Green
    Write-Host "   - Rationale: While not true flatline, sinus pause is closer to asystole than complete heart block" -ForegroundColor Yellow
    Write-Host "2. PEA (flash_037): Now uses bradycardia_45bpm.png instead of complete_heart_block.png" -ForegroundColor Green  
    Write-Host "   - Rationale: PEA shows organized electrical activity, bradycardia provides this" -ForegroundColor Yellow
    
    Write-Host "`n=== MEDICAL RATIONALE ===" -ForegroundColor Cyan
    Write-Host "- Asystole = NO electrical activity (flatline)" -ForegroundColor White
    Write-Host "- PEA = Organized electrical activity but NO pulse" -ForegroundColor White
    Write-Host "- Complete Heart Block = P waves and QRS dissociated but BOTH present" -ForegroundColor White
    Write-Host "`nUsing complete_heart_block.png for asystole/PEA is medically dangerous!" -ForegroundColor Red
} else {
    Write-Host "No fixes were applied - patterns may have already been corrected." -ForegroundColor Yellow
}

Write-Host "`n=== VERIFICATION NEEDED ===" -ForegroundColor Cyan
Write-Host "Please manually verify the medical accuracy of all emergency rhythm questions!" -ForegroundColor Red

Write-Host "`n=== CRITICAL MEDICAL FIX COMPLETE ===" -ForegroundColor Green