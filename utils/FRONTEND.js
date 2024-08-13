export const frontendExperience = [
  {
    id: 1,
    title: "스냅태그",
    info: "비가시성 워터마크 및 보안 서비스",
    period: "23.06 ~ ",
    links: {
      velog: null,
      github: null,
      site: "https://snaptag.co.kr/ko",
    },
    part: "웹 초기구축 / 운영 / 유지보수 및 보안관련 기능테스트",
    keyword: [
      "기존 React 프로젝트, Next.js 12/14 사용한 초기구축 및 유지보수",
      "포트원 결제 연동한 이커머스 개발",
      "Flutter를 사용한 데스크탑 앱 개발",
      "스웨거 사용한 백엔드와 소통",
      "dev 환경 구축하여 운영 및 개발 환경분리",
    ],
    desc: [
      {
        title: "데스크탑 임베딩 프로그램 프로토타입",
        child: [
          "window/macos용 빌드 설정",
          "백엔드 api와 내부 sdk 연결",
          "Bloc패턴을 통한 state 타입별 관리",
        ],
      },
      {
        title: "IUFC 포토카드 - 어드민 초기셋팅 및 기능 개발",
        child: [
          "기획, 백엔드와의 기능 및 일정 협의 통한 개발 순서 조율",
          "팀프로젝트로써 용이한 작업을 위한 재사용가능한 컴포넌트/함수 정의",
        ],
      },
      {
        title: "홈페이지 리뉴얼 / 신규 / 유지보수",
        child: [
          "채용 게시판 페이지 & 어드민",
          "middleware와 cookie, user locale을 사용한 다국어 홈페이지로 3개의 사이트 리뉴얼",
          "신규 반응형 홈페이지(Ai, 랩가드) 구축",
          "스냅태그 홈페이지 전면 리뉴얼",
        ],
      },
      {
        title: "Keefo - 웹앱 초기구축 / 운영 / 유지보수",
        child: [
          "앱을 통해서만 접근 가능한 상품구매 페이지와 티켓 판매 사이트 분기처리",
          "포트원 결제 연동",
          "tanstack query 사용한 효율적인 데이터 페칭",
          "Axios interceptors 사용한 refresh token, error handling",
        ],
      },
      {
        title: "그 외 기타 업무",
        child: [
          "현장관리자용 사전등록 및 체크인 관리 웹",
          "프로토타입을 위한 포토샵 임베딩 플러그인 기능 테스트",
          "프로토타입을 위한 브라우저 dom 조작관련 기능 테스트",
          "기존 작업자에 따라 다르게 관리되고있어서 dev 환경 구축",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "커넥틀리",
    info: "명품 이커머스 플랫폼",
    period: "22.07 ~ 23.03 (7개월)",
    links: {
      velog: null,
      github: null,
      site: null,
    },
    part: "Beborn 웹앱 초기구축 / 운영 / 유지보수",
    keyword: [
      "React / Zustand / NodeJS / Styled-Component 사용",
      "스웨거 사용한 백엔드와 소통",
      "기능단위 스프린트 (개발 - QA - 배포)",
      "Jira와 GitLab을 연동하여 이슈 및 브랜치관리",
      "local - dev - qa - prod 4개의 개발 환경별로 각각 프로파일을 관리",
    ],
    desc: [
      {
        title:
          "웹앱 - 초기셋팅부터 홈디스플레이, 기획전, 상품 검색/조회/필터, 장바구니, 결제, 마이페이지, 좋아요, 리뷰 등 이커머스의 필수 기능 구현",
        child: [
          "Zustand 사용한 상태관리 -  api호출과 전역 데이터 관리",
          "i’mport(현 포트원) 결제 연동",
          "뒤로가기 시 history유지 필요 부분에 useLocationState사용",
          "React Portal 사용한 모달 구현",
          "React HOC로 회원/비회원 권한분기",

          "통일화된 코드로 용이한 유지보수를 위해 Express에서 NestJS로 마이그레이션 참여",
          "Axios interceptors 사용한 refresh token, error handling",
          "GA, naver anlytics 스크립트 추가",
        ],
      },
      {
        title: "어드민 (기획전 파트)",
        child: ["S3 이미지 업로드", , "엑셀 상품업로드", ,],
      },
    ],
  },
];

export const frontendInterns = [
  {
    id: 1,
    title: `아르테위드
레퍼런스 사이트`,
    info: "아르테위드는 클래식 종사자들을 위한 종합 서비스를 제공합니다.",
    team: "팀 구성: FE 4명",
    period: "22.05.23 ~ 22.06.17 (4주)",
    links: {
      velog: "https://velog.io/@sseung-i/Community-page",
      github: null,
      site: null,
    },
    part: "커뮤니티 리스트 / 생성 / 디테일 / 수정 페이지",
    keyword: ["React / Styled-Component 사용", "Postman 사용한 데이터 통신"],
    desc: [
      {
        title: "Promise API를 활용하는 비동기 통신 라이브러리인 axios 사용",
      },
      { title: "async/await 사용한 비동기적 통신" },
      { title: "Promise.all 사용한 병렬 통신" },
      {
        title:
          "Quill(Text editor) 라이브러리를 생성 / 디테일(읽기전용) / 수정 페이지에 적용",
      },
      {
        title:
          "공용으로 사용하는 무한스크롤, 날짜형식 변환 로직을 Custom hook으로 구현",
      },
      {
        title:
          "로그인 유저와 작성자를 비교하여 게시글과 댓글 버튼 활성화 상태 분리",
      },
    ],
  },
];

export const frontendProject = [
  {
    id: 1,
    title: `개고수덜
프로젝트 매칭 사이트`,
    team: "팀 구성: FE 4명 / BE 2명",
    period: "22.05.09 ~ 22.05.20 (2주)",
    links: {
      velog: "https://velog.io/@sseung-i/Project-GGSD-2주-프로젝트-회고록",
      github: "https://github.com/sseung-i/32-2nd-GGSD",
      site: "http://13.56.151.244:8000/",
    },
    part: "프로젝트 생성, 프로젝트 상세 페이지",
    keyword: [
      "숨고의 아이템을 모티브로 기획한 팀 프로젝트",
      "React / Styled-Component 사용",
    ],
    desc: [
      {
        title: "URL.createObjectURL()활용한 preview 구현",
      },
      {
        title:
          "신규 프로젝트 submit 시 async/await으로 비동기 처리하여S3 요청 -> 응답데이터 BODY에 넣어서 Fetch post 요청",
      },
      {
        title:
          "localStorage의 token을 사용하여 Fetch post 요청하여 유저정보에 생성 프로젝트 또는 쪼인한 프로젝트 담김",
      },
      { title: "React-calendar 라이브러리 사용" },
    ],
  },
  {
    id: 2,
    title: `LuBean
원두 판매 사이트`,
    team: "팀 구성: FE 4명 / BE 2명",
    period: "22.04.25 ~ 22.05.06 (2주)",
    links: {
      velog: "https://velog.io/@sseung-i/6주차-1차-프로젝트-회고",
      github: "https://github.com/sseung-i/32-1st-LuBean-frontend",
      site: null,
    },
    part: "NAV, 상품 리스트 페이지",
    keyword: ["러쉬를 모티브로 한 팀 프로젝트", "React / Scss 사용"],
    desc: [
      { title: "MouseEvent 사용한 하위메뉴바 드롭다운 구현" },
      { title: "Path Parameters 로 Nav의 페이지 이동 구현" },
      {
        title:
          "Fetch로 상품 데이터(전체상품) 요청 후 프론트에서 카테고리 별데이터 필터링(params.includes)",
      },
    ],
  },
];
