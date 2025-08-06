# Git LFS 설정 스크립트
Write-Host "Git LFS 설정 시작..." -ForegroundColor Green

# Git pager 비활성화
$env:GIT_PAGER = ""

# Git LFS 설치 확인
Write-Host "Git LFS 설치 확인 중..." -ForegroundColor Yellow
try {
    $lfsVersion = git lfs version
    Write-Host "Git LFS 버전: $lfsVersion" -ForegroundColor Green
} catch {
    Write-Host "Git LFS가 설치되지 않았습니다. 설치가 필요합니다." -ForegroundColor Red
    Write-Host "다음 명령어로 설치하세요: winget install GitHub.GitLFS" -ForegroundColor Cyan
    exit 1
}

# Git LFS 초기화
Write-Host "Git LFS 초기화 중..." -ForegroundColor Yellow
git lfs install

# 큰 파일 패턴 설정
Write-Host "큰 파일 패턴 설정 중..." -ForegroundColor Yellow
git lfs track "*.svg"
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.gif"
git lfs track "*.ico"
git lfs track "*.pdf"
git lfs track "*.zip"
git lfs track "*.tar.gz"
git lfs track "*.rar"

# .gitattributes 파일 커밋
Write-Host ".gitattributes 파일 커밋 중..." -ForegroundColor Yellow
git add .gitattributes
git commit -m "Add Git LFS tracking for large files"

# 기존 큰 파일들을 LFS로 마이그레이션
Write-Host "기존 큰 파일들을 LFS로 마이그레이션 중..." -ForegroundColor Yellow
git lfs migrate import --include="*.svg,*.png,*.jpg,*.jpeg,*.gif,*.ico,*.pdf,*.zip,*.tar.gz,*.rar"

Write-Host "Git LFS 설정 완료!" -ForegroundColor Green
Write-Host "이제 git push를 실행하세요." -ForegroundColor Cyan 