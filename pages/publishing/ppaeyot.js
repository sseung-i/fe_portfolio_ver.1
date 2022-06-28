import { useRouter } from "next/router";
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
} from "../../data/PPAEYOTDATA";

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
