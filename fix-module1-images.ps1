# Module 1 Image Migration Script - Replace broken images with available alternatives

$lessonPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"
$imagesPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\public\lessonimages"

# Create mapping of broken images to available alternatives
$imageMapping = @{
    # Rate calculation and measurements
    "1500-rule-calculation.png" = "rate-calculation-methods.png"
    "6-second-method.png" = "six-second-method.png"
    "300-rule-calculation.png" = "300-rule-demonstration.png"
    
    # ECG Paper and calibration
    "ecg-paper-grid.png" = "rate-calculation-methods.png"
    "ecg-paper-timing.png" = "rate-calculation-methods.png"
    "ecg-paper-calibration.png" = "rate-calculation-methods.png"
    "ecg-calibration-pulse.png" = "rate-calculation-methods.png"
    
    # Time and voltage measurements
    "ecg-time-measurements.png" = "qt-measurement-technique.png"
    "ecg-voltage-measurements.png" = "qrs-duration-comparison.png"
    "ecg-measurements/rate-calculation-methods.png" = "rate-calculation-methods.png"
    "ecg-measurements/qrs-voltage-measurement.png" = "qrs-complex-components.png"
    "ecg-measurements/p-wave-amplitude-measurement.png" = "p-wave-analysis-overview.png"
    "ecg-measurements/st-elevation-measurement.png" = "qt-measurement-technique.png"
    
    # Waveforms and components
    "ecg-waveform-overview.png" = "basic-ecg-waveforms.png"
    "complete-ecg-cycle.png" = "p-qrs-t-wave-sequence.png"
    "p-wave-measurement-technique.png" = "p-wave-analysis-overview.png"
    "p-wave-physiology.png" = "p-wave-characteristics-nsr.png"
    "qt-interval.png" = "qt-measurement-technique.png"
    "qt-interval-physiology.png" = "qt-measurement-technique.png"
    "qt-interval-t-wave.png" = "qt-measurement-technique.png"
    "t-wave-normal.png" = "t-wave-normal-vs-abnormal.png"
    "st-segment.png" = "t-wave-normal-vs-abnormal.png"
    "waveform-relationships.png" = "p-qrs-t-wave-sequence.png"
    
    # Systematic approach and interpretation
    "systematic-ecg-reading.png" = "rhythm-vs-rate-overview.png"
    "systematic-approach.png" = "rhythm-vs-rate-overview.png"
    "systematic-approach-sequence.png" = "rhythm-vs-rate-overview.png"
    "systematic-sequence-complete.png" = "rhythm-vs-rate-overview.png"
    "systematic-step1-rate.png" = "rate-calculation-methods.png"
    "systematic-goals.png" = "rhythm-vs-rate-overview.png"
    "complete-systematic-approach.png" = "rhythm-vs-rate-overview.png"
    "ecg-interpretation-overview.png" = "rhythm-vs-rate-overview.png"
    
    # Clinical applications and correlation
    "clinical-ecg.png" = "clinical-applications-overview.png"
    "clinical-correlation.png" = "clinical-applications-overview.png"
    "clinical-correlation-overview.png" = "clinical-applications-overview.png"
    "clinical-correlation-importance.png" = "clinical-applications-overview.png"
    "ecg-clinical-correlation.png" = "clinical-applications-overview.png"
    "clinical-recognition.png" = "clinical-applications-overview.png"
    
    # Age and demographic variations
    "age-interpretation.png" = "age-related-ecg-changes.png"
    "elderly-ecg-variants.png" = "age-related-ecg-changes.png"
    "gender-ecg-differences.png" = "normal-ecg-variations-overview.png"
    "gender-criteria.png" = "normal-ecg-variations-overview.png"
    "gender-pitfalls.png" = "normal-ecg-variations-overview.png"
    "female-ecg-patterns.png" = "normal-ecg-variations-overview.png"
    "male-ecg-patterns.png" = "normal-ecg-variations-overview.png"
    "hormonal-influences.png" = "normal-ecg-variations-overview.png"
    "pregnancy-ecg-changes.png" = "normal-ecg-variations-overview.png"
    
    # Athletic and population variations
    "athletic-heart-ecg.png" = "athletic-heart-syndrome.png"
    "athletic-voltage-changes.png" = "athletic-heart-syndrome.png"
    "athletic-conduction.png" = "athletic-heart-syndrome.png"
    "athletic-vs-pathological.png" = "athletic-heart-syndrome.png"
    "early-repolarization-athletic.png" = "early-repolarization-vs-stemi.png"
    "sport-specific-patterns.png" = "athletic-heart-syndrome.png"
    
    # Body habitus and positioning
    "body-habitus-ecg.png" = "positional-ecg-variations.png"
    "positional-ecg-changes.png" = "positional-ecg-variations.png"
    "positional-ecg-variants.png" = "positional-ecg-variations.png"
    "patient-positioning.png" = "positional-ecg-variations.png"
    "chest-anatomy-variations.png" = "positional-ecg-variations.png"
    "obesity-ecg-effects.png" = "positional-ecg-variations.png"
    "respiratory-ecg-effects.png" = "respiratory-sinus-arrhythmia-cycle.png"
    
    # Population and genetic factors
    "population-variations.png" = "normal-ecg-variations-overview.png"
    "ethnic-variations.png" = "normal-ecg-variations-overview.png"
    "genetic-factors.png" = "normal-ecg-variations-overview.png"
    "altitude-effects.png" = "normal-ecg-variations-overview.png"
    "socioeconomic-factors.png" = "normal-ecg-variations-overview.png"
    "reference-ranges.png" = "normal-ecg-variations-overview.png"
    "global-standards.png" = "normal-ecg-variations-overview.png"
    
    # Artifacts and technical issues
    "baseline-issues-overview.png" = "artifact-causes-overview.png"
    "technical-problems-overview.png" = "artifact-causes-overview.png"
    "prevention-strategies-overview.png" = "artifact-causes-overview.png"
    "60hz-interference-sources.png" = "artifact-causes-overview.png"
    "artifact-response-protocol.png" = "artifact-causes-overview.png"
    "artifact-vs-vt-case.png" = "artifact-vs-real-rhythm.png"
    "movement-artifact-example.png" = "artifact-vs-real-rhythm.png"
    "movement-artifact-vt-mimic.png" = "artifact-vs-real-rhythm.png"
    "case2-movement-artifact.png" = "artifact-vs-real-rhythm.png"
    "electrode-placement.png" = "limb-lead-placement.png"
    "limb-lead-reversal-effects.png" = "limb-vs-precordial-leads.png"
    "lead-anatomy-correlation.png" = "limb-vs-precordial-leads.png"
    
    # Pathology and drug effects
    "pathological-patterns.png" = "basic-ecg-waveforms.png"
    "drug-electrolyte-effects.png" = "hyperkalemia.png"
    "electrolyte-t-waves.png" = "hyperkalemia.png"
    "ischemic-patterns.png" = "inferior-mi.png"
    "mi-evolution.png" = "inferior-mi.png"
    "stemi-examples.png" = "inferior-mi.png"
    
    # Rhythm analysis
    "rhythm-morphology.png" = "rhythm-patterns-examples.png"
    "rhythm-regularity-assessment.png" = "regular-rhythm-intervals.png"
    "method-selection-guide.png" = "rate-calculation-methods.png"
    
    # Axis and conduction
    "quadrant-method-example.png" = "qrs-complex-components.png"
    "quadrant-method-lad.png" = "qrs-complex-components.png"
    "lafb-common-cause.png" = "lbbb.png"
    "rad-rvh-correlation.png" = "qrs-complex-components.png"
    "extreme-axis-differential.png" = "qrs-complex-components.png"
    "copd-rad-case.png" = "qrs-complex-components.png"
    
    # Module completion and education
    "module1-completion-celebration.png" = "module-1-completion.png"
    "module1-certificate.png" = "module-1-completion.png"
    "confidence-boost-celebration.png" = "module-1-completion.png"
    "video-review-intro.png" = "module-1-completion.png"
    "patient-education.png" = "clinical-applications-overview.png"
    "quality-assurance.png" = "clinical-applications-overview.png"
    "variant-documentation.png" = "clinical-applications-overview.png"
    "red-flags-variants.png" = "artifact-causes-overview.png"
}

Write-Host "Starting Module 1 image migration..." -ForegroundColor Yellow
Write-Host "Total mappings to process: $($imageMapping.Count)" -ForegroundColor Cyan
Write-Host ""

$lessonFiles = @(
    "optimized-lesson-1.ts",
    "optimized-lesson-2.ts", 
    "optimized-lesson-3.ts",
    "optimized-lesson-4.ts",
    "optimized-lesson-5.ts",
    "optimized-lesson-6.ts",
    "optimized-lesson-7.ts",
    "optimized-lesson-8.ts",
    "optimized-lesson-9-broken.ts",
    "optimized-lesson-10.ts"
)

$totalReplacements = 0

foreach ($lesson in $lessonFiles) {
    $lessonFile = Join-Path $lessonPath $lesson
    if (-not (Test-Path $lessonFile)) {
        Write-Host "⚠️ Skipping $lesson - file not found" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "🔄 Processing $lesson..." -ForegroundColor Cyan
    $content = Get-Content $lessonFile -Raw
    $originalContent = $content
    $lessonReplacements = 0
    
    foreach ($broken in $imageMapping.Keys) {
        $replacement = $imageMapping[$broken]
        $oldPath = "'/lessonimages/$broken'"
        $newPath = "'/lessonimages/$replacement'"
        
        if ($content.Contains($oldPath)) {
            $content = $content.Replace($oldPath, $newPath)
            $lessonReplacements++
            $totalReplacements++
            Write-Host "  ✅ Replaced: $broken → $replacement" -ForegroundColor Green
        }
    }
    
    if ($lessonReplacements -gt 0) {
        Set-Content $lessonFile -Value $content -NoNewline
        Write-Host "  📁 Updated $lesson with $lessonReplacements replacements" -ForegroundColor Magenta
    } else {
        Write-Host "  ℹ️ No changes needed for $lesson" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "✅ Migration completed!" -ForegroundColor Green
Write-Host "📊 Total replacements made: $totalReplacements" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔍 Running verification check..." -ForegroundColor Yellow

# Verify results
$remainingBroken = @()
foreach ($lesson in $lessonFiles) {
    $lessonFile = Join-Path $lessonPath $lesson
    if (Test-Path $lessonFile) {
        $content = Get-Content $lessonFile -Raw
        foreach ($broken in $imageMapping.Keys) {
            if ($content.Contains("'/lessonimages/$broken'")) {
                $remainingBroken += "$lesson`: $broken"
            }
        }
    }
}

if ($remainingBroken.Count -eq 0) {
    Write-Host "🎉 SUCCESS: All targeted broken images have been replaced!" -ForegroundColor Green
} else {
    Write-Host "⚠️ WARNING: Some images may still need attention:" -ForegroundColor Yellow
    foreach ($item in $remainingBroken) {
        Write-Host "  - $item" -ForegroundColor Red
    }
}