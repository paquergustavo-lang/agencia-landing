# Script para reinicializar Git e fazer redeploy na Vercel (versão corrigida)

Write-Host "Renomeando branch de master para main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Adicionando remote..." -ForegroundColor Yellow
git remote add origin https://github.com/paquergustavo-lang/agencia-landing.git 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote já existe, atualizando URL..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/paquergustavo-lang/agencia-landing.git
}

Write-Host "Fazendo push para GitHub..." -ForegroundColor Yellow
git push -u origin main -f

Write-Host "✅ Pronto! Vercel vai detectar o push e fazer redeploy automaticamente!" -ForegroundColor Green
Write-Host "Vá para https://vercel.com e acompanhe o deploy!" -ForegroundColor Cyan
