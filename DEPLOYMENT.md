# 🚀 GitHub Pages 배포 가이드

## 📦 배포 상태

✅ **코드 푸시 완료**  
저장소: https://github.com/blape0123/project

## 🌐 배포된 사이트 링크

### **https://blape0123.github.io/project/client/**

> 위 링크에서 배포된 사이트에 접속할 수 있습니다!

---

## 📋 GitHub Pages 활성화 방법 (최초 1회만)

아직 GitHub Pages가 활성화되지 않았다면 다음 단계를 따르세요:

### 1️⃣ GitHub 저장소 열기
```
https://github.com/blape0123/project
```

### 2️⃣ Settings 이동
- 저장소 페이지의 **Settings** 탭 클릭

### 3️⃣ Pages 설정
좌측 메뉴에서 **Pages** 클릭

### 4️⃣ Source 선택
- **Source**: `Deploy from a branch` 선택
- **Branch**: `main` 선택
- **Folder**: `/ (root)` 선택
- **Save** 클릭

### 5️⃣ 배포 확인
- 2-3분 기다린 후 새로고침
- "Your site is live at `https://blape0123.github.io/project/`" 메시지 확인

---

## 🎯 접속 URL

| 용도 | 링크 |
|------|------|
| 📱 메인 사이트 | https://blape0123.github.io/project/client/ |
| 📄 문서 | https://github.com/blape0123/project/blob/main/README.md |
| ⚙️ 저장소 | https://github.com/blape0123/project |

---

## 🔄 업데이트 방법

코드를 수정한 후 배포하려면:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "설명을 작성하세요"

# 2. GitHub에 푸시
git push origin main

# 3. 사이트 새로고침 (2-3분 후)
# https://blape0123.github.io/project/client/
```

GitHub Pages는 자동으로 업데이트됩니다!

---

## ✨ 주요 기능

배포된 사이트에서 사용 가능한 기능:

✅ 링크 등록 및 관리  
✅ 새 탭에서 링크 열기  
✅ URL 복사  
✅ 방문 횟수 통계  
✅ 로컬 데이터 저장 (개인정보 보호)  
✅ 모바일 반응형 디자인  

---

## 📞 문제 해결

### Q: 사이트가 로드되지 않습니다
**A:** 다음을 확인하세요:
- GitHub Pages 설정에서 Source가 `main` 브랜치로 설정되어 있는가?
- 2-3분 기다린 후 새로고침했는가?
- 정확한 URL을 입력했는가? (끝에 `/client/` 포함)

### Q: 변경사항이 반영되지 않습니다
**A:** 다음을 시도하세요:
- 브라우저 캐시 초기화: `Ctrl+Shift+Delete` (Windows) 또는 `Cmd+Shift+Delete` (Mac)
- GitHub 저장소 페이지에서 "Deployments" 탭에서 배포 상태 확인
- 2-3분 기다린 후 다시 접속

### Q: 링크가 열리지 않습니다
**A:** 보안 정책(CORS) 때문에 일부 사이트가 차단될 수 있습니다.
- 로컬에서 프록시 서버를 실행하면 더 많은 사이트에 접근 가능
- 또는 GitHub Pages에서 제공하는 "새 탭에서 열기" 기능 사용

---

## 🎉 축하합니다!

**당신의 사이트가 GitHub Pages에 배포되었습니다!**

🔗 **배포 URL**: https://blape0123.github.io/project/client/

이제 누구나 이 URL에서 링크 관리 시스템을 사용할 수 있습니다!

---

**배포일**: 2026-08-12  
**배포 방식**: GitHub Pages (Static Hosting)  
**프레임워크**: Vanilla HTML/CSS/JavaScript (서버 불필요)
