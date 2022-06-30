import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TestContext } from "../components/MediaQueryProvider";

const introduce = {
  desktop: `안녕하세요. 프론트엔드 개발자 최승이 입니다.`,
  lap: `안녕하세요.
  프론트엔드 개발자 최승이 입니다.
`,
  tab: `안녕하세요.
프론트엔드 개발자
최승이 입니다.`,
};

export default function Index() {
  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <section className="maxWidthWrap">
      <article className="introduce">
        {isDesktop ? (
          <h1>{introduce.desktop}</h1>
        ) : isLap ? (
          <h1>{introduce.lap}</h1>
        ) : (
          isTab && <h1>{introduce.tab}</h1>
        )}
        <div>
          <p className="summary">
            웹 표준을 고려하고 UI/UX를 생각하며 디자인과 퍼블리싱 경험을
            배포하는 프론트엔드가 되고싶습니다.
          </p>
          {isTab || (
            <p>
              <strong>새로운 기술을 습득하고 사용하는 경험</strong>, 팀
              내/외부적 <strong>커뮤니케이션</strong>이 가장 중요하다고
              여깁니다.
              <br />
              디자인, 퍼블리싱, 프론트엔드의 공통점은{" "}
              <strong>‘심미성, 가시성, 새로운 것에 대한 관심’</strong>이라
              생각합니다.
              <br />
              함께 일하는 동료들에게 영감을 줄 수 있는, 함께 하고 싶은 개발자가
              될 수 있도록 노력하겠습니다.
            </p>
          )}
        </div>
        <ul className="myInfo">
          <li>
            <div>
              <Image
                src="/images/icons/phone.svg"
                height={24}
                width={24}
                alt="phone icon"
              />
            </div>
            010-9253-8828
          </li>
          <li>
            <div>
              <Image
                src="/images/icons/gmail.svg"
                height={24}
                width={24}
                alt="gmail icon"
              />
            </div>
            mschoise@gamil.com
          </li>
          <li>
            <div>
              <Image
                src="/images/icons/github.png"
                height={24}
                width={24}
                alt="github icon"
              />
            </div>
            <Link href="https://github.com/sseung-i">
              <a className="link">sseung-i</a>
            </Link>
          </li>
          <li>
            <div>
              <Image
                src="/images/icons/velog.png"
                height={24}
                width={24}
                alt="velog icon"
              />
            </div>
            <Link href="https://velog.io/@sseung-i">
              <a className="link">@sseung-i</a>
            </Link>
          </li>
        </ul>
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
        .maxWidthWrap {
          padding: ${isTab && "0 10%"};
        }

        section {
          padding-bottom: 100px;
          border-top: 1px solid #eee;
        }

        h1 {
          font-size: 2.5em;
          line-height: 1.5;
          text-align: ${isTab ? "left" : "center"};
        }

        h2 {
          margin: 100px 0 50px;
        }

        h2 span {
          color: var(--common-main-color);
          border-bottom: 3px solid var(--common-main-color);
          padding-bottom: 10px;
        }

        h4 {
          margin-bottom: 14px;
          font-size: 1.2em;
        }

        .introduce {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 100px auto 0;
          padding-bottom: 100px;
          text-align: center;
          border-bottom: 3px dashed #eee;
        }

        .introduce > div {
          display: inline-block;
          border-radius: 10px;
          /* margin: 30px 0; */
          font-size: 1.2em;
          font-weight: 600;
          line-height: 1.5;
        }

        .introduce > div > p.summary {
          width: ${isTab ? "100%" : "70%"};
          margin: ${isTab ? "50px 0 30px" : "30px auto "};
          text-align: ${isTab && "left"};
          font-size: 1.2em;
          line-height: 1.5;
        }

        .introduce > div > p:not(.summary) {
          font-weight: 300;
        }

        .myInfo {
          display: flex;
          flex-direction: ${isDesktop ? "row" : "column"};
          justify-content: center;
          ${isTab ? "align-items:left" : "align-items:center"};
          flex-wrap: wrap;
          gap: 30px;
          margin-top: ${isLap ? "50px" : "30px"};
          font-size: 1.2em;
        }

        .myInfo li {
          display: flex;
          width: fit-content;
        }

        .myInfo div {
          margin-right: 10px;
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
