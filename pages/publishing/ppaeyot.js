import { useRouter } from "next/router";
import ProjectIntro from "../components/ProjectIntro";
import ProjectEx from "../components/ProjectEx";
import ProjectPlan from "../components/ProjectPlan";
import ProjectConcept from "../components/ProjectConcept";
import ProjectPageInfo from "../components/ProjectPageInfo";

const projectIntroData = {
  project: "ppaeyot",
  bgGradation: "--ppayot-gra-color",
  indexContent: "기본형 웹사이트로 일반 데스크탑 모니터에 최적화입니다.",
  videoPoster: "/images/ppaeyot/poster.png",
};

const projectExData = {
  title: "빼욧(PPAEYOT)",
  desc: `운동, 식단 부터 구매까지 다이어트에 대한 정보를 제공하여 혼자서도 할 수 있도록 도와주는 사이트입니다.
  운동의 정확한 자세 등 선별된 동영상/이미지 컨텐츠, 다이어트 식단을 좀 더 맛있게, 간편하게,
  눈으로 즐겁게 할 수 있는 레시피와 구매, 회원제인 전문가로부터 피드백까지 다양한 컨텐츠가 있습니다.
  온라인에 널려있는 정보들보다 정확하게 정보제공하며 회원들끼리 정보도 공유할 수 있어
  다이어트의 모든 정보를 최대한 얻을 수 있도록 합니다.`,
  pointColor: "--ppayot-point-color",
};

const projectPlanData = {
  plans: [
    {
      id: 1,
      img: "/images/ppaeyot/plan1.png",
      desc: "다이어트라는 주제로 브레인스토밍을 하여 핵심키워드와 컬러 선정",
    },
    {
      id: 2,
      img: "/images/ppaeyot/plan2.png",
      desc: "브레인스토밍한 내용으로 마인드맵을 만들어 네이밍을 도출",
    },
    {
      id: 3,
      img: "/images/ppaeyot/plan3.png",
      desc: "네이밍 결과 도출과 컬러를 이용하여 아이디어를 시각화(스케치)",
    },
    {
      id: 4,
      img: "/images/ppaeyot/plan4.png",
      desc: "컨텐츠 분류/정리를 하여 메뉴구조도 작성",
    },
    {
      id: 5,
      img: "/images/ppaeyot/plan5.gif",
      desc: "메뉴별 와이어프레임을 제작 후 스토리보드 제작",
    },
  ],
  pointColor: "--ppayot-point-color",
};

const ProjectConceptData = {
  pointColor: "--ppayot-point-color",
  conceptLogo: {
    src: "/images/ppaeyot/logo.png",
    width: "160",
    height: "80",
    desc: "식사와 운동을 나타내는 포크와 덤벨을 모티브로 포인트컬러로 밝고 활기찬 에너지를, 곡선으로 활동성을 더했습니다.",
  },
  conceptColor: {
    box: [
      "--ppayot-concept-color-1",
      "--ppayot-concept-color-2",
      "--ppayot-concept-color-3",
      "--ppayot-concept-color-4",
    ],
    desc: "의욕과 열정의 레드계열 컬러로 아이보리와 어우러져 따뜻함과 친근함을 느끼게 해주며 운동페이지 강조색으로 블루 추가 사용",
  },
  conceptFont: {
    name: "노토산스(noto Sans CJK KR)",
    font: "--ppayot-concept-font",
    desc: "깔끔한 고딕체로 가독성이 좋고 귀여운 느낌이 있어 전체적인 사이트 분위기에 어울립니다.",
  },
};

const ProjectPageInfoData = {
  main: {
    img: "/images/ppaeyot/ppaeyot_index.png",
    desc: `메인슬라이드를 넓게 배치하여 다양한 컬러가 슬라이딩 되며 밝고 즐거운 느낌을 불러일으켜
  사이트 접속시부터 의지와 활기를 불어일으킵니다.
  또한 베이지컬러 배경으로 따뜻한 느낌을 더하였고 식품관련 컨텐츠가있기에 잘 어우러집니다.`,
  },
  sub: {
    img: "/images/ppaeyot/exercise.png",
    desc: `다른 서브페이지들과 다르게 운동서브페이지는 블루포인트컬러로 힘과 건강함을 표현하며,
    너무 밝지않은 톤으로 가벼운느낌 없이 눈에 잘 띕니다.`,
  },
};

export default function Publishing() {
  const router = useRouter();
  const nowPath = router.pathname.split("/publishing/")[1];
  return (
    <div id="ppaeyot">
      <ProjectIntro
        bgcolor="--ppayot-gra-color"
        subCate={nowPath}
        data={projectIntroData}
      />
      <ProjectEx data={projectExData} />
      <ProjectPlan data={projectPlanData}>
        <div className="plan plan4">
          <p>{projectPlanData.plans[3].desc}</p>
        </div>
        <div className="plan plan5">
          <p>{projectPlanData.plans[4].desc}</p>
        </div>
      </ProjectPlan>
      <ProjectConcept data={ProjectConceptData} />
      <ProjectPageInfo data={ProjectPageInfoData} />

      {/* 스타일 */}
      <style jsx>{`
        .plan4 {
          height: 350px;
          margin: 50px auto;
          background: url(${projectPlanData.plans[3].img}) no-repeat center
            center;
          background-size: 70%;
          position: relative;
          border-top: 3px dotted #ddd;
        }

        .plan5 {
          width: 1000px;
          height: 900px;
          margin: 50px auto;
          background: url(${projectPlanData.plans[4].img}) no-repeat center
            center;
          background-size: 70%;
          position: relative;
          border-top: 3px dotted #ddd;
        }

        .plan4 > p,
        .plan5 > p {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
