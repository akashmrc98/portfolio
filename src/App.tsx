import AOS from "aos";

import { ThreeCircles } from "react-loader-spinner";
import { Element } from "react-scroll";
import { colorsConfig } from "./config/colorsConfig";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, Suspense, lazy } from "react";

import "aos/dist/aos.css";

const Navbar = lazy(() => import("./screens/Navbar"));
const Hero = lazy(() => import("./screens/Hero"));
const Work = lazy(() => import("./screens/Work"));
const AboutMe = lazy(() => import("./screens/AboutMe"));
const TechinicalSkill = lazy(() => import("./screens/TechinicalSkills"));
const Socials = lazy(() => import("./screens/Socials"));
const Footer = lazy(() => import("./screens/Footer"));

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        background: colorsConfig.bg,
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color={colorsConfig.sub}
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <ChakraProvider>
        <Box bg={colorsConfig.bg}>
          <Navbar />
          <Element name="home">
            <Hero />
          </Element>
          <Element name="about">
            <AboutMe />
          </Element>
          <Element name="skills">
            <TechinicalSkill />
          </Element>
          <Element name="work">
            <Work />
          </Element>
          <Element name="contact">
            <Socials />
            <Footer />
          </Element>
        </Box>
      </ChakraProvider>
    </Suspense>
  );
}

export default App;
