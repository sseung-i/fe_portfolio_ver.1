export default function Footer() {
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
          /* margin-top: 100px; */
          width: 100%;
          height: 300px;
          background-color: #eee;
          border-radius: 300px 300px 0 0;
          text-align: center;
        }

        footer > div {
          padding: 100px 10% 0;
          margin: 0 auto;
          text-align: center;
        }

        footer > div > h3 {
          font-size: 2em;
        }

        footer > div > ul {
          margin-top: 30px;
        }

        footer > div > ul > li {
          padding: 0 30px;
          display: inline-block;
          border-right: 1px solid #666;
        }

        footer > div > ul > li:nth-child(3) {
          border: 0px;
        }

        footer > div > p {
          margin-top: 30px;
          font-size: 0.8em;
        }
      `}</style>
    </footer>
  );
}
