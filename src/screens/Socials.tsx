import BG from "../assets/bgs/bg2.png";

import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { fonts } from "../config/fontConfig";
import { useEffect } from "react";
import { colorsConfig } from "../config/colorsConfig";
import { ScrollTrigger } from "react-gsap";
import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
  SiTwitter,
} from "react-icons/si";

const Socials = () => {
  const aboutMe = ["G", "e", "t", "_", "in", "_", "t", "o", "u", "c", "h"];

  const openPage = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact", {
      x: 400,
      rotate: 0,
      opacity: 0,
      reversed: true,
    });
    gsap.to(".contact", {
      scrollTrigger: {
        trigger: ".contact",
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
        <Box display={"flex"} justifyContent="center" flexDirection={"column"}>
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
                  justifyContent="center"
                  color={colorsConfig.bg}
                  textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                  fontFamily={fonts.heading}
                  className="contact"
                  key={i}
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
            borderRadius="md"
            boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
            display={"flex"}
            flexDirection="column"
            rowGap={"1rem"}
            fontWeight="bold"
            p={4}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text
                data-aos="zoom-in"
                fontSize={{ base: "sm", xl: "md" }}
                textAlign="center"
                fontFamily={fonts.body}
                color={colorsConfig.focus}
                fontWeight="bold"
              >
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you
              </Text>
            </Box>
          </Box>
          <Flex
            justifyContent={"center"}
            flexDirection="row"
            columnGap={{ base: 4, xl: 8 }}
            my={4}
            p="4"
          >
            <CIcon
              as={SiInstagram}
              click={() =>
                openPage("https://www.instagram.com/akashmadduru98/")
              }
            />
            <CIcon
              as={SiTelegram}
              click={() => openPage("https://t.me/akashmrc98")}
            />
            <CIcon
              as={SiGithub}
              click={() => openPage("https://github.com/akashmrc98")}
            />
            <CIcon
              as={SiLinkedin}
              click={() => openPage("https://www.linkedin.com/in/akashmrc98/")}
            />
            <CIcon
              as={SiTwitter}
              click={() => openPage("https://twitter.com/akash2rockzzz")}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default Socials;

const CIcon = (props: any) => {
  return (
    <Tilt>
      <Box
        backgroundImage={`radial-gradient(circle, #ffe459, #f7bc3a, #ec9325, #dc6a1b, #c93d1b)`}
        p={2}
        borderRadius="md"
        cursor={"pointer"}
        onClick={props.click}
        boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
        _hover={{
          transform: "scale(0.8)",
          transition: "all .4s",
        }}
        display="flex"
        alignItems={"center"}
      >
        <Icon
          height={{ base: 8 }}
          width={{ base: 8 }}
          as={props.as}
          color={colorsConfig.bg}
        />
      </Box>
    </Tilt>
  );
};
