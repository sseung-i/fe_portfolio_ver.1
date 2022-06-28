import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import "../styles/globals.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
