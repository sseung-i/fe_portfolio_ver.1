import Image from "next/image";

export default function ProjectPageInfoRespon({ data }) {
  const { desktop, tab, mobile } = data;
  return (
    <section className="maxWidthWrap">
      <ul>
        <li className="desktop">
          <div>
            <h3>DESKTOP</h3>
            <p className="desktopBgImg" />
            <div className="pageCover">
              <Image
                src={desktop}
                width={507}
                height={319}
                alt="notebook image"
              />
              {/* <img src={desktop} alt="Index" /> */}
            </div>
          </div>
        </li>
        <li className="tab">
          <div>
            <h3>TAB</h3>
            <p className="tabBgImg" />
            <div className="pageCover">
              <img src={tab} alt="Index" />
            </div>
          </div>
        </li>
        <li className="mo">
          <div>
            <h3>MOBILE</h3>
            <p className="moBgImg" />
            <div className="pageCover">
              <img src={mobile} alt="Index" />
            </div>
          </div>
        </li>
      </ul>

      {/* 스타일 */}
      <style jsx>{`
        section {
          position: relative;
          top: -350px;
          height: 200px;
          text-align: center;
        }

        ul {
          display: flex;
          justify-content: space-between;
          width: 1000px;
          height: 400px;
          margin: 0 auto 100px;
        }

        ul > li {
          position: relative;
        }

        ul > li > div {
          position: absolute;
          left: 0;
          bottom: 0;
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

        img {
          width: 100%;
        }

        .desktop {
          width: 600px;
        }

        .desktop > div {
          width: 600px;
          height: 385px;
        }

        .desktop .desktopBgImg {
          width: 100%;
          height: 100%;
          background: url(/images/jejuinside/notebook.png) no-repeat bottom
            center;
          background-size: 100%;
        }

        .desktop .pageCover {
          position: absolute;
          top: 50px;
          width: 507px;
          height: 319px;
          bottom: 46px;
          left: 46px;
          overflow: scroll;
        }

        .tab {
          width: 270px;
        }

        .tab > div {
          width: 270px;
          height: 355px;
        }

        .tab .tabBgImg {
          width: 100%;
          height: 100%;
          background: url(/images/jejuinside/tab.png) no-repeat bottom center;
          background-size: 100%;
        }

        .tab .pageCover {
          position: absolute;
          width: 246px;
          height: 330px;
          bottom: -16px;
          left: 12px;
          border-radius: 5px;
          overflow: scroll;
        }

        .mo {
          width: 118px;
        }

        .mo > div {
          width: 118px;
          height: 238px;
        }

        .mo h3 {
          left: 21px;
          top: -20px;
          width: 70px;
          height: 20px;
          font-size: 0.8em;
          line-height: 20px;
        }

        .mo .pageCover {
          position: absolute;
          width: 104px;
          height: 225px;
          bottom: -13px;
          left: 7px;
          border-radius: 10px;
          overflow: scroll;
        }

        .mo .moBgImg {
          width: 100%;
          height: 100%;
          background: url(/images/jejuinside/phone.png) no-repeat bottom center;
          background-size: 100%;
        }
      `}</style>
    </section>
  );
}
