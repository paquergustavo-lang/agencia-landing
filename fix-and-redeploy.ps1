# Script para reinicializar Git e fazer redeploy na Vercel
# Execute este script no PowerShell para corrigir o repositório

Write-Host "Removendo pasta .git antiga..." -ForegroundColor Yellow
Remove-Item -Path ".\.git" -Recurse -Force

Write-Host "Reinicializando Git..." -ForegroundColor Yellow
git init

Write-Host "Configurando Git..." -ForegroundColor Yellow
git config --global user.email "paquergustavo@gmail.com"
git config --global user.name "Gustavo Paquer"

Write-Host "Adicionando todos os arquivos..." -ForegroundColor Yellow
git add .

Write-Host "Criando commit..." -ForegroundColor Yellow
git commit -m "Reinit: ready for Vercel deployment"

Write-Host "Adicionando remote..." -ForegroundColor Yellow
git remote add origin https://github.com/paquergustavo-lang/agencia-landing.git

Write-Host "Fazendo push para GitHub..." -ForegroundColor Yellow
git push -u origin main -f

Write-Host "✅ Pronto! Vercel vai detectar o push e fazer redeploy automaticamente!" -ForegroundColor Green
