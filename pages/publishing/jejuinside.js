import { useRouter } from "next/router";
import { useContext } from "react";
import { TestContext } from "../../components/MediaQueryProvider";
import ProjectEx from "../../components/project/ProjectEx";
import ProjectPlan from "../../components/project/ProjectPlan";
import ProjectConcept from "../../components/project/ProjectConcept";
import {
  projectIntroData,
  projectExData,
  projectPlanData,
  ProjectConceptData,
  ProjectPageInfoData,
} from "../../data/JEJUINSIDEDATA";
import ProjectPageInfoRespon from "../../components/project/ProjectPageInfo_respon";
import ProjectIntroRespon from "../../components/project/ProjectIntro_respon";

export default function Publishing() {
  const router = useRouter();
  const nowPath = router.pathname.split("/publishing/")[1];

  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <div id="jejuinside">
      <ProjectIntroRespon
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
      </ProjectPlan>
      <ProjectConcept data={ProjectConceptData} />
      <ProjectPageInfoRespon data={ProjectPageInfoData} />

      {/* 스타일 */}
      <style jsx>{`
        .plan4 {
          position: relative;
          margin: 50px auto;
          border-top: 3px dotted #ddd;
          /* height: 600px;
          margin: 100px auto;
          border-top: 3px dotted #ddd; */
          /* background: url(${projectPlanData.plans[3].img}) no-repeat center
            center; */
        }

        .plan4 img {
          margin-top: 30px;
          width: 100%;
        }

        .plan4 > p {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
}
