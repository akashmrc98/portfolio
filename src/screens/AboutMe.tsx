import BG from "../assets/bgs/bg2.png";
import Akash from "../assets/akash.jpeg";

import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { fonts } from "../config/fontConfig";
import { useEffect } from "react";
import { colorsConfig } from "../config/colorsConfig";
import { ScrollTrigger } from "react-gsap";
import { Box, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const AboutMe = () => {
  const aboutMe = ["A", "b", "o", "u", "t", "_", "m", "e"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about_me", {
      x: -400,
      rotate: 0,
      opacity: 0,
      reversed: true,
    });
    gsap.to(".about_me", {
      scrollTrigger: {
        trigger: ".about_me",
      },
      x: 0,
      rotate: 360,
      duration: 1,
      opacity: 1,
      reversed: true,
    });

    gsap.from(".avatar", {
      y: -400,
      rotate: 0,
      opacity: 0,
      reversed: true,
    });
    gsap.to(".avatar", {
      scrollTrigger: {
        trigger: ".avatar",
      },
      y: 0,
      duration: 1,
      opacity: 1,
      reversed: true,
    });
  }, []);

  return (
    <Box
      minH="100vh"
      maxH="100vh"
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={"center"}
      p={{ base: "4" }}
      columnGap="2rem"
      bg={colorsConfig.bg}
      backgroundPosition={"center"}
      backgroundSize="contain"
      backgroundRepeat={"no-repeat"}
      // backgroundImage={BG}
      rowGap="2rem"
    >
      <Box width={{ base: "100%", lg: "50%" }}>
        <AnimatePresence>
          <motion.div
            initial={{
              color: colorsConfig.main,
              textShadow: "0px 0px 2px " + colorsConfig.focus,
            }}
            animate={{
              color: colorsConfig.focus,
              textShadow: "0px 0px 2px " + colorsConfig.main,
            }}
            transition={{ duration: 3, repeat: Infinity }}
            exit={{ color: colorsConfig.fg }}
          >
            {aboutMe.map((h, i) => (
              <Text
                display={"inline-block"}
                color={colorsConfig.bg}
                textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                fontFamily={fonts.heading}
                className="about_me"
                key={i}
                textAlign={{ base: "left" }}
                my={4}
                fontWeight={"bold"}
                fontSize={{
                  base: "2xl",
                  sm: "3xl",
                  md: "4xl",
                  lg: "5xl",
                }}
              >
                {h}
              </Text>
            ))}
          </motion.div>
        </AnimatePresence>

        <Box
          color={colorsConfig.focus}
          fontSize={{ base: "sm", lg: "md" }}
          fontFamily={fonts.subHeading}
          p={4}
          borderRadius="md"
          boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
          display={"flex"}
          flexDirection="column"
          rowGap={"1rem"}
          fontWeight="bold"
        >
          <Text data-aos={"fade-left"}>
            I'm passionate about full-stack and love to learn new things & solve
            complex problems in building applications.
          </Text>
          <Text data-aos={"fade-left"}>
            I've had the privilege of working at Artemis Network. My main focus
            is to design and implement architecture for applications and also
            enhance them.
          </Text>
          <Text data-aos={"fade-left"}>
            I used to work as a freelancer apart; from that, I worked as an
            open-source maintainer; and contributor at Canvas Board mentored
            students for WOC NSEC 2020 Hackathon, and worked as a J2EE Intern at
            South Central Railway Vijayawada.
          </Text>
        </Box>
      </Box>

      <Box
        borderRadius="md"
        boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
        className="avatar"
        cursor={"pointer"}
      >
        <Image
          transition={"all 200ms ease-in"}
          _hover={{ transform: `scale(0.9)` }}
          borderRadius="md"
          boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
          maxH={{ base: "300px", lg: "360px" }}
          src={Akash}
          alt="akashmadduru"
        />
      </Box>
    </Box>
  );
};
export default AboutMe;
