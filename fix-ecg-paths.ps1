# Script to fix missing ECG file paths in quiz databases

$dataPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"
$quizFile = "ecg-quizzes-26-50.json"

Write-Host "=== Fixing Missing ECG File Paths ===" -ForegroundColor Green

# Read the quiz file
$content = Get-Content "$dataPath\$quizFile" -Raw
$jsonData = $content | ConvertFrom-Json

# Define path mappings for missing files
$pathMappings = @{
    "/ecg/medical_accurate/normal_normal_rate.png" = "/ecg/medical_accurate/normal_75bpm.png"
    "/ecg/medical_accurate/bradycardia_slow_rate.png" = "/ecg/medical_accurate/bradycardia_45bpm.png"
    "/ecg/medical_accurate/tachycardia_fast_rate_7.png" = "/ecg/medical_accurate/tachycardia_125bpm.png"
    "/ecg/medical_accurate/atrial_fibrillation_elevated_rate_5.png" = "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png"
    "/ecg/medical_accurate/ventricular_tachycardia_fast_rate_2.png" = "/ecg/medical_accurate/vtach_180bpm.png"
    "/ecg/medical_accurate/rbbb_normal_rate.png" = "/ecg/medical_accurate/rbbb_80bpm_2.png"
    "/ecg/medical_accurate/lbbb_normal_rate_4.png" = "/ecg/medical_accurate/lbbb_75bpm_2.png"
    "/ecg/medical_accurate/supraventricular_tachycardia_rapid_rate_1.png" = "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png"
    "/ecg/medical_accurate/normal_upper_normal.png" = "/ecg/medical_accurate/normal_90bpm.png"
    "/ecg/medical_accurate/bradycardia_bradycardic_3.png" = "/ecg/medical_accurate/bradycardia_50bpm.png"
}

$changesCount = 0

# Apply path mappings
foreach ($quiz in $jsonData.quizzes) {
    $originalPath = $quiz.imageUrl
    if ($pathMappings.ContainsKey($originalPath)) {
        $newPath = $pathMappings[$originalPath]
        $quiz.imageUrl = $newPath
        Write-Host "Fixed: $($quiz.id) - $originalPath -> $newPath" -ForegroundColor Yellow
        $changesCount++
    }
}

# Save the updated file
$updatedJson = $jsonData | ConvertTo-Json -Depth 10
$updatedJson | Set-Content "$dataPath\$quizFile" -Encoding UTF8

Write-Host "=== Summary ===" -ForegroundColor Green
Write-Host "Fixed $changesCount file path issues" -ForegroundColor Green
Write-Host "Updated quiz file saved: $quizFile" -ForegroundColor Green