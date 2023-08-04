import BG from "../assets/bgs/bg.png";

import { gsap } from "gsap";
import { fonts } from "../config/fontConfig";
import { colorsConfig } from "../config/colorsConfig";

import Tilt from "react-parallax-tilt";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/lottie/lev.json";

import { AnimatePresence, motion } from "framer-motion";
import { ScrollTrigger, SplitWords, Tween } from "react-gsap";
import { Box, Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

const Hero = () => {
  const [isMobile] = useMediaQuery("(min-width: 500px)");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".name_text", {
      x: 300,
      rotation: 0,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".name_text", {
      scrollTrigger: {
        trigger: ".name_text",
      },
      x: 0,
      rotation: 360,
      duration: 1,
      opacity: 1,
      reversed: false,
    });

    gsap.from(".hello_text", {
      x: -400,
      rotate: 0,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".hello_text", {
      scrollTrigger: {
        trigger: ".hello_text",
      },
      x: 0,
      rotate: 360,
      duration: 1,
      opacity: 1,
      reversed: false,
    });

    gsap.from(".hover", {
      y: -400,
      rotate: 0,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".hover", {
      scrollTrigger: {
        trigger: ".hello_text",
      },
      y: 0,
      duration: 1,
      opacity: 1,
      reversed: false,
    });
  }, []);

  return (
    <Box
      bg={colorsConfig.bg}
      // backgroundImage={BG}
      backgroundPosition={"center"}
      backgroundSize="contain"
      backgroundRepeat={"no-repeat"}
      minH="100vh"
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={"center"}
      p={{ base: "4" }}
      py={{ base: 24 }}
    >
      <Box cursor={"pointer"} className="hover">
        <Tilt>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ height: isMobile ? "520px" : "320px" }}
          />
        </Tilt>
      </Box>
      <Box width={{ base: "100%", md: "75%", xl: "50%" }} mx="auto">
        <Grid
          textAlign={{ base: "left" }}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        >
          <Flex>
            {helloText.map((h, i) => (
              <Text
                color={colorsConfig.bg}
                textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                fontFamily={fonts.heading}
                className="hello_text"
                key={i}
              >
                {h}
              </Text>
            ))}
          </Flex>
          <Flex>
            <AnimatePresence>
              <motion.div
                initial={{
                  textShadow: "1px 1px 2px " + colorsConfig.sub,
                  color: colorsConfig.bg,
                }}
              >
                <Box
                  display={"inline-block"}
                  fontFamily={fonts.heading}
                  textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                  transition={"all 200ms ease-in"}
                  _hover={{ transform: `scale(0.98)` }}
                  cursor="pointer"
                >
                  {name.map((n, i) => (
                    <Box key={i} display={"inline-block"} className="name_text">
                      {n}
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Flex>
        </Grid>

        <Box
          py={{ base: 4 }}
          color={colorsConfig.focus}
          fontSize={{ base: "md", md: "lg", xl: "2xl" }}
          fontFamily={fonts.subHeading}
          textShadow={`1px 1px 2px ${colorsConfig.sub}, -1px -1px 2px ${colorsConfig.bg}`}
          transition={"all 200ms ease-in"}
          cursor="pointer"
          _hover={{
            textShadow: ` 1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`,
          }}
        >
          <Tween
            from={{ opacity: "0", y: "-10", x: "-10" }}
            to={{ opacity: "1", y: "0", x: "0" }}
            delay={1}
            stagger={1}
            target="desc"
            duration={1.5}
          >
            <SplitWords wrapper={<Flex display={"inline-block"}></Flex>}>
              I’m a software engineer with specialization in full-stack I build
              end to end applications for all platforms Currently focusing on
              developing product at Artemis Network 
            </SplitWords>
          </Tween>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;

const name = [
  "I",
  "'m",
  "_A",
  "k",
  "a",
  "s",
  "h",
  "_M",
  "a",
  "d",
  "d",
  "u",
  "r",
  "u",
];

const helloText = ["H", "e", "l", "l", "o", "."];
