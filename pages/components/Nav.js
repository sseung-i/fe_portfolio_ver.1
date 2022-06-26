import { useRouter } from "next/router";
import NavMenu from "./NavMenu";
import Image from "next/image";

const index = "/";
const FE = "/frontend";
const publishing = "/publishing/ppaeyot";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="maxWidthWrap">
      <Image src="/images/logo.png" alt="logo image" width={100} height={100} />
      <div>
        <NavMenu path={index} name="MAIN" now={router.pathname === index} />
        <NavMenu path={FE} name="Front-End" now={router.pathname === FE} />
        <NavMenu
          path={publishing}
          name="Publishing"
          now={router.pathname === publishing}
        />
      </div>

      <style jsx>{`
        nav {
          display: flex;
          padding: 30px 0 10px;
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
