# 🔗 URL 우회 링크 브라우저

GitHub Pages에서 배포 가능한 순수 HTML/CSS/JavaScript 기반의 링크 관리 시스템입니다.

## ✨ 주요 기능

- 📝 **링크 등록**: 사이트 이름과 URL을 등록하여 관리
- 🌐 **새 탭에서 열기**: 등록된 링크를 새 탭에서 직접 방문
- 📋 **URL 복사**: 링크를 클립보드에 복사
- 📊 **통계 추적**: 등록된 링크 수와 방문 횟수 자동 기록
- 💾 **로컬 저장**: 모든 데이터는 브라우저 localStorage에 저장 (개인정보 보호)
- 🎨 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원

## 🚀 사용 방법

### 온라인 (GitHub Pages)
```
https://[당신의username].github.io/[저장소명]/
```

### 로컬에서 실행

1. 저장소 클론:
```bash
git clone https://github.com/[당신의username]/[저장소명].git
cd [저장소명]
```

2. 브라우저에서 열기:
```bash
# 방법 1: 직접 파일 열기
open client/index.html

# 방법 2: 로컬 서버 실행 (Python)
python -m http.server 8000
# http://localhost:8000/client/ 에서 접속

# 방법 3: Node.js 프록시 서버 실행 (선택사항)
npm install
npm run proxy
```

## 📌 사용 가이드

### 링크 등록하기
1. 왼쪽 사이드바에서 **"이름"** 입력 (예: YouTube)
2. **"URL"** 입력 (예: youtube.com 또는 https://youtube.com)
3. **"등록하기"** 버튼 클릭
4. 등록된 링크가 사이드바에 나타남

### 링크 방문하기
- 등록된 링크의 **"열기"** 버튼 클릭 → 새 탭에서 사이트 방문
- 또는 주소창에서 링크 이름으로 검색 후 **"검색"** 클릭

### 링크 관리하기
- **"삭제"** 버튼으로 링크 제거
- **"복사"** 버튼으로 URL 클립보드 복사
- **"뒤로"** 버튼으로 이전 페이지로 이동
- **"캐시 지우기"**로 모든 데이터 초기화

## 🔧 기술 스택

- **HTML5**: 구조
- **CSS3**: 스타일 (flexbox, grid, animations)
- **Vanilla JavaScript**: 기능 (localStorage, DOM manipulation)
- **GitHub Pages**: 호스팅

## 💾 데이터 저장

- 모든 데이터는 브라우저의 **localStorage**에 저장됨
- 계정 연동 없음 → 개인정보 보호
- 브라우저 캐시 삭제 시 데이터도 함께 삭제됨

## 🌟 GitHub Pages 배포 방법

1. GitHub에서 새 저장소 생성
2. 이 파일들을 저장소에 푸시:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. GitHub 저장소 Settings → Pages → Branch 선택
4. **Deploy from a branch**에서 `main` 또는 `master` 선택
5. 2-3분 후 `https://[username].github.io/[repo-name]/client/` 에서 접속 가능

## 📱 반응형 기능

- ✅ 데스크톱 (1200px 이상): 완전한 레이아웃
- ✅ 태블릿 (768px ~ 1199px): 최적화된 레이아웃
- ✅ 모바일 (768px 이하): 단일 컬럼 레이아웃

## ⚙️ 로컬 프록시 서버 (선택사항)

프록시 서버를 통해 추가 기능 사용 가능:

```bash
# 설치
npm install

# 프록시 서버 실행 (포트 3001)
npm run proxy

# 접속
# http://localhost:3001/
```

## 📝 파일 구조

```
project/
├── client/
│   ├── index.html          # 메인 페이지 (GitHub Pages용)
│   ├── app.js              # 보조 스크립트
│   └── tasks.html          # 업무 관리 시스템 (선택)
├── proxy/
│   └── server.js           # 프록시 서버 (로컬 전용)
├── target/
│   └── server.js           # 테스트 서버 (로컬 전용)
├── package.json            # npm 설정
└── README.md               # 이 파일
```

## 🐛 문제 해결

### "URL이 열리지 않습니다"
- 프록시 서버 없이는 보안 정책(CORS) 때문에 일부 사이트가 제한될 수 있습니다
- 새 탭에서 열기 기능을 사용하거나, 로컬에서 프록시 서버를 실행하세요

### 데이터가 저장되지 않습니다
- 브라우저의 localhost 스토리지 허용 확인
- 시크릿/프라이빗 모드를 사용하면 데이터가 저장되지 않습니다

### GitHub Pages에서 스타일이 안 보입니다
- 저장소 settings에서 Pages가 `main` 또는 `master` 브랜치로 설정되었는지 확인
- 2-3분 기다린 후 새로고침

## 📄 라이선스

MIT License - 자유롭게 수정/배포 가능

## 🤝 기여

버그 리포트나 기능 제안은 Issues에서 해주세요!

---

**제작**: GitHub Copilot  
**최종 수정**: 2026-08-12
