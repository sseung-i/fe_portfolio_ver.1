import { useRouter } from "next/router";
import { useContext } from "react";
import { TestContext } from "../../components/MediaQueryProvider";
import ProjectIntro from "../../components/project/ProjectIntro";
import ProjectEx from "../../components/project/ProjectEx";
import ProjectPlan from "../../components/project/ProjectPlan";
import ProjectConcept from "../../components/project/ProjectConcept";
import ProjectPageInfo from "../../components/project/ProjectPageInfo";
import {
  projectIntroData,
  projectExData,
  projectPlanData,
  ProjectConceptData,
  ProjectPageInfoData,
} from "../../utils/PPAEYOTDATA";

export default function Publishing() {
  const router = useRouter();
  const nowPath = router.pathname.split("/publishing/")[1];

  const { isDesktop, isLap, isTab } = useContext(TestContext);

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
          <img src={projectPlanData.plans[3].img} alt="plan image" />
          <p>{projectPlanData.plans[3].desc}</p>
        </div>
        <div className="plan plan5">
          <img src={projectPlanData.plans[4].img} alt="plan image" />
          <p>{projectPlanData.plans[4].desc}</p>
        </div>
      </ProjectPlan>
      <ProjectConcept data={ProjectConceptData} />
      <ProjectPageInfo data={ProjectPageInfoData} />

      {/* 스타일 */}
      <style jsx>{`
        .plan4,
        .plan5 {
          position: relative;
          margin: 50px auto;
          border-top: 3px dotted #ddd;
        }

        .plan5 {
          padding: 50px;
        }

        img {
          width: 90%;
        }

        /* background: url(${projectPlanData.plans[4].img}) no-repeat center
          center;
        background-size: ${isDesktop ? "70%" : "100%"}; */

        .plan4 > p,
        .plan5 > p {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
}
