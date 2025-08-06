@echo off
echo Git 히스토리 정리 시작...

REM Git pager 비활성화
set GIT_PAGER=

echo 큰 파일 제거 중...
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch src/assets/logo.svg" --prune-empty --tag-name-filter cat -- --all

echo 원본 참조 제거 중...
git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin

echo 가비지 컬렉션 실행 중...
git gc --prune=now --aggressive

echo 히스토리 정리 중...
git reflog expire --expire=now --all

echo Git 히스토리 정리 완료!
echo 이제 git push --force-with-lease를 실행하세요.
pause 