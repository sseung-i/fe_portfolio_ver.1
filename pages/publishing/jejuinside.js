import { useRouter } from "next/router";
import ProjectIntro from "../components/ProjectIntro";
import ProjectEx from "../components/ProjectEx";
import ProjectPlan from "../components/ProjectPlan";
import ProjectConcept from "../components/ProjectConcept";
import ProjectPageInfo from "../components/ProjectPageInfo";
import {
  projectIntroData,
  projectExData,
  projectPlanData,
  ProjectConceptData,
  ProjectPageInfoData,
} from "../../data/JEJUINSIDEDATA";
import ProjectPageInfoRespon from "../components/ProjectPageInfo_respon";

export default function Publishing() {
  const router = useRouter();
  const nowPath = router.pathname.split("/publishing/")[1];
  return (
    <div id="jejuinside">
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
      </ProjectPlan>
      <ProjectConcept data={ProjectConceptData} />
      <ProjectPageInfoRespon data={ProjectPageInfoData} />

      {/* 스타일 */}
      <style jsx>{`
        .plan4 {
          position: relative;
          height: 600px;
          margin: 100px auto;
          border-top: 3px dotted #ddd;
          background: url(${projectPlanData.plans[3].img}) no-repeat center
            center;
        }

        .plan4 > p {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
