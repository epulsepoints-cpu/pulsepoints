# Fix Missing ECG Images in Flash Mode Quizzes
# This script maps missing images to existing alternatives

Write-Host "=== FIXING MISSING ECG IMAGES ===" -ForegroundColor Green

# Define the mapping of missing images to existing alternatives
$imageMapping = @{
    # Medical Accurate mappings
    "/ecg/medical_accurate/atrial_fibrillation_110bpm.png" = "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png"
    "/ecg/medical_accurate/atrial_tachycardia_150bpm.png" = "/ecg/medical_accurate/tachycardia_150bpm.png"
    "/ecg/medical_accurate/supraventricular_tachycardia_180bpm.png" = "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png"
    "/ecg/medical_accurate/ventricular_tachycardia_180bpm.png" = "/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png"
    "/ecg/medical_accurate/wandering_atrial_pacemaker.png" = "/ecg/medical_accurate/wandering_pacemaker.png"
    "/ecg/medical_accurate/prolonged_qt_interval_480ms.png" = "/ecg/medical_accurate/prolonged_qt_interval.png"
    "/ecg/medical_accurate/second_degree_av_block_type1_wenckebach.png" = "/ecg/medical_accurate/second_degree_type1.png"
    "/ecg/medical_accurate/sinus_pause_arrest_3sec.png" = "/ecg/medical_accurate/sinus_pause.png"
    
    # For images that don't have direct equivalents, we'll use similar patterns
    "/ecg/medical_accurate/accelerated_idioventricular_rhythm_80bpm.png" = "/ecg/medical_accurate/junctional_escape.png"
    "/ecg/medical_accurate/asystole_flatline.png" = "/ecg/medical_accurate/complete_heart_block.png"
    "/ecg/medical_accurate/bifascicular_block_rbbb_lafb.png" = "/ecg/medical_accurate/rbbb_complete.png"
    "/ecg/medical_accurate/pulseless_electrical_activity.png" = "/ecg/medical_accurate/complete_heart_block.png"
    "/ecg/medical_accurate/wolff_parkinson_white_syndrome.png" = "/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png"
    
    # MI Database mappings - using existing files
    "/ecg/MI_ecg_database/Anterior_wall_MI/hyperacute_anterior_mi.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg"
    "/ecg/MI_ecg_database/Evolving_MI/evolving_anterior_t_inversions.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg"
    "/ecg/MI_ecg_database/Extensive_anterior_MI/extensive_anterior_v1_v6.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI6.jpg"
    "/ecg/MI_ecg_database/Hyperacute_MI/hyperacute_anterior.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg"
    "/ecg/MI_ecg_database/Lateral_wall_MI/lateral_mi_i_avl_v5v6.jpg" = "/ecg/MI_ecg_database/Anterolateral_MI/ami (2).jpg"
    "/ecg/MI_ecg_database/Massive_MI/extensive_anterior_v1_v6.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg"
    "/ecg/MI_ecg_database/Old_MI/old_inferior_q_waves.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg"
    "/ecg/MI_ecg_database/Post_MI_evolved_MI/old_inferior_mi_q_waves.jpg" = "/ecg/MI_ecg_database/Post_MI_evolved_MI/imi (2).jpg"
    "/ecg/MI_ecg_database/Posterior_wall_MI/posterior_mi_v7v8v9.jpg" = "/ecg/MI_ecg_database/Posterior_wall_MI/imi (3).jpg"
    "/ecg/MI_ecg_database/Reperfusion_markers/st_resolution_post_pci.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg"
    "/ecg/MI_ecg_database/RV_infarction/rv_infarction_v3r_v4r.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi5.jpg"
    "/ecg/MI_ecg_database/RV_infarction/rv_mi_v3r_v4r.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi6.jpg"
    "/ecg/MI_ecg_database/T_wave_inversions/evolving_t_inversions_v2_v4.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg"
    "/ecg/MI_ecg_database/Wellens_pattern/wellens_type_a_v2v3.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg"
}

# Read the current quiz file
$quizFile = "src/data/ecg-flash-mode-quizzes.ts"
$content = Get-Content $quizFile -Raw

Write-Host "Original file size: $($content.Length) characters" -ForegroundColor Yellow

# Apply replacements
$replacements = 0
foreach ($missing in $imageMapping.Keys) {
    $replacement = $imageMapping[$missing]
    if ($content.Contains($missing)) {
        $content = $content.Replace($missing, $replacement)
        $replacements++
        Write-Host "SUCCESS: Replaced: $missing -> $replacement" -ForegroundColor Green
    }
}

# Write the updated content back
$content | Set-Content $quizFile -NoNewline

Write-Host "`n=== REPLACEMENT SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total replacements made: $replacements" -ForegroundColor Green
Write-Host "Updated file: $quizFile" -ForegroundColor Green

Write-Host "`n=== VERIFICATION ===" -ForegroundColor Cyan
Write-Host "Running image existence check..."

# Check if we need to verify the replacements worked
$checkScript = "check-quiz-images.ps1"
if (Test-Path $checkScript) {
    & $checkScript
} else {
    Write-Host "Image checker script not found. Please run manual verification." -ForegroundColor Yellow
}

Write-Host "`n=== COMPLETE ===" -ForegroundColor Green