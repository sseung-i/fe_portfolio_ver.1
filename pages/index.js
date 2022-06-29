import Link from "next/link";

export default function Index() {
  return (
    <section className="maxWidthWrap">
      <article className="introduce">
        <h1>안녕하세요. 프론트엔드 최승이 입니다.</h1>
        <ul className="myInfo">
          <li>
            <span>H.P</span>010-9253-8828
          </li>
          <li>
            <span>E-MAIL</span>mschoise@gamil.com
          </li>
          <li>
            <span>GITHUB</span>
            <Link href="https://github.com/sseung-i">
              <a className="link">sseung-i</a>
            </Link>
          </li>
          <li>
            <span>BLOG</span>
            <Link href="https://velog.io/@sseung-i">
              <a className="link">@sseung-i</a>
            </Link>
          </li>
        </ul>
        <p>
          웹 표준을 고려하고 UI/UX를 생각하며 디자인과 퍼블리싱 경험을 배포하는
          프론트엔드가 되고싶습니다.
        </p>
      </article>
      <article className="ability">
        <article className="skills">
          <h2>
            <span>SKILLS</span>
          </h2>
          <ul>
            <li>
              <h4>DEVELOP</h4>
              <ul>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>Styled-Component</li>
                <li>CSS (Scss)</li>
              </ul>
            </li>
            <li>
              <h4>DESIGN</h4>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
              </ul>
            </li>
            <li>
              <h4>Etc</h4>
              <ul>
                <li>GitHub</li>
                <li>Trello</li>
                <li>Notion</li>
              </ul>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <h2>
            <span>CERTIFICATE</span>
          </h2>
          <div>
            <h4>DESIGN</h4>
            <ul>
              <li>GTQ-i 1급</li>
              <li>GTQ 1급</li>
              <li>컴퓨터그래픽스운용기능사</li>
            </ul>
          </div>
        </article>
      </article>
      <style jsx>{`
        section {
          padding: 100px 0;
          border-top: 1px solid #eee;
        }

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          margin: 100px 0 50px;
        }

        h2 span {
          color: #ff839a;
          border-bottom: 3px solid #ff839a;
          padding-bottom: 10px;
        }

        h4 {
          margin-bottom: 14px;
          font-size: 1.2rem;
        }

        .introduce {
          padding-bottom: 100px;
          text-align: center;
          border-bottom: 3px dashed #eee;
        }

        .myInfo {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
        }

        .myInfo li {
          word-break: keep-all;
        }

        .myInfo span {
          margin-right: 10px;
          font-weight: 600;
        }

        .introduce > p {
          display: inline-block;
          padding: 10px 30px;
          border-radius: 10px;
          margin-top: 30px;
          background: #eee;
        }

        .ability {
          display: flex;
        }

        .skills {
          width: 75%;
        }

        .certificate {
          width: 25%;
        }

        .skills > ul {
          display: flex;
        }

        .skills > ul > li {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .skills > ul > li > ul,
        .certificate ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding-left: 14px;
        }

        .skills > ul > li > ul > li,
        .certificate ul > li {
          list-style: initial;
        }
      `}</style>
    </section>
  );
}
