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
      "Promise API를 활용하는 비동기 통신 라이브러리인 axios 사용",
      "async/await 사용한 비동기적 통신",
      "Promise.all 사용한 병렬 통신",
      "Quill(Text editor) 라이브러리를 생성 / 디테일(읽기전용) / 수정 페이지에 적용",
      "공용으로 사용하는 무한스크롤, 날짜형식 변환 로직을 Custom hook으로 구현",
      "로그인 유저와 작성자를 비교하여 게시글과 댓글 버튼 활성화 상태 분리",
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
      site: "http://www.ggsd.ml:8000/",
    },
    part: "프로젝트 생성, 프로젝트 상세 페이지",
    keyword: [
      "숨고의 아이템을 모티브로 기획한 팀 프로젝트",
      "React / Styled-Component 사용",
    ],
    desc: [
      "URL.createObjectURL()활용한 preview 구현",
      "신규 프로젝트 submit 시 async/await으로 비동기 처리하여S3 요청 -> 응답데이터 BODY에 넣어서 Fetch post 요청",
      "localStorage의 token을 사용하여 Fetch post 요청하여 유저정보에 생성 프로젝트 또는 쪼인한 프로젝트 담김",
      "React-calendar 라이브러리 사용",
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
      "MouseEvent 사용한 하위메뉴바 드롭다운 구현",
      "Path Parameters 로 Nav의 페이지 이동 구현",
      "Fetch로 상품 데이터(전체상품) 요청 후 프론트에서 카테고리 별데이터 필터링(params.includes)",
    ],
  },
];
