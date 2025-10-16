# Find Lessons with Less Than 20 Slides/Steps

$lessonPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"

# Get all optimized lesson files
$allLessons = Get-ChildItem $lessonPath -Name | Where-Object { $_ -match "^optimized-lesson-.*\.ts$" }

Write-Host "LESSON SLIDE/STEP ANALYSIS" -ForegroundColor Yellow
Write-Host "=========================" -ForegroundColor Yellow
Write-Host ""

$shortLessons = @()
$totalLessons = $allLessons.Count

Write-Host "Analyzing $totalLessons lessons for slide/step count..." -ForegroundColor Cyan
Write-Host ""

foreach ($lesson in $allLessons | Sort-Object) {
    $lessonFile = Join-Path $lessonPath $lesson
    
    # Count slides/steps by counting objects with 'id:' property
    $slideCount = (Select-String -Pattern "^\s*id:\s*['\"]" $lessonFile -ErrorAction SilentlyContinue).Count
    
    # Also check for other potential slide indicators
    $stepCount = (Select-String -Pattern "^\s*\{" $lessonFile -ErrorAction SilentlyContinue).Count
    
    # Use the higher count as it's more likely to be accurate
    $actualCount = [Math]::Max($slideCount, ($stepCount / 10)) # Rough estimate adjustment
    $finalCount = $slideCount # Use slide count as primary measure
    
    if ($finalCount -lt 20) {
        $shortLessons += [PSCustomObject]@{
            Lesson = $lesson
            SlideCount = $finalCount
            Status = if ($finalCount -eq 0) { "Empty/Error" } elseif ($finalCount -lt 5) { "Very Short" } elseif ($finalCount -lt 10) { "Short" } else { "Medium-Short" }
        }
        
        $statusColor = switch ($finalCount) {
            {$_ -eq 0} { "Red" }
            {$_ -lt 5} { "Red" }
            {$_ -lt 10} { "Yellow" }
            {$_ -lt 15} { "DarkYellow" }
            default { "White" }
        }
        
        Write-Host "📉 $lesson`: $finalCount slides - $($shortLessons[-1].Status)" -ForegroundColor $statusColor
    } else {
        Write-Host "✅ $lesson`: $finalCount slides - OK" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "SUMMARY RESULTS" -ForegroundColor Yellow
Write-Host "===============" -ForegroundColor Yellow
Write-Host "Total lessons analyzed: $totalLessons" -ForegroundColor Cyan
Write-Host "Lessons with <20 slides: $($shortLessons.Count)" -ForegroundColor $(if ($shortLessons.Count -gt 0) { "Red" } else { "Green" })"
Write-Host "Lessons with ≥20 slides: $($totalLessons - $shortLessons.Count)" -ForegroundColor Green

if ($shortLessons.Count -gt 0) {
    Write-Host ""
    Write-Host "BREAKDOWN BY CATEGORY:" -ForegroundColor Yellow
    
    $emptyLessons = $shortLessons | Where-Object { $_.SlideCount -eq 0 }
    $veryShortLessons = $shortLessons | Where-Object { $_.SlideCount -gt 0 -and $_.SlideCount -lt 5 }
    $shortLessons_5to9 = $shortLessons | Where-Object { $_.SlideCount -ge 5 -and $_.SlideCount -lt 10 }
    $mediumShortLessons = $shortLessons | Where-Object { $_.SlideCount -ge 10 -and $_.SlideCount -lt 20 }
    
    Write-Host "🚫 Empty/Error (0 slides): $($emptyLessons.Count)" -ForegroundColor Red
    Write-Host "📱 Very Short (1-4 slides): $($veryShortLessons.Count)" -ForegroundColor Red
    Write-Host "📝 Short (5-9 slides): $($shortLessons_5to9.Count)" -ForegroundColor Yellow
    Write-Host "📄 Medium-Short (10-19 slides): $($mediumShortLessons.Count)" -ForegroundColor DarkYellow
    
    Write-Host ""
    Write-Host "DETAILED BREAKDOWN:" -ForegroundColor Yellow
    
    if ($emptyLessons.Count -gt 0) {
        Write-Host ""
        Write-Host "🚫 EMPTY/ERROR LESSONS:" -ForegroundColor Red
        $emptyLessons | ForEach-Object { Write-Host "   - $($_.Lesson)" -ForegroundColor Red }
    }
    
    if ($veryShortLessons.Count -gt 0) {
        Write-Host ""
        Write-Host "📱 VERY SHORT LESSONS (1-4 slides):" -ForegroundColor Red
        $veryShortLessons | ForEach-Object { Write-Host "   - $($_.Lesson): $($_.SlideCount) slides" -ForegroundColor Red }
    }
    
    if ($shortLessons_5to9.Count -gt 0) {
        Write-Host ""
        Write-Host "📝 SHORT LESSONS (5-9 slides):" -ForegroundColor Yellow
        $shortLessons_5to9 | ForEach-Object { Write-Host "   - $($_.Lesson): $($_.SlideCount) slides" -ForegroundColor Yellow }
    }
    
    if ($mediumShortLessons.Count -gt 0) {
        Write-Host ""
        Write-Host "📄 MEDIUM-SHORT LESSONS (10-19 slides):" -ForegroundColor DarkYellow
        $mediumShortLessons | ForEach-Object { Write-Host "   - $($_.Lesson): $($_.SlideCount) slides" -ForegroundColor DarkYellow }
    }
}

Write-Host ""
Write-Host "Analysis complete! 🎯" -ForegroundColor Green