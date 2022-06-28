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
              <a>sseung-i</a>
            </Link>
          </li>
          <li>
            <span>BLOG</span>
            <Link href="https://velog.io/@sseung-i">
              <a>@sseung-i</a>
            </Link>
          </li>
        </ul>
        <p>
          웹 표준을 고려하고 UI/UX를 생각하며 디자인과 퍼블리싱 경험을 배포하는
          프론트엔드가 되고싶습니다.
        </p>
      </article>
      <style jsx>{`
        section {
          padding: 100px 0;
          text-align: center;
          border-top: 1px solid #eee;
        }

        h1 {
          font-size: 2.5rem;
        }

        article.introduce {
          padding-bottom: 30px;
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
      `}</style>
    </section>
  );
}
