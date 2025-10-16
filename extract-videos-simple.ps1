# Extract YouTube video data from lesson files
Write-Host "Extracting YouTube Video Data from Lesson Files..." -ForegroundColor Green

$lessonDir = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"
$outputFile = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\youtube-videos-list.json"

# Get all lesson files
$lessonFiles = Get-ChildItem $lessonDir -Name "*lesson*.ts"
Write-Host "Found $($lessonFiles.Count) lesson files" -ForegroundColor Yellow

$allVideos = @()
$videoCount = 0

foreach ($file in $lessonFiles) {
    $filePath = Join-Path $lessonDir $file
    Write-Host "Processing: $file" -ForegroundColor Cyan
    
    try {
        $content = Get-Content $filePath -Raw
        
        # Simple pattern matching for YouTube IDs
        $matches = $content | Select-String -Pattern "youtubeId:\s*['\`"][^'\`"]+['\`"]" -AllMatches
        
        foreach ($match in $matches.Matches) {
            $line = $match.Value
            # Extract YouTube ID from the match
            if ($line -match "youtubeId:\s*['\`"]([^'\`"]+)['\`"]") {
                $youtubeId = $matches[0].Groups[1].Value
                
                $videoInfo = [PSCustomObject]@{
                    lessonFile = $file
                    youtubeId = $youtubeId
                    youtubeUrl = "https://www.youtube.com/watch?v=$youtubeId"
                    thumbnailUrl = "https://img.youtube.com/vi/$youtubeId/maxresdefault.jpg"
                    extractedLine = $line
                }
                
                $allVideos += $videoInfo
                $videoCount++
                
                Write-Host "  Found YouTube ID: $youtubeId" -ForegroundColor Green
            }
        }
    }
    catch {
        Write-Host "  Error processing $file : $_" -ForegroundColor Red
    }
}

# Create output
$output = @{
    extractedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    totalVideos = $videoCount
    totalLessonFiles = $lessonFiles.Count
    videos = $allVideos
}

# Save to JSON
$jsonOutput = $output | ConvertTo-Json -Depth 3
$jsonOutput | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host ""
Write-Host "EXTRACTION COMPLETE!" -ForegroundColor Green
Write-Host "Total Videos Found: $videoCount" -ForegroundColor Yellow
Write-Host "Lesson Files Processed: $($lessonFiles.Count)" -ForegroundColor Yellow
Write-Host "Data saved to: $outputFile" -ForegroundColor Cyan

# Show preview
Write-Host ""
Write-Host "VIDEO PREVIEW (First 10):" -ForegroundColor Magenta
$allVideos | Select-Object -First 10 | ForEach-Object {
    Write-Host "  ID: $($_.youtubeId)" -ForegroundColor White
    Write-Host "  URL: $($_.youtubeUrl)" -ForegroundColor Gray
    Write-Host "  From: $($_.lessonFile)" -ForegroundColor Gray
    Write-Host ""
}