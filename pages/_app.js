import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { IsResponsiveProvider } from "../components/MediaQueryProvider";
import "../styles/globals.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <IsResponsiveProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </IsResponsiveProvider>
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
