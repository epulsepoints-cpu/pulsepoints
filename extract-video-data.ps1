# Extract all YouTube video data from lesson files
Write-Host "Extracting YouTube Video Data from Lesson Files..." -ForegroundColor Green

$lessonDir = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\src\data"
$outputFile = "C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints-fresh\youtube-videos-comprehensive.json"

# Get all lesson files
$lessonFiles = Get-ChildItem $lessonDir -Name "*lesson*.ts"

$allVideos = @()
$videoCount = 0

Write-Host "Found $($lessonFiles.Count) lesson files" -ForegroundColor Yellow

foreach ($file in $lessonFiles) {
    $filePath = Join-Path $lessonDir $file
    Write-Host "Processing: $file" -ForegroundColor Cyan
    
    try {
        $content = Get-Content $filePath -Raw
        
        # Find YouTube IDs using regex
        $youtubePattern = "youtubeId:\s*['`""]([^'`""]+)['`""]"
        $youtubeMatches = [regex]::Matches($content, $youtubePattern)
        
        foreach ($match in $youtubeMatches) {
            $youtubeId = $match.Groups[1].Value
            
            # Try to extract surrounding context for video info
            $matchIndex = $match.Index
            $contextStart = [Math]::Max(0, $matchIndex - 500)
            $contextEnd = [Math]::Min($content.Length, $matchIndex + 500)
            $context = $content.Substring($contextStart, $contextEnd - $contextStart)
            
            # Extract title, type, and other metadata
            $titlePattern = "title:\s*['`""]([^'`""]+)['`""]"
            $typePattern = "type:\s*['`""]([^'`""]+)['`""]"
            $idPattern = "id:\s*['`""]([^'`""]+)['`""]"
            $contentPattern = "content:\s*['`""]([^'`""]+)['`""]"
            
            $titleMatch = [regex]::Match($context, $titlePattern)
            $typeMatch = [regex]::Match($context, $typePattern)
            $idMatch = [regex]::Match($context, $idPattern)
            $contentMatch = [regex]::Match($context, $contentPattern)
            
            $videoInfo = @{
                lessonFile = $file
                youtubeId = $youtubeId
                id = if ($idMatch.Success) { $idMatch.Groups[1].Value } else { "unknown" }
                title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { "Untitled Video" }
                type = if ($typeMatch.Success) { $typeMatch.Groups[1].Value } else { "youtube" }
                content = if ($contentMatch.Success) { $contentMatch.Groups[1].Value } else { "" }
                youtubeUrl = "https://www.youtube.com/watch?v=$youtubeId"
                thumbnailUrl = "https://img.youtube.com/vi/$youtubeId/maxresdefault.jpg"
            }
            
            $allVideos += $videoInfo
            $videoCount++
            
            Write-Host "  ✅ Found: $($videoInfo.title) (ID: $youtubeId)" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  ❌ Error processing $file`: $_" -ForegroundColor Red
    }
}

# Create comprehensive JSON output
$output = @{
    extractedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    totalVideos = $videoCount
    totalLessonFiles = $lessonFiles.Count
    videos = $allVideos
    summary = @{
        videosPerLesson = @{}
        uniqueVideoIds = ($allVideos | Select-Object -ExpandProperty youtubeId | Sort-Object -Unique).Count
    }
}

# Count videos per lesson
foreach ($video in $allVideos) {
    $lesson = $video.lessonFile
    if ($output.summary.videosPerLesson.ContainsKey($lesson)) {
        $output.summary.videosPerLesson[$lesson]++
    } else {
        $output.summary.videosPerLesson[$lesson] = 1
    }
}

# Save to JSON
$jsonOutput = $output | ConvertTo-Json -Depth 5
$jsonOutput | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host ""
Write-Host "EXTRACTION COMPLETE!" -ForegroundColor Green
Write-Host "Total Videos Found: $videoCount" -ForegroundColor Yellow
Write-Host "Unique Video IDs: $($output.summary.uniqueVideoIds)" -ForegroundColor Yellow
Write-Host "Lesson Files Processed: $($lessonFiles.Count)" -ForegroundColor Yellow
Write-Host "Data saved to: $outputFile" -ForegroundColor Cyan

# Show top 10 videos as preview
Write-Host ""
Write-Host "TOP 10 VIDEOS PREVIEW:" -ForegroundColor Magenta
$allVideos | Select-Object -First 10 | ForEach-Object {
    Write-Host "  Video: $($_.title)" -ForegroundColor White
    Write-Host "     URL: https://www.youtube.com/watch?v=$($_.youtubeId)" -ForegroundColor Gray
    Write-Host "     From: $($_.lessonFile)" -ForegroundColor Gray
    Write-Host ""
}