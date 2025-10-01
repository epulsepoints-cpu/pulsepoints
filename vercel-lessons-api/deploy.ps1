Write-Host "🚀 Deploying Lessons API to Vercel..." -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Deploy to Vercel
Write-Host "🌐 Deploying to production..." -ForegroundColor Yellow
npx vercel --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Test your API at:" -ForegroundColor Cyan
Write-Host "https://your-app.vercel.app/api/test" -ForegroundColor White
Write-Host "https://your-app.vercel.app/api/lessons/module-1-lesson-1" -ForegroundColor White
Write-Host "https://your-app.vercel.app/api/lessons/module/module-1/list" -ForegroundColor White