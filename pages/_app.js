import { useContext } from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { IsTabProvider } from "../components/MediaQueryProvider";
import "../styles/globals.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <IsTabProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </IsTabProvider>
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
