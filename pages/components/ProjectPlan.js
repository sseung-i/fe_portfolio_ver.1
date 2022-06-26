export default function ProjectPlan({ data, children }) {
  const { plans, pointColor } = data;
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
          font-size: 2rem;
          color: var(${pointColor});
        }

        ul {
          display: flex;
          justify-content: center;
          gap: 60px;
          width: 100%;
          height: 300px;
          margin-top: 30px;
        }

        li {
          position: relative;
          height: 100%;
          border: 1px solid #ddd;
        }

        li > div {
          height: 200px;
        }

        li:nth-child(1) > div {
          background: url(${plans[0].img}) no-repeat top center;
        }
        li:nth-child(2) > div {
          background: url(${plans[1].img}) no-repeat top center;
        }
        li:nth-child(3) > div {
          background: url(${plans[2].img}) no-repeat top center;
        }

        li:nth-child(2)::before,
        li:nth-child(2)::after {
          position: absolute;
          top: 0;
          display: inline-block;
          content: "";
          width: 30px;
          height: 300px;
          background: url(/images/ppaeyot/gt.png) no-repeat top center;
        }

        li:nth-child(2)::before {
          left: -45px;
        }

        li:nth-child(2)::after {
          right: -45px;
        }

        li > p {
          width: 280px;
          height: 80px;
          padding: 15px;
          line-height: 1.5rem;
        }
      `}</style>
    </section>
  );
}
