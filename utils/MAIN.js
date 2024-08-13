export const INTRODUCE = ({ isDesktop, isLap, isTab }) => {
  return (
    <>
      <h1>
        안녕하세요. {(isLap || isTab) && <br />}
        <span className="point">프론트엔드 개발자</span> {isTab && <br />}
        <span className="name">최승이</span> 입니다.
      </h1>
      <style jsx>{`
        h1 {
          font-size: 2.5em;
          line-height: 1.5;
          width: inherit;
          margin: ${isDesktop && "0 auto"};
          /* text-align: ${isTab ? "left" : "center"}; */
        }
        .point {
          color: var(--common-main-color);
        }

        .name {
          padding: 3px 10px;
          background: var(--common-main-color);
          color: #fff;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

export const SUMMARY = ({ isDesktop, isLap, isTab }) => {
  return (
    <>
      <p>
        프론트엔드 개발과 퍼블리싱, 디자인 경험으로
        {isDesktop || isLap ? <br /> : " "}
        사용자 중심의 개발을 추구하는 프론트엔드 개발자로 성장하겠습니다.
      </p>
      <style jsx>{`
        p {
          margin: ${isTab ? "50px 0 30px" : "30px auto"};
          text-align: ${isDesktop || "left"};
          font-size: 1.2em;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export const SUMMARY_DESC = ({ isDesktop, isLap, isTab }) => {
  if (isTab) "";

  return (
    <>
      <p>
        프론트엔드, 퍼블리싱, 디자인은 모두{" "}
        <strong>사용자 경험을 개선하는 것에 초점</strong>을 두고 있으며,
        {isDesktop ? <br /> : " "}
        경험들을 바탕으로{" "}
        <strong>원활한 커뮤니케이션을 통해 더 나은 사용자 경험을 제공</strong>할
        수 있다고 생각합니다.
      </p>
      <p className="paddingTop">
        저는 이러한 가치를 공유하며 동료들과의 적극적인 소통을 통해
        {isDesktop ? <br /> : " "}
        함께 목표 달성에 기여하여 사용자에게 더욱 만족스러운 경험을 제공함과
        더불어{isDesktop ? <br /> : " "}함께 일하고 싶은 개발자 또는 사람이
        되겠습니다.
      </p>
      <style jsx>{`
        p {
          margin: 0 auto;
          text-align: ${isDesktop || "left"};
          font-weight: 300;
        }
        p.paddingTop {
          padding-top: 10px;
        }
      `}</style>
    </>
  );
};

export const MYINFO = [
  {
    id: "phone",
    icon: "/images/icons/phone.svg",
    size: "24",
    link: false,
    text: "010-9253-8828",
  },
  {
    id: "mail",
    icon: "/images/icons/gmail.svg",
    size: "24",
    link: false,
    text: "mschoise@gmail.com",
  },
  {
    id: "github",
    icon: "/images/icons/github.png",
    size: "24",
    link: true,
    link_href: "https://github.com/sseung-i",
    text: "sseung-i",
  },
  {
    id: "velog",
    icon: "/images/icons/velog.png",
    size: "24",
    link: true,
    link_href: "https://velog.io/@sseung-i",
    text: "@sseung-i",
  },
];

export const SKILLS = [
  {
    id: "DEVELOP",
    skills: [
      "Next.js",
      "React",
      "Flutter",
      "JavaScript",
      "Typescript",
      "NodeJS",
      "Zustand",
      "Styled-Component",
      "CSS (Scss)",
    ],
  },
  {
    id: "DESIGN",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: "ETC",
    skills: ["GitHub/GitLab", "Jira", "Trello", "Notion"],
  },
];

export const CERTIFICATE = [
  {
    id: "DESIGN",
    certificate: ["GTQ-i 1급", "GTQ 1급", "컴퓨터그래픽스운용기능사"],
  },
];
