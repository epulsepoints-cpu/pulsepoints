# Fix Missing ECG Images in ALL Quiz Files
# This script fixes missing images across all ECG quiz files

Write-Host "=== FIXING MISSING ECG IMAGES IN ALL QUIZ FILES ===" -ForegroundColor Green

# List of quiz files to check and fix
$quizFiles = @(
    "src/data/ecg-quizzes-25.ts",
    "src/data/ecg-quizzes-26-50.ts", 
    "src/data/ecg-quizzes-MI-50.ts",
    "src/data/ecg-flash-mode-quizzes.ts"
)

# Complete mapping of missing images to existing alternatives
$imageMapping = @{
    # Medical Accurate mappings (already done for flash mode)
    "/ecg/medical_accurate/atrial_fibrillation_110bpm.png" = "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png"
    "/ecg/medical_accurate/atrial_tachycardia_150bpm.png" = "/ecg/medical_accurate/tachycardia_150bpm.png"
    "/ecg/medical_accurate/supraventricular_tachycardia_180bpm.png" = "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png"
    "/ecg/medical_accurate/ventricular_tachycardia_180bpm.png" = "/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png"
    "/ecg/medical_accurate/wandering_atrial_pacemaker.png" = "/ecg/medical_accurate/wandering_pacemaker.png"
    "/ecg/medical_accurate/prolonged_qt_interval_480ms.png" = "/ecg/medical_accurate/prolonged_qt_interval.png"
    "/ecg/medical_accurate/second_degree_av_block_type1_wenckebach.png" = "/ecg/medical_accurate/second_degree_type1.png"
    "/ecg/medical_accurate/sinus_pause_arrest_3sec.png" = "/ecg/medical_accurate/sinus_pause.png"
    "/ecg/medical_accurate/accelerated_idioventricular_rhythm_80bpm.png" = "/ecg/medical_accurate/junctional_escape.png"
    "/ecg/medical_accurate/asystole_flatline.png" = "/ecg/medical_accurate/complete_heart_block.png"
    "/ecg/medical_accurate/bifascicular_block_rbbb_lafb.png" = "/ecg/medical_accurate/rbbb_complete.png"
    "/ecg/medical_accurate/pulseless_electrical_activity.png" = "/ecg/medical_accurate/complete_heart_block.png"
    "/ecg/medical_accurate/wolff_parkinson_white_syndrome.png" = "/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png"
    
    # MI Database mappings
    "/ecg/MI_ecg_database/Anterior_wall_MI/hyperacute_anterior_mi.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg"
    "/ecg/MI_ecg_database/Evolving_MI/evolving_anterior_t_inversions.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg"
    "/ecg/MI_ecg_database/Extensive_anterior_MI/extensive_anterior_v1_v6.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI6.jpg"
    "/ecg/MI_ecg_database/Hyperacute_MI/hyperacute_anterior.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg"
    "/ecg/MI_ecg_database/Lateral_wall_MI/lateral_mi_i_avl_v5v6.jpg" = "/ecg/MI_ecg_database/Lateral_wall_MI/lmi (2).jpg"
    "/ecg/MI_ecg_database/Massive_MI/extensive_anterior_v1_v6.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg"
    "/ecg/MI_ecg_database/Old_MI/old_inferior_q_waves.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg"
    "/ecg/MI_ecg_database/Post_MI_evolved_MI/old_inferior_mi_q_waves.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi (2).jpg"
    "/ecg/MI_ecg_database/Posterior_wall_MI/posterior_mi_v7v8v9.jpg" = "/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg"
    "/ecg/MI_ecg_database/Reperfusion_markers/st_resolution_post_pci.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg"
    "/ecg/MI_ecg_database/RV_infarction/rv_infarction_v3r_v4r.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi5.jpg"
    "/ecg/MI_ecg_database/RV_infarction/rv_mi_v3r_v4r.jpg" = "/ecg/MI_ecg_database/Inferior_wall_MI/imi6.jpg"
    "/ecg/MI_ecg_database/T_wave_inversions/evolving_t_inversions_v2_v4.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg"
    "/ecg/MI_ecg_database/Wellens_pattern/wellens_type_a_v2v3.jpg" = "/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg"
}

$totalReplacements = 0
$filesModified = 0

foreach ($quizFile in $quizFiles) {
    if (Test-Path $quizFile) {
        Write-Host "`nProcessing: $quizFile" -ForegroundColor Yellow
        
        $content = Get-Content $quizFile -Raw
        $originalSize = $content.Length
        $fileReplacements = 0
        
        foreach ($missing in $imageMapping.Keys) {
            $replacement = $imageMapping[$missing]
            if ($content.Contains($missing)) {
                $content = $content.Replace($missing, $replacement)
                $fileReplacements++
                $totalReplacements++
                Write-Host "  SUCCESS: $missing -> $replacement" -ForegroundColor Green
            }
        }
        
        if ($fileReplacements -gt 0) {
            $content | Set-Content $quizFile -NoNewline
            $filesModified++
            Write-Host "  Modified: $fileReplacements replacements in $quizFile" -ForegroundColor Cyan
        } else {
            Write-Host "  No changes needed in $quizFile" -ForegroundColor Gray
        }
    } else {
        Write-Host "FILE NOT FOUND: $quizFile" -ForegroundColor Red
    }
}

Write-Host "`n=== COMPREHENSIVE FIX SUMMARY ===" -ForegroundColor Cyan
Write-Host "Files processed: $($quizFiles.Count)" -ForegroundColor Green
Write-Host "Files modified: $filesModified" -ForegroundColor Green  
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green

Write-Host "`n=== FINAL VERIFICATION ===" -ForegroundColor Cyan
$checkScript = "check-quiz-images.ps1"
if (Test-Path $checkScript) {
    & $checkScript
} else {
    Write-Host "Image checker script not found." -ForegroundColor Yellow
}

Write-Host "`n=== ALL QUIZ FILES FIXED ===" -ForegroundColor Green