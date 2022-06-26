import Link from "next/link";

export default function ProjectEx({ data }) {
  const { title, desc, siteUrl, pointColor } = data;
  return (
    <section className="maxWidthWrap">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>
        <Link href={siteUrl}>
          <a>사이트 보러가기</a>
        </Link>
      </div>
      <style jsx>{`
        section {
          margin-top: 80px;
          text-align: center;
        }

        h2 {
          font-size: 2em;
          color: var(${pointColor});
        }

        p {
          margin-top: 20px;
          font-size: 1.2em;
          line-height: 1.5em;
        }

        a {
          display: inline-block;
          margin-top: 20px;
          width: 185px;
          height: 36px;
          line-height: 36px;
          border-radius: 18px;
          background-color: var(${pointColor});
          color: #fff;
        }
      `}</style>
    </section>
  );
}
