export const projectIntroData = {
  project: "jejuinside",
  bgGradation: "--jejuinside-gra-color",
  indexContent:
    "데스크탑/태블릿/모바일 각 운영체제의 최적화 사이즈에 맞게 제작되었습니다.",
  youtubeUrl: {
    desktop: "https://www.youtube.com/embed/cUQMdq3hvyE?controls=0",
    tab: "https://www.youtube.com/embed/ls_labsGvss",
    mobile: "https://www.youtube.com/embed/DWORZS_3w_g",
  },
};

export const projectExData = {
  title: "[제주인싸]이드(JEJU,INSIDE)",
  desc: `‘ㅇㅇ인싸’는 해당 지역에대한 기본 정보뿐만아니라 요즘에 뜨는 여행지나 맛집 정보를 알 수 있고, 데스크탑으로 여행계획을 잡으며 내가 갈 곳을 찜도 하고 일정도 저장해 여행중 모바일로 바로바로 확인할 수 있도록 합니다.
여행시 일기도 작성하여 나중에 추억으로 볼 수도 있습니다.`,
  // siteUrl: "https://sseung-i.github.io/publishing_jejuinside/",
  siteUrl: null,
  githubUrl: "https://github.com/sseung-i/publishing_jejuinside",
  pointColor: "--jejuinside-point-color",
};

export const projectPlanData = {
  plans: [
    {
      id: 1,
      img: "/images/jejuinside/plan1.png",
      desc: "운영체제에 따른 UX의 특성을 파악하여 UI 구조를 와이어프레임으로 작성",
    },
    {
      id: 2,
      img: "/images/jejuinside/plan2.gif",
      desc: "워크플로우를 작성하여 인터페이스 흐름을 이해하고 네비게이션 구조도 작성",
    },
    {
      id: 3,
      img: "/images/jejuinside/plan3.png",
      desc: "포지셔닝맵을 통해 사용자 니즈를 분석하여 내 사이트의 컨셉을 도출",
    },
    {
      id: 4,
      img: "/images/jejuinside/plan4.gif",
      desc: "스타일가이드를 제작 후 운영체제 별 디자인시안 제작",
    },
  ],
  pointColor: "--jejuinside-point-color",
};

export const ProjectConceptData = {
  pointColor: "--jejuinside-point-color",
  conceptLogo: {
    src: "/images/jejuinside/logo.png",
    width: "200",
    height: "60",
    desc: "'제주인싸'의 컨셉에 맞게 제주를 상징하는 하르방 캐릭터를 디자인하였고, 폰트컬러를 다르게하여 단어를 강조",
  },
  conceptColor: {
    box: [
      "--jejuinside-concept-color-1",
      "--jejuinside-concept-color-2",
      "--jejuinside-concept-color-3",
      "--jejuinside-concept-color-4",
    ],
    desc: "제주도의 자연을 나타내는 대표컬러들 중에 사용하였으며 청량하고 산뜻한 느낌과 대비되는 색을 선정하였습니다.",
  },
  conceptFont: {
    name: "제주고딕(JEJU GOTHIC)",
    font: "--jejuinside-concept-font",
    desc: "제주고딕은 제주도에서 배포하는 서체로 제주느낌을 더해주며, 서브로 제주고딕과 비슷한 나눔스퀘어 사용",
  },
};

export const ProjectPageInfoData = {
  desktop: "/images/jejuinside/desktop_capture.png",
  tab: "/images/jejuinside/tab_capture.png",
  mobile: "/images/jejuinside/mobile_capture.png",
};
