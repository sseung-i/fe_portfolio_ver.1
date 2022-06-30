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
        {isDesktop ? (
          <div className="notebook">
            <p />
            <div className="img">
              <div>
                <iframe
                  // width="642"
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
        ) : (
          <iframe
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
          height: ${isDesktop ? "750px" : "fit-content"};
          padding-bottom: ${isDesktop || "30px"};
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
          color: inherit;
        }

        ul {
          position: relative;
          display: flex;
          flex-wrap: ${isTab && "wrap"};
          width: ${isTab ? "100%" : "fit-content"};
          justify-content: ${isTab ? "space-between" : "center"};
          gap: 10px 20px;
          margin: 50px auto 20px;
          font-size: ${isTab && "12px"};
          text-align: center;
          z-index: 1;
        }

        ul > li {
          width: 100%;
        }

        ul > li > a {
          display: inline-block;
          width: ${isTab ? "100%" : "160px"};
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
          display: ${isTab && "none"};
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
          position: relative;
          width: ${isDesktop ? " 642px; " : isLap ? "600px" : isTab && "100%"};
          margin-top: ${isDesktop || "30px"};
          box-shadow: ${isDesktop || "0 0 10px 0 rgba(0,0,0,0.2)"};
          aspect-ratio: 6/3.75;
          z-index: 1;
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
