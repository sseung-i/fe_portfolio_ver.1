import { useRouter } from "next/router";
import ProjectIntro from "../components/ProjectIntro";
import ProjectEx from "../components/ProjectEx";
import ProjectPlan from "../components/ProjectPlan";

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
