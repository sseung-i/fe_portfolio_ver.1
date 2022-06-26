import { useRouter } from "next/router";
import ProjectIntro from "./components/ProjectIntro";
import ProjectEx from "./components/ProjectEx";
import ProjectConcept from "./components/ProjectConcept";
import ProjectPageInfo from "./components/ProjectPageInfo";
import {
  projectIntroData,
  projectExData,
  ProjectConceptData,
  ProjectPageInfoData,
} from "../../data/MOVIEGODATA";

export default function Publishing() {
  const router = useRouter();
  const nowPath = router.pathname.split("/publishing/")[1];
  return (
    <div id="moviego">
      <ProjectIntro
        bgcolor="--ppayot-gra-color"
        subCate={nowPath}
        data={projectIntroData}
      />
      <ProjectEx data={projectExData} />
      <ProjectConcept data={ProjectConceptData} />
      <ProjectPageInfo data={ProjectPageInfoData} />
    </div>
  );
}
