import Link from "next/link";
import { useContext } from "react";
import { TestContext } from "../../components/MediaQueryProvider";

export default function ProjectIntro({ data }) {
  const { project, bgGradation, indexContent, youtubeUrl } = data;

  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <section>
      <div className="maxWidthWrap graBgWrap">
        <h2>퍼블리싱</h2>
        <p>{indexContent}</p>
        <ul>
          <li>
            <Link href="/publishing/ppaeyot">
              <a className={project === "ppaeyot" ? "now" : ""}>PPAEYOT</a>
            </Link>
          </li>
          <li>
            <Link href="/publishing/moviego">
              <a className={project === "moviego" ? "now" : ""}>MOVIEGO</a>
            </Link>
          </li>
          <li>
            <Link href="/publishing/jejuinside">
              <a className={project === "jejuinside" ? "now" : ""}>
                JEJUINSIDE
              </a>
            </Link>
          </li>
        </ul>
        {!isDesktop ? (
          <iframe
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="notebook">
            <p />
            <div className="img">
              <div>
                <iframe
                  width="642"
                  height="360"
                  src={youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
        <div className="circle" />
      </div>
      {/*
       *** 스타일 시작
       */}
      <style jsx>{`
        section {
          background-image: var(${bgGradation});
          text-align: center;
        }

        .graBgWrap {
          position: relative;
          max-width: 1000px;
          height: ${isDesktop ? "750px" : "640px"};
          margin: 0 auto;
          padding-top: 60px;
          color: #fff;
        }

        h2 {
          font-size: 2.3em;
          color: inherit;
        }

        .graBgWrap > p {
          padding-top: 20px;
          height: 50px;
          color: inherit;
        }

        ul {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 20px;
          height: 35px;
          margin: 50px auto 20px;
          text-align: center;
          z-index: 1;
        }

        ul > li > a {
          display: inline-block;
          width: 160px;
          height: 35px;
          line-height: 35px;
          color: var(--ppayot-index-tab-font-color);
          font-size: 1.5em;
          border: 1px solid #fff;
          box-sizing: border-box;
          background: #fff;
        }

        ul > li > a:not(.now) {
          color: #fff;
          background: none;
          opacity: 0.5;
        }

        ul > li > a:not(.now):hover {
          opacity: 1;
        }

        .circle {
          position: absolute;
          bottom: 0;
          left: 2%;
          width: 96%;
          height: 480px;
          border-radius: 480px 480px 0 0;
          background-color: #fff;
          opacity: 0.3;
        }

        .notebook {
          position: relative;
          margin: 0 auto;
          width: 760px;
          height: 488px;
          margin-top: 45px;
          z-index: 1;
        }

        iframe {
          /* position: relative; */
          z-index: 1;
          ${!isDesktop &&
          "margin-top: 30px; width: 600px; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2)"};
          aspect-ratio: 6/3.75;
        }

        .notebook > p {
          width: 760px;
          height: 488px;
          background: url(../images/notebook.png) no-repeat center center;
          background-size: 100%;
        }

        .img {
          position: absolute;
          top: 74px;
          left: 59px;
          width: 642px;
          height: 394px;
          overflow: hidden;
        }

        .img > div {
          width: 100%;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
