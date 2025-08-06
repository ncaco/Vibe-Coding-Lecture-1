# Git 히스토리에서 큰 파일 제거 스크립트
Write-Host "Git 히스토리 정리 시작..." -ForegroundColor Green

# Git pager 비활성화
$env:GIT_PAGER = ""

# 큰 파일 제거
Write-Host "큰 파일 제거 중..." -ForegroundColor Yellow
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch src/assets/logo.svg" --prune-empty --tag-name-filter cat -- --all

# 원본 참조 제거
Write-Host "원본 참조 제거 중..." -ForegroundColor Yellow
git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin

# 가비지 컬렉션
Write-Host "가비지 컬렉션 실행 중..." -ForegroundColor Yellow
git gc --prune=now --aggressive

# 히스토리 정리
Write-Host "히스토리 정리 중..." -ForegroundColor Yellow
git reflog expire --expire=now --all

Write-Host "Git 히스토리 정리 완료!" -ForegroundColor Green
Write-Host "이제 git push --force-with-lease를 실행하세요." -ForegroundColor Cyan 