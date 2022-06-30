import { useContext } from "react";
import { TestContext } from "../../components/MediaQueryProvider";

export default function ProjectPlan({ data, children }) {
  const { plans, pointColor } = data;

  const { isDesktop, isLap, isTab } = useContext(TestContext);

  return (
    <section>
      <div className="maxWidthWrap">
        <h2>PLAN</h2>
        <ul>
          <li>
            <div></div>
            <p>{plans[0].desc}</p>
          </li>
          <li>
            <div></div>
            <p>{plans[1].desc}</p>
          </li>
          <li>
            <div></div>
            <p>{plans[2].desc}</p>
          </li>
        </ul>
        {children}
      </div>
      <style jsx>{`
        section {
          margin-top: 90px;
          text-align: center;
        }

        h2 {
          font-size: 2em;
          color: var(${pointColor});
        }

        ul {
          display: flex;
          justify-content: center;
          gap: 60px;
          width: 100%;
          height: ${isDesktop && "280px"};
          margin-top: 30px;
          ${!isDesktop && "flex-direction: column;"}
        }

        li {
          position: relative;
          height: 100%;
          border: 1px solid #ddd;
          ${!isDesktop && `margin: 0 auto; border:0;`}
        }

        li > div {
          ${isDesktop
            ? "height: 200px"
            : isLap
            ? "width: 90%; height: 300px; margin: 0 auto; border: 1px solid #ddd;"
            : isTab &&
              "width: 90%; min-height:200px; max-height: 300px; margin: 0 auto;"}
        }

        li:nth-child(1) > div {
          background: url(${plans[0].img}) no-repeat bottom center;
          background-size: contain;
          /* ${!isDesktop && "background-size: contain"}; */
        }
        li:nth-child(2) > div {
          background: url(${plans[1].img}) no-repeat center center;
          background-size: contain;
          /* ${!isDesktop && "background-size: contain"}; */
        }
        li:nth-child(3) > div {
          background: url(${plans[2].img}) no-repeat center center;
          background-size: contain;
          /* ${!isDesktop && "background-size: contain"}; */
        }

        li:nth-child(2)::before,
        li:nth-child(2)::after {
          ${isDesktop &&
          `
          position: absolute;
          top: 0;
          display: inline-block;
          content: "";
          width: 30px;
          height: 300px;
          background: url(/images/ppaeyot/gt.png) no-repeat top center;
          `}
        }

        li:nth-child(2)::before {
          left: -45px;
        }

        li:nth-child(2)::after {
          right: -45px;
        }

        li > p {
          width: ${isDesktop ? "280px" : "100%"};
          height: 80px;
          padding: 15px;
          line-height: 1.5em;
        }
      `}</style>
    </section>
  );
}
