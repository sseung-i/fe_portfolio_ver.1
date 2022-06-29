import Link from "next/link";

export default function NavMenu({ path, name, now }) {
  return (
    <Link href={path}>
      <a>
        {name}
        <style jsx>{`
          a {
            padding: 10px 20px;
            color: var(${now && "--common-main-color"});
            font-weight: ${now && "bold"};
            font-size: 1.2em;
            opacity: ${now || "0.6"};
          }
          a:hover {
            opacity: 1;
          }
        `}</style>
      </a>
    </Link>
  );
}
