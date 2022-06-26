import Image from "next/image";

export default function ProjectConcept({ data }) {
  const {
    pointColor,
    conceptLogo: { src: logoSrc, width: logoW, height: logoH, desc: logoDesc },
    conceptColor: { box: colorBox, desc: colorDesc },
    conceptFont: { name: fontName, font: fontStyle, desc: fontDesc },
  } = data;
  return (
    <section>
      <div className="maxWidthWrap">
        <h2>CONCEPT</h2>
        <ul className="conceptGrid">
          <li>
            <h3>LOGO</h3>
            <div>
              <Image
                src={logoSrc}
                alt="logo image"
                width={logoW}
                height={logoH}
              />
            </div>
            <p>{logoDesc}</p>
          </li>
          <li>
            <h3>COLOR</h3>
            <div>
              <ul className="colorWrap">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p>{colorDesc}</p>
          </li>
          <li className="conceptFont">
            <h3>FONT</h3>
            <div className="notosans">
              {fontName}
              <br />
              1234567890
            </div>
            <p>{fontDesc}</p>
          </li>
        </ul>
      </div>
      <style jsx>{`
        section {
          margin-top: 90px;
          width: 100%;
          height: 800px;
          background-color: #eee;
          text-align: center;
        }

        section > div {
          padding-top: 60px;
        }

        h2 {
          font-size: 2em;
          color: var(${pointColor});
        }

        .conceptGrid {
          display: flex;
          margin-top: 50px;
        }

        .conceptGrid > li {
          width: 100%;
          padding: 0 25px;
        }

        .conceptGrid > li:not(:last-child) {
          border-right: 3px dotted #fff;
        }

        .conceptGrid h3 {
          font-size: 1.5rem;
        }

        .conceptGrid div {
          height: 80px;
          margin: 10px 0;
        }

        .conceptGrid p {
          line-height: 1.5em;
          text-align: justify;
        }

        .colorWrap {
          display: flex;
          justify-content: center;
          gap: 5px;
          padding-top: 13px;
        }

        .colorWrap > li {
          width: 54px;
          height: 54px;
        }

        .colorWrap > li:nth-child(1) {
          background-color: var(${colorBox[0]});
        }
        .colorWrap > li:nth-child(2) {
          background-color: var(${colorBox[1]});
        }
        .colorWrap > li:nth-child(3) {
          background-color: var(${colorBox[2]});
        }
        .colorWrap > li:nth-child(4) {
          background-color: var(${colorBox[3]});
        }

        .conceptFont > div {
          padding-top: 10px;
          font-family: var(${fontStyle});
          font-size: 1.3em;
          line-height: 1.5em;
        }
      `}</style>
    </section>
  );
}
