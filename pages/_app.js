import Nav from "./components/Nav";
import "../styles/globals.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
