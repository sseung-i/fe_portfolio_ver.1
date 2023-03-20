import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TestContext } from "../components/MediaQueryProvider";
import {
  CERTIFICATE,
  INTRODUCE,
  MYINFO,
  SKILLS,
  SUMMARY,
  SUMMARY_DESC,
} from "../utils/MAIN";

export default function Index() {
  const { isDesktop, isLap, isTab } = useContext(TestContext);
  const mediaQuery = useContext(TestContext);

  return (
    <section className="maxWidthWrap">
      <article className="introduce">
        {INTRODUCE(mediaQuery)}
        <div>
          {SUMMARY(mediaQuery)}
          {SUMMARY_DESC(mediaQuery)}
        </div>
        <ul className="myInfo">
          {MYINFO.map(({ id, icon, size, link, link_href, text }) => {
            return (
              <li key={id}>
                <div>
                  <Image
                    src={icon}
                    height={size}
                    width={size}
                    alt={`${id} icon`}
                  />
                </div>
                {link ? (
                  <Link href={link_href}>
                    <a className="link" target="_blank">
                      {text}
                    </a>
                  </Link>
                ) : (
                  `${text}`
                )}
              </li>
            );
          })}
        </ul>
      </article>
      <article className="ability">
        <article className="skills">
          <h2>
            <span>SKILLS</span>
          </h2>
          <ul>
            {SKILLS.map(({ id, skills }) => {
              return (
                <li key={id}>
                  <h4>{id}</h4>
                  <ul>
                    {skills.map((skill) => {
                      return <li key={skill}>{skill}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="certificate">
          <h2>
            <span>CERTIFICATE</span>
          </h2>
          <ul>
            {CERTIFICATE.map(({ id, certificate }) => {
              return (
                <li key={id}>
                  <h4>{id}</h4>
                  <ul>
                    {certificate.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </article>
      </article>
      <style jsx>{`
        .maxWidthWrap {
          padding: ${isTab && "0 10% 100px"};
        }

        section {
          padding-bottom: 100px;
          border-top: 1px solid #eee;
        }

        section * {
          word-break: keep-all;
        }

        h1 {
          font-size: 2.5em;
          line-height: 1.5;
          width: inherit;
          margin: ${isDesktop && "0 auto"};
          /* text-align: ${isTab ? "left" : "center"}; */
        }

        .spanPoint {
          color: var(--common-main-color);
        }

        .spanName {
          padding: 3px 10px;
          background: var(--common-main-color);
          color: #fff;
          border-radius: 5px;
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
          width: fit-content;
          margin: 100px auto 0;
          padding-bottom: 100px;
          /* text-align: center; */
          text-align: ${isDesktop ? "center" : "left"};
        }

        .introduce > div {
          display: inline-block;
          width: fit-content;
          /* width: ${isDesktop ? "100%" : "70%"}; */
          border-radius: 10px;
          /* margin: 30px 0; */
          font-size: 1.2em;
          font-weight: 600;
          line-height: 1.5;
        }

        .myInfo {
          display: ${isLap ? "grid" : "flex"};
          grid-template-columns: repeat(2, 1fr);
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
          flex-direction: ${isDesktop ? "row" : "column"};
          /* flex-direction: ${isTab ? "column" : "row"}; */
          border-top: 3px dashed #eee;
        }

        .skills {
          width: ${isDesktop ? "75%" : "100%"};
          /* width: ${isTab ? "100%" : "75%"}; */
          margin: ${isTab ? "0 auto" : ""};
        }

        .certificate {
          width: ${isDesktop ? "25%" : "100%"};
          /* width: ${isTab ? "100%" : "25%"}; */
        }

        .skills > ul,
        .certificate > ul {
          display: flex;
          ${isTab && "flex-direction: column; gap: 30px;"}
        }

        .skills > ul > li,
        .certificate > ul > li {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-right: 5%;
        }

        .skills > ul > li > ul,
        .certificate > ul > li > ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding-left: 14px;
        }

        .skills > ul > li > ul > li,
        .certificate > ul > li > ul > li {
          list-style: initial;
          line-height: 1.3;
        }

        .certificate ul > li {
          word-break: break-all;
        }
      `}</style>
    </section>
  );
}
