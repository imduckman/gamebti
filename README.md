# GBTI - 게임 MBTI 성격 유형 테스트

당신의 게임 성향을 알아보고 최적의 게임을 추천받으세요!

🎮 **Live Demo**: https://imduckman.github.io/gamebti/

---

## 📋 프로젝트 설명

**GBTI(Game MBTI)**는 MBTI 성격 유형 테스트를 게임 선호도에 맞게 커스터마이징한 서비스입니다. 20개의 질문을 통해 사용자의 게임 성향을 분석하고, 16가지 MBTI 유형별로 최적의 게임을 추천해줍니다.

### ✨ 주요 기능

- **성격 유형 테스트**: 20개 질문으로 게임 선호도 분석
- **맞춤형 게임 추천**: 16가지 MBTI 유형별 추천 게임
- **상세한 결과 분석**: 각 유형의 특성과 추천 이유 설명
- **비슷한 게임 추천**: 추천 게임 외 다양한 유사 게임 제시

---

## 🎯 MBTI 유형과 추천 게임

| MBTI | 유형명 | 추천 게임 |
|------|--------|----------|
| INTJ | 전략가 | 문명 VI |
| INTP | 논리학자 | 스카이림 |
| ENTJ | 사령관 | 스타크래프트 |
| ENTP | 유쾌한 혁명가 | 마인크래프트 |
| INFJ | 선의의 선지자 | 파이널 판타지 |
| INFP | 낭만적인 이상주의자 | 스타듀밸리 |
| ENFJ | 정의로운 주인공 | 잇 테이크 투 |
| ENFP | 즉흥적인 이상가 | 팰월드 |
| ISTJ | 소리없는 영웅 | 메이플스토리 |
| ISFJ | 진정한 동반자 | 동물의 숲 |
| ESTJ | 철저한 관리자 | 배틀그라운드 |
| ESFJ | 활발한 사교가 | 오버워치 2 |
| ISTP | 도전적인 완벽주의자 | 엘든 링 |
| ISFP | 감각적인 예술가 | 언더테일 |
| ESTP | 화끈한 도박사 | 브롤스타즈 |
| ESFP | 최고의 엔터테이너 | 폴 가이즈 |

---

## 📁 프로젝트 구조

```
GameBTI/
├── index.html                 # 메인 페이지
├── quiz.html                  # 퀴즈 페이지
├── result.html                # 결과 페이지
├── result16.html              # 16가지 유형 비교 페이지
├── all-results.html           # 전체 결과 페이지
│
├── components/
│   ├── header.html            # 헤더 컴포넌트
│   ├── footer.html            # 푸터 컴포넌트
│   └── load.js                # 컴포넌트 로더
│
├── assets/
│   ├── css/
│   │   ├── style.css          # 메인 스타일
│   │   ├── bootstrap.min.css  # Bootstrap 라이브러리
│   │   └── ...
│   ├── js/
│   │   ├── main.js            # 메인 로직 (질문, 결과 데이터)
│   │   ├── bg.js              # 배경 애니메이션
│   │   ├── swiperimg.js       # 슬라이드 제어
│   │   └── ...
│   └── images/                # 게임 이미지 assets
│
└── README.md                  # 이 파일
```

---

## 🛠️ 기술 스택

**Frontend**
- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (Vanilla JS, jQuery)
- Bootstrap 4.5.3

**라이브러리**
- Swiper - 슬라이드 제어
- Font Awesome - 아이콘
- Google Analytics - 분석

**호스팅**
- GitHub Pages

---

## 📝 사용 방법

1. **메인 페이지**: "시작하기" 버튼 클릭
2. **퀴즈 풀이**: 20개 질문에 A 또는 B 선택
3. **결과 확인**: 
   - 추천 게임 및 유형 설명
   - 비슷한 게임 추천
   - 다른 유형들과 비교

---


## 📱 디자인

- 데스크톱 전용으로 만든 UI기 때문에 모바일에서 작동시 화면 짤림이 발생할 수 있습니다.

---

## 🔐 개인정보 보호

- 사용자 데이터는 로컬 localStorage에만 저장됩니다
- 서버로 전송되지 않습니다
- 재시작 후 자동으로 초기화됩니다

---

## 📧 문의 & 피드백

- 이메일: jvmmf310@gmail.com
- Instagram: [@kgu_kathena](https://www.instagram.com/kgu_kathena/)
- 입부 신청: https://forms.gle/W3n5UW1uuEnescTD7

---

## 📜 라이선스

Copyright © 2026 K.Athena. All Rights Reserved.

---

## 🙏 감사의 말

- 경기대학교 K.Athena 게임 동아리
- 모든 테스트 및 피드백을 주신 이용자분들

---

**Happy Gaming! 🎮**
