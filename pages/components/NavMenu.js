import Link from "next/link";

export default function NavMenu({ path, name, now }) {
  return (
    <Link href={path}>
      <a>
        {name}
        <style jsx>{`
          a {
            padding: 10px 20px;
            color: ${now && "red"};
            font-size: 1.2rem;
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
