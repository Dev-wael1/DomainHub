import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import { NextUIProvider, useDisclosure } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import Footer from "../Components/Front/Footer";
import { useRouter } from "next/router";
import MyLayout from "../Components/Layout";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "@smastrom/react-rating/style.css";
import MouseOut from "../Components/Front/MouseExitModal";
import Cookie from "../Components/Front/Cookie";
import ReactGA from "react-ga4";
import axios from "axios";
import Head from "next/head";
import NavBar from "../Components/Front/Navbar/NavBar";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    import("preline");
  }, []);

  useEffect(() => {
    axios.get("/api/get-analytic").then((res) => {
      ReactGA.initialize(res.data?.analyticId);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    });
  }, [router.asPath]);

  useEffect(() => {
    window.addEventListener("mouseout", function (event) {
      const exitModal = localStorage.getItem("exit-modal");

      if (event.toElement === null && event.relatedTarget === null) {
        if (!exitModal) {
          onOpen();
          localStorage.setItem("exit-modal", true);
        }
      }
    });
  }, []);

  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <Provider store={store}>
          <Head>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/logo/logo/logo2.png"
            />
          </Head>
          {router.route === "/admin/[route]" || router.route === "/admin" ? (
            <MyLayout />
          ) : (
            <div>
              <MouseOut isOpen={isOpen} onOpenChange={onOpenChange} />
              <NavBar />
              <Component {...pageProps} />
              <Footer />
              <Cookie />
            </div>
          )}
        </Provider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
