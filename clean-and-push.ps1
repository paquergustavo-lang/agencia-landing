# Script para remover node_modules do Git e fazer push limpo

Write-Host "Removendo node_modules do Git..." -ForegroundColor Yellow
git rm -r --cached node_modules/

Write-Host "Adicionando mudanças..." -ForegroundColor Yellow
git add .

Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "Remove node_modules from Git (huge performance improvement for Vercel)"

Write-Host "Fazendo push para GitHub..." -ForegroundColor Yellow
git push -u origin main -f

Write-Host "✅ Pronto! node_modules removido do Git." -ForegroundColor Green
Write-Host "Vercel vai clonar muito mais rápido agora!" -ForegroundColor Green
Write-Host "" -ForegroundColor Green
Write-Host "Vá para https://vercel.com e o deployment será muito mais rápido!" -ForegroundColor Cyan
