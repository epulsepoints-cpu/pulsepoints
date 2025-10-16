# Check for broken image references in Module 1 lessons
$lessonPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"
$imagesPath = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\public\lessonimages"

# Get all lessonimages references from Module 1 lessons
$imageRefs = Select-String -Pattern "/lessonimages/" "$lessonPath\optimized-lesson-[1-9].ts", "$lessonPath\optimized-lesson-10.ts" | ForEach-Object {
    if ($_.Line -match "'/lessonimages/([^']*)'") {
        $matches[1]
    }
} | Sort-Object -Unique

Write-Host "Checking for broken images in Module 1 lessons..." -ForegroundColor Yellow
Write-Host "Total unique image references found: $($imageRefs.Count)" -ForegroundColor Cyan
Write-Host ""

$brokenImages = @()
$existingImages = @()

foreach ($imageRef in $imageRefs) {
    $fullPath = Join-Path $imagesPath $imageRef
    if (Test-Path $fullPath) {
        $existingImages += $imageRef
        Write-Host "✅ EXISTS: $imageRef" -ForegroundColor Green
    } else {
        $brokenImages += $imageRef
        Write-Host "❌ MISSING: $imageRef" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "SUMMARY:" -ForegroundColor Yellow
Write-Host "✅ Existing images: $($existingImages.Count)" -ForegroundColor Green
Write-Host "❌ Missing images: $($brokenImages.Count)" -ForegroundColor Red

if ($brokenImages.Count -gt 0) {
    Write-Host ""
    Write-Host "BROKEN IMAGES LIST:" -ForegroundColor Red
    foreach ($broken in $brokenImages) {
        Write-Host "  - $broken" -ForegroundColor Red
    }
}