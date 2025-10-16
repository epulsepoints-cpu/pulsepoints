# Script to check for missing ECG files referenced in quiz databases

$basePath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\public"
$dataPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"

Write-Host "=== Checking ECG File Paths in Quiz Databases ===" -ForegroundColor Green

# Function to check if files exist
function Check-QuizFiles {
    param($quizFile, $label)
    
    Write-Host "--- Checking $label ---" -ForegroundColor Yellow
    
    $content = Get-Content "$dataPath\$quizFile" -Raw | ConvertFrom-Json
    $missingFiles = @()
    $existingFiles = @()
    
    foreach ($quiz in $content.quizzes) {
        $imagePath = $quiz.imageUrl
        $fullPath = "$basePath$($imagePath -replace '/', '\')"
        
        if (Test-Path $fullPath) {
            $existingFiles += $imagePath
        } else {
            $missingFiles += @{
                QuizId = $quiz.id
                ImagePath = $imagePath
                FullPath = $fullPath
            }
        }
    }
    
    Write-Host "Found: $($existingFiles.Count) files" -ForegroundColor Green
    Write-Host "Missing: $($missingFiles.Count) files" -ForegroundColor Red
    
    if ($missingFiles.Count -gt 0) {
        Write-Host "Missing Files:" -ForegroundColor Red
        foreach ($missing in $missingFiles) {
            Write-Host "  Quiz: $($missing.QuizId) - $($missing.ImagePath)" -ForegroundColor Red
        }
    }
    
    return $missingFiles
}

# Check all quiz files
$missing25 = Check-QuizFiles "ecg-quizzes-25.json" "ECG Quizzes 1-25"
$missing26_50 = Check-QuizFiles "ecg-quizzes-26-50.json" "ECG Quizzes 26-50"
$missingMI = Check-QuizFiles "ecg-quizzes-MI-50.json" "MI ECG Quizzes"

$totalMissing = $missing25.Count + $missing26_50.Count + $missingMI.Count

Write-Host "=== Summary ===" -ForegroundColor Green
Write-Host "Total missing files: $totalMissing" -ForegroundColor $(if ($totalMissing -eq 0) { 'Green' } else { 'Red' })