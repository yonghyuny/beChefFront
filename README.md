# BECHEF
### 밀키트 판매 매장 검색 사이트
![이미지](https://github.com/yonghyuny/bechefFront/blob/main/readme.png)

+ 배포 URL:(https://delightful-meadow-09cec9100.5.azurestaticapps.net)
+ Admin ID: admin
+ Admin PWD: admin1111
---

### 프로젝트 소개
+ 사용자가 주변 밀키트 판매점의 위치와 재고를 실시간으로 확인가능한 웹사이트 입니다.
+ 개인의 경험을 리뷰와 찜 기능으로 기록, 공유 할 수 있습니다.
---

### 프로젝트 목적
#### 온라인 밀키트사이트전문점에서 주문시 자신에게 도달하기까지의 시간이 걸리지만 이 사이트를 이용하여 자신의 위치에서 가까운 밀키트 판매점을 검색하여 바로 구매가 가능하게 하려는 목적을 가지고 이 사이트를 만들었습니다.
---

### 팀원 구성
+ 김용현
+ 강민석
+ 오승록
+ 이지원
---

### 개발 기간 
+ 개발 기간: 2024.06.20 ~ 2024.08.06
---

### 개발환경 및 개발언어
+ Front:
  + **React**, **HTML**, **tailwindCSS**
+ Back:
  + **Java**, **SpringBoot**, **JWT**, **SpringSecurity** 
+ DataBase:
  + **MySQL**, **Dbeaver**
+ TeamSpace:
  + **Notion**, **Github**, 
+ 배포 환경:
  + **Azure**
---

### 역할 분담
+ **김용현**
  + UI: 지도, 마이페이지
  + 기능: 매장 검색, 마이페이지 리뷰와 찜 확인기능, 

+ **강민석**
  + UI: 관리자 페이지
  + 기능: 회원관리, 메뉴등록, 재고 수정
 
+ **오승록**
  + UI: 로그인/회원가입 페이지
  + 기능: 로그인/회원가입 유효성 및 중복 검사

+ **이지원**
  + UI: 매장 상세페이지
  + 기능: 매장 정보 불러오기, 리뷰와 별점 등록, 수정 및 삭제 
---

### 프로젝트 페이지별 기능

메인 페이지화면 
+ 서비스 접속 초기화면으로 검색창과 지도가 나타납니다.
+ 검색 후 리뷰, 별점순 정렬이 가능합니다.
+ 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다.
![검색기능압축](https://github.com/user-attachments/assets/f8f6c8c7-d43c-4c72-94d8-1e3ab4fbdb9e)


+ 로그인후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다.
+ 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다.
![마이페이지압축](https://github.com/user-attachments/assets/5321bfe7-7bcb-4829-bd07-3ed2969c5bd3)


+ 현재 위치 버튼을 누르게 되면 자신의 위치를 반영해 지도가 이동하며 마커로 표시해줍니다.
+ 마우스 휠, 확대, 축소버튼으로 지도의 확대 축소가 가능합니다.
+ 회원탈퇴 버튼 클릭시 알림창으로 한번 더 확인후 진행합니다.
![확대축소압축](https://github.com/user-attachments/assets/704417ec-b6c0-4d41-9b47-0f62730d3234)
![회원탈퇴](https://github.com/user-attachments/assets/5dea1138-4b74-479e-8647-291a16b6f4df)

로그인/회원가입 페이지 화면
+ 회원가입시 유효성 검사를 통해 회원가입을 진행합니다.
![로그인](https://github.com/user-attachments/assets/febb4283-ef63-4b0e-be91-4de7c6d603fa)
![회원가입](https://github.com/user-attachments/assets/f5bc6116-f639-4ea7-bcc5-6331a7f7653b)


매장 상세페이지
+ 각 매장의 정보를 표시합니다.
+ 메뉴정보 부분은 정보가 많기에 스크롤기능을 사용해 좀 더 보기 편하게 만들었습니다.
![상세페이지(기본)](https://github.com/user-attachments/assets/5c3d4755-8dfa-49ce-a201-52c5641cbe06)
![메뉴스크롤압축](https://github.com/user-attachments/assets/ba7efa98-83fa-403d-ac2c-e0472d9daead)

+ 하트 버튼으로 찜 기능을 구성하였습니다.
![찜](https://github.com/user-attachments/assets/f25d8c79-9950-4f24-8f00-125b209a53cc)

+ 리뷰 등록, 수정 삭제
![리뷰등록](https://github.com/user-attachments/assets/18e2de30-9061-4710-944f-9c43079586c1)
![리뷰 수정](https://github.com/user-attachments/assets/218d52e5-3673-4a51-acbb-e3ffaed1c8ce)
![리뷰 삭제](https://github.com/user-attachments/assets/cbf9b46b-bd1e-4ee8-b01e-5eba7b2f2330)



관리자 페이지
+ 로그인시 jwt토큰에 role을 넣어서 role이 관리자일경우 관리자 페이지로 이동합니다.
+ 관리자 페이지중 회원관리에서 회원을 삭제할 수 있습니다.
![회원삭제](https://github.com/user-attachments/assets/bf0c96f5-5457-4b77-a40b-573f6e2715dc)
+ 관리자 페이지중 메뉴등록에서 각 매장별 메뉴를 등록 할 수 있습니다.
![메뉴등록](https://github.com/user-attachments/assets/86fea0ed-016e-49eb-9d69-d9a25c14a7a8)
+ 관리자 페이지중 재고수정에서 각 매장별 메뉴의 재고를 수정 할 수 있습니다.


트러블 슈팅: ????



느낀점
+ 김용현: 
+ 강민석:
+ 오승록:
+ 이지원: 

