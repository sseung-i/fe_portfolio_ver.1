import FrontendPortfolio from "../components/FrontendPortfolio";
import {
  frontendExperience,
  frontendInterns,
  frontendProject,
} from "../utils/FRONTEND";

export default function FrontEnd() {
  return (
    <section className="maxWidthWrap">
      <h2>
        <span>EXPERIENCE</span>
      </h2>
      <FrontendPortfolio data={frontendExperience} />
      <h2>
        <span>INTERNSHIP</span>
      </h2>
      <FrontendPortfolio data={frontendInterns} />
      <h2>
        <span>PROJECT</span>
      </h2>
      <FrontendPortfolio data={frontendProject} />
      <style jsx>{`
        h2 {
          margin: 100px 0 50px;
        }

        h2 span {
          color: #ff839a;
          border-bottom: 3px solid #ff839a;
          padding-bottom: 10px;
        }
      `}</style>
    </section>
  );
}
