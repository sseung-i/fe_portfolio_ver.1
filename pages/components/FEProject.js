import Image from "next/image";
import Link from "next/link";
import { frontendProject } from "../../data/FRONTEND";

export default function FEProject() {
  const LINKICONS = {
    velog: "/images/icons/velog.png",
    github: "/images/icons/github.png",
    site: "/images/icons/site.png",
  };
  return (
    <section>
      {frontendProject.map((intern) => {
        const { id, title, team, period, links, part, keyword, desc } = intern;

        return (
          <article key={id}>
            <ul className="left">
              <li>
                <h4>{title}</h4>
              </li>
              <li className="team">{team}</li>
              <li className="period">{period}</li>
              <li className="links">
                <ul>
                  {Object.entries(links).map(([key, value]) => {
                    if (value === null) return;

                    return (
                      <li key={key}>
                        <Link href={value}>
                          <a>
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
                {desc.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
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
        }

        section:not(:last-child) {
          border-bottom: 3px dashed #eee;
        }

        article {
          display: flex;
          gap: 15%;
          word-break: keep-all;
        }

        .left {
          width: 25%;
        }

        .left h4 {
          font-size: 1.3rem;
        }

        .info {
          margin-top: 10px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .team {
          margin-top: 30px;
          font-weight: 600;
        }

        .period {
          margin-top: 5px;
          font-size: 0.8rem;
        }

        .links {
          margin-top: 10px;
        }

        .links ul {
          display: flex;
          gap: 5px;
        }

        .right {
          width: 60%;
        }

        .right h5 {
          font-size: 1.1rem;
          font-weight: 800;
        }

        .right div {
          padding: 15px 0;
        }

        .right div > p:not(:last-child) {
          margin-bottom: 4px;
        }

        .right ul {
          padding-left: 1em;
        }

        .right ul li {
          font-size: 0.9rem;
          list-style: unset;
        }

        .right ul li:not(:last-child) {
          margin-bottom: 4px;
        }
      `}</style>
    </section>
  );
}
