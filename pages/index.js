import Link from "next/link";
import css from "styled-jsx/css";
import { useContext } from "react";
import { TestContext } from "../components/MediaQueryProvider";

export default function Index() {
  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <section className="maxWidthWrap">
      <article className="introduce">
        <div>
          <h1>
            안녕하세요.
            <br />
            프론트엔드 개발자 최승이 입니다.
          </h1>
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
        </div>
        <div>
          <p className="summary">
            웹 표준을 고려하고 UI/UX를 생각하며 디자인과 퍼블리싱 경험을
            배포하는 프론트엔드가 되고싶습니다.
          </p>
          <p>
            어느 분야에서나{" "}
            <strong>새로운 기술을 습득하고 사용하는 경험</strong>, 팀 내/외부적{" "}
            <strong>커뮤니케이션</strong>이 가장 중요하다고 여깁니다.
            <br />
            디자인, 퍼블리싱, 프론트엔드의 공통점은{" "}
            <strong>‘심미성, 가시성, 새로운 것에 대한 관심’</strong>이라
            생각합니다.
            <br />
            함께 일하는 동료들에게 영감을 줄 수 있는, 함께 하고 싶은 개발자가 될
            수 있도록 노력하겠습니다.
          </p>
        </div>
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
          padding-bottom: 100px;
          border-top: 1px solid #eee;
        }

        h1 {
          font-size: 2.5em;
          line-height: 1.3;
          text-align: center;
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
          font-size: 1.2em;
        }

        .introduce {
          width: 100%;
          padding-bottom: 100px;
          text-align: center;
          border-bottom: 3px dashed #eee;
        }

        .myInfo {
          display: flex;
          flex-wrap: no-wrap;
          gap: 30px;
          margin-top: 30px;
          font-size: 1.2em;
        }

        .myInfo li {
          width: fit-content;
        }

        .myInfo span {
          margin-right: 10px;
          font-weight: 600;
        }

        .introduce > div:first-child {
          display: flex;
          flex-direction: column;
          width: fit-content;
          margin: 100px auto;
          text-align: left;
        }

        .introduce > div:last-child > p.summary {
          display: inline-block;
          padding: 10px 30px;
          border-radius: 10px;
          margin-bottom: 30px;
          font-size: 1.2em;
          font-weight: 600;
          line-height: 1.5;
          background: #eee;
        }

        .introduce > div:last-child > p:not(.summary) {
          margin: 0 auto;
          font-size: 1.2em;
          line-height: 1.5;
        }

        .ability {
          display: flex;
          flex-direction: ${isTab ? "column" : "row"};
        }

        .skills {
          width: ${isTab ? "100%" : "75%"};
          margin: ${isTab ? "0 auto" : ""};
        }

        .certificate {
          width: ${isTab ? "100%" : "25%"};
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
