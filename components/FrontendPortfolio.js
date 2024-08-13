import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TestContext } from "../components/MediaQueryProvider";

export default function FrontendPortfolio({ data }) {
  const LINKICONS = {
    velog: "/images/icons/velog.png",
    github: "/images/icons/github.png",
    site: "/images/icons/site.png",
  };

  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <section>
      {data.map((work) => {
        const { id, title, info, team, period, links, part, keyword, desc } =
          work;

        return (
          <article key={id}>
            <ul className="left">
              <li>
                <h4>{title}</h4>
              </li>
              {info && <li className="info">{info}</li>}
              <li className="team">{team}</li>
              <li className="period">{period}</li>
              <li className="links">
                <ul>
                  {Object.entries(links).map(([key, value]) => {
                    if (value === null) return;

                    return (
                      <li key={key}>
                        <Link href={value}>
                          <a target="_blank">
                            <Image
                              alt={key}
                              src={LINKICONS[key]}
                              width={20}
                              height={20}
                            />
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <div className="right">
              <h5>Part: {part}</h5>
              <div>
                {keyword.map((word, index) => (
                  <p key={index}>{word}</p>
                ))}
              </div>
              <ul>
                {desc.map((description, index) => {
                  if (!description.child) {
                    return <li key={index}>{description.title}</li>;
                  } else {
                    return (
                      <li key={index}>
                        <strong>{description.title}</strong>
                        <ul className="childList">
                          {description.child.map((childList, index) => {
                            return <li key={index}>{childList}</li>;
                          })}
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </article>
        );
      })}

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 70px;
          padding-bottom: 70px;
          font-size: ${isTab ? "18px" : "16px"};
        }

        section {
          word-break: keep-all;
        }

        section * {
          word-break: keep-all;
        }

        section:not(:last-child) {
          border-bottom: 3px dashed #eee;
        }

        article {
          display: flex;
          ${isTab && "flex-direction: column;"}
        }

        .left {
          width: ${isTab ? "100%" : "25%"};
          padding-right: 5%;
          flex-grow: 1;
          flex-shrink: 1;
        }

        .left h4 {
          font-size: 1.3em;
        }

        .info {
          margin-top: 10px;
          font-size: 0.9em;
          line-height: 1.5;
        }

        .team {
          margin-top: 30px;
          font-weight: 600;
        }

        .period {
          margin-top: 5px;
          font-size: 0.8em;
        }

        .links {
          margin-top: 10px;
        }

        .links ul {
          display: flex;
          gap: 5px;
        }

        .right {
          flex-grow: 1.3;
          flex-shrink: 2;
          ${isTab ? "width:100%; margin-top: 30px;" : "width: 60%"}
        }

        .right h5 {
          font-size: 1.1em;
          font-weight: 800;
        }

        .right div {
          margin: 15px 0;
          padding-left: 16px;
          border-left: 2px solid var(--common-font-color);
          font-weight: bold;
          line-height: 1.2em;
        }

        .right div > p:not(:last-child) {
          margin-bottom: 4px;
        }

        .right ul {
          padding-left: 1em;
        }

        .right ul li {
          font-size: 0.9em;
          list-style: unset;
          line-height: 1.5;
        }

        .right .childList {
          margin: 8px 0;
        }

        .right ul li:not(:last-child) {
          margin-bottom: 4px;
        }
      `}</style>
    </section>
  );
}
