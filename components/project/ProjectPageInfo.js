export default function ProjectPageInfo({ data }) {
  const {
    main: { img: mainImg, desc: mainDesc },
    sub: { img: subImg, desc: subDesc },
  } = data;
  return (
    <section className="maxWidthWrap">
      <div>
        <div>
          <h3>Main</h3>
          <div className="pageCover">
            <img src={mainImg} alt="Index" />
          </div>
          <p>{mainDesc}</p>
        </div>
        <div>
          <h3>Sub</h3>
          <div className="pageCover">
            <img src={subImg} alt="subPage" />
          </div>
          <p>{subDesc}</p>
        </div>
      </div>

      {/* 스타일 */}
      <style jsx>{`
        section {
          height: 1100px;
          text-align: center;
        }

        section > div {
          position: relative;
          top: -350px;
        }

        section > div > div {
          margin-bottom: 100px;
        }

        h3 {
          width: 200px;
          height: 30px;
          line-height: 30px;
          border: 3px;
          border-bottom: 0;
          border-style: solid;
          border-color: #ddd;
          border-radius: 30px 30px 0 0;
          margin: 0 auto;
          text-align: center;
          background-color: #fff;
        }

        .pageCover {
          width: 800px;
          height: 480px;
          margin: 0 auto;
          background-color: #eee;
          overflow: scroll;
          border: 1px solid #ddd;
        }

        .pageCover > img {
          width: 100%;
        }

        p {
          width: 800px;
          margin: 20px auto 0;
          text-align: center;
          line-height: 1.5rem;
        }
      `}</style>
    </section>
  );
}
