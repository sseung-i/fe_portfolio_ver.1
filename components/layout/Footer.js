import { useContext } from "react";
import { TestContext } from "../../components/MediaQueryProvider";

export default function Footer() {
  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <footer>
      <div>
        <h3>portfolio</h3>
        <ul>
          <li>최승이</li>
          <li>010-9253-8828</li>
          <li>mschoise@gmail.com</li>
        </ul>
        <p>Copyright&copy;2022 ChoiSeungI portfolio</p>
      </div>

      <style jsx>{`
        footer {
          width: 100%;
          height: 300px;
          border-radius: ${isTab || "300px 300px 0 0"};
          text-align: center;
        }

        footer > div {
          padding: 100px 10% 50px;
          margin: 0 auto;
          text-align: center;
          background-color: #eee;
        }

        footer > div > h3 {
          font-size: 2em;
        }

        footer > div > ul {
          display: flex;
          justify-content: center;
          ${isTab && "flex-direction:column; gap: 15px;"};
          margin-top: 30px;
        }

        footer > div > ul > li {
          padding: 0 30px;
        }

        footer > div > ul > li:not(:last-child) {
          border-right: ${isTab || "1px solid #666"};
        }

        footer > div > p {
          margin-top: 30px;
          font-size: 0.8em;
        }
      `}</style>
    </footer>
  );
}
