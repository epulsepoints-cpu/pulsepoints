# PTB-XL ECG Database Setup for PowerShell
# ========================================

Write-Host "PTB-XL ECG Database Setup" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    if ($pythonVersion -match "Python (\d+)\.(\d+)") {
        $major = [int]$matches[1]
        $minor = [int]$matches[2]
        
        if ($major -ge 3 -and $minor -ge 8) {
            Write-Host "✅ Python $($matches[0]) found" -ForegroundColor Green
        } else {
            Write-Host "❌ Python $($matches[0]) is too old. Need Python 3.8+" -ForegroundColor Red
            Write-Host "Please install Python 3.8+ from https://python.org" -ForegroundColor Yellow
            Read-Host "Press Enter to exit"
            exit 1
        }
    } else {
        throw "Invalid version format"
    }
} catch {
    Write-Host "❌ Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Python 3.8+ from https://python.org" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Run the setup script
Write-Host "🚀 Running PTB-XL ECG processor..." -ForegroundColor Cyan
try {
    python setup_ptbxl.py
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Setup completed successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Generated files:" -ForegroundColor Yellow
        Write-Host "📁 public/ecg/ptbxl_12lead/ - ECG images"
        Write-Host "📋 public/ecg/ptbxl_12lead/ptbxl_metadata.json - ECG metadata"  
        Write-Host "❓ public/ecg/ptbxl_12lead/ptbxl_quiz_questions.json - Quiz questions"
        Write-Host ""
        Write-Host "The ECG database is now ready for use in your React app!" -ForegroundColor Green
    } else {
        Write-Host "❌ Setup failed. Check error messages above." -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error running setup: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to exit"