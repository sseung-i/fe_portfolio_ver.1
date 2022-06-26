import Nav from "./components/Nav";
import "../styles/globals.css";
import "../styles/theme.css";
import Footer from "./components/Footer";

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
