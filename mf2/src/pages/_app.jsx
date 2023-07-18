import dynamic from "next/dynamic";
import "@/app/globals.css";
const Header = dynamic(() => import("mf1/Header"));
const Footer = dynamic(() => import("mf1/Footer"));
const Nav = dynamic(() => import("mf1/Nav"));

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
