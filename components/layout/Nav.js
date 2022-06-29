import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { TestContext } from "../../components/MediaQueryProvider";

const index = "/";
const FE = "/frontend";
const publishing = [
  "/publishing/ppaeyot",
  "/publishing/moviego",
  "/publishing/jejuinside",
];

export default function Nav() {
  const { isTab } = useContext(TestContext);
  const router = useRouter();

  const nowPublishing =
    router.pathname === publishing[0] ||
    router.pathname === publishing[1] ||
    router.pathname === publishing[2];

  return (
    <nav className="maxWidthWrap">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={100}
            height={100}
          />
        </a>
      </Link>
      <div>
        <NavMenu path={index} name="MAIN" now={router.pathname === index} />
        <NavMenu path={FE} name="Front-End" now={router.pathname === FE} />
        <NavMenu
          path="/publishing/ppaeyot"
          name="Publishing"
          now={nowPublishing}
        />
      </div>

      <style jsx>{`
        nav {
          display: flex;
          padding: 30px 0 10px;
          /* padding: ${isTab ? "0 7%" : "30px 0 10px"}; */
        }
        img {
          width: 70px;
        }
        div {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          width: 100%;
          color: #666;
        }
      `}</style>
    </nav>
  );
}
