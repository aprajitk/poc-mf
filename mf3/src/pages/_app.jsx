import dynamic from "next/dynamic";
import "@/app/globals.css";

const Header = dynamic(() => import("mf1/Header"), { ssr: false });
const Footer = dynamic(() => import("mf1/Footer"), { ssr: false });
const Nav = dynamic(() => import("mf1/Nav"), { ssr: false });

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
