# Fix Remaining Missing ECG Images - Phase 2
# Map remaining missing images to existing files in available directories

Write-Host "=== FIXING REMAINING MISSING ECG IMAGES - PHASE 2 ===" -ForegroundColor Green

# Additional mappings for the remaining missing images
$additionalMapping = @{
    # Map to existing directories and files
    "/ecg/MI_ecg_database/Anterior_wall_MI/hyperacute_anterior_mi.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg"
    "/ecg/MI_ecg_database/Extensive_anterior_MI/extensive_anterior_v1_v6.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg"
    "/ecg/MI_ecg_database/Lateral_wall_MI/lateral_mi_i_avl_v5v6.jpg" = "/ecg/MI_ecg_database/Lateral_wall_MI/ami (2).jpg"
    "/ecg/MI_ecg_database/Post_MI_evolved_MI/old_inferior_mi_q_waves.jpg" = "/ecg/MI_ecg_database/Post_MI_evolved_MI/imi (2).jpg"  
    "/ecg/MI_ecg_database/Posterior_wall_MI/posterior_mi_v7v8v9.jpg" = "/ecg/MI_ecg_database/Posterior_wall_MI/imi (3).jpg"
    "/ecg/MI_ecg_database/Reperfusion_markers/st_resolution_post_pci.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg"
    "/ecg/MI_ecg_database/RV_infarction/rv_infarction_v3r_v4r.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi5.jpg"
    "/ecg/MI_ecg_database/T_wave_inversions/evolving_t_inversions_v2_v4.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg"
    "/ecg/MI_ecg_database/Wellens_pattern/wellens_type_a_v2v3.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg"
}

# Read the current quiz file
$quizFile = "src/data/ecg-flash-mode-quizzes.ts"
$content = Get-Content $quizFile -Raw

Write-Host "Processing file: $quizFile" -ForegroundColor Yellow
Write-Host "File size: $($content.Length) characters" -ForegroundColor Yellow

# Apply additional replacements
$replacements = 0
foreach ($missing in $additionalMapping.Keys) {
    $replacement = $additionalMapping[$missing]
    if ($content.Contains($missing)) {
        $content = $content.Replace($missing, $replacement)
        $replacements++
        Write-Host "SUCCESS: Replaced: $missing -> $replacement" -ForegroundColor Green
    } else {
        Write-Host "NOT FOUND: $missing" -ForegroundColor Yellow
    }
}

# Write the updated content back
$content | Set-Content $quizFile -NoNewline

Write-Host "`n=== PHASE 2 REPLACEMENT SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total replacements made: $replacements" -ForegroundColor Green
Write-Host "Updated file: $quizFile" -ForegroundColor Green

# Verify the changes by running the image checker again
Write-Host "`n=== VERIFICATION ===" -ForegroundColor Cyan
Write-Host "Running image existence check..."

$checkScript = "check-quiz-images.ps1"
if (Test-Path $checkScript) {
    & $checkScript
} else {
    Write-Host "Image checker script not found. Manual verification needed." -ForegroundColor Yellow
}

Write-Host "`n=== PHASE 2 COMPLETE ===" -ForegroundColor Green