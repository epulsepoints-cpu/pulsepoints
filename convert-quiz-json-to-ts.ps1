# Convert JSON quiz files to TypeScript
$sourceDir = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"

# Convert ecg-quizzes-26-50.json to TypeScript
Write-Host "Converting ecg-quizzes-26-50.json to TypeScript..." -ForegroundColor Yellow
$json26_50 = Get-Content "$sourceDir\ecg-quizzes-26-50.json" -Raw | ConvertFrom-Json
$tsContent26_50 = @"
// ECG Quiz Database - Batch 2 (Quizzes 26-50) - Auto-converted from JSON
const ecgQuizzes2650 = $($json26_50 | ConvertTo-Json -Depth 10 -Compress:$false);

export default ecgQuizzes2650;
"@
$tsContent26_50 | Set-Content "$sourceDir\ecg-quizzes-26-50.ts" -Encoding UTF8

# Convert ecg-quizzes-MI-50.json to TypeScript  
Write-Host "Converting ecg-quizzes-MI-50.json to TypeScript..." -ForegroundColor Yellow
$jsonMI50 = Get-Content "$sourceDir\ecg-quizzes-MI-50.json" -Raw | ConvertFrom-Json
$tsContentMI50 = @"
// ECG Quiz Database - MI Focused (50 Questions) - Auto-converted from JSON
const ecgQuizzesMI50 = $($jsonMI50 | ConvertTo-Json -Depth 10 -Compress:$false);

export default ecgQuizzesMI50;
"@
$tsContentMI50 | Set-Content "$sourceDir\ecg-quizzes-MI-50.ts" -Encoding UTF8

Write-Host "✅ Conversion complete!" -ForegroundColor Green
Write-Host "Files updated:" -ForegroundColor Cyan
Write-Host "  - ecg-quizzes-26-50.ts" -ForegroundColor White
Write-Host "  - ecg-quizzes-MI-50.ts" -ForegroundColor White