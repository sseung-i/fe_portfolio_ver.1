import Link from "next/link";

export default function ProjectIntro({ data }) {
  const { project, bgGradation, indexContent, videoPoster } = data;

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
        <div className="notebook">
          <p></p>
          <div className="img">
            <div>
              <video controls width="642px" poster={videoPoster}>
                <source src="img/ppaeyot/ppaeyot_movie.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
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
          height: 750px;
          margin: 0 auto;
          padding-top: 60px;
          color: #fff;
        }

        h2 {
          font-size: 2.3rem;
          color: inherit;
        }

        .graBgWrap > p {
          padding-top: 20px;
          height: 50px;
          color: inherit;
        }

        ul {
          display: flex;
          justify-content: center;
          gap: 20px;
          /* width: 520px; */
          height: 35px;
          margin: 50px auto 20px;
          text-align: center;
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
          margin: 0 auto;
          width: 760px;
          height: 488px;
          margin-top: 45px;
          position: relative;
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
