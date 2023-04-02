import BG from "../assets/bgs/bg2.png";
import ChceckIcon from "../assets/icons/check-circle.svg";

import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "react-gsap";
import { fonts } from "../config/fontConfig";
import { useEffect, useState } from "react";
import { colorsConfig } from "../config/colorsConfig";
import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".work", {
      x: -400,
      rotate: 0,
      opacity: 0,
      reversed: true,
    });
    gsap.to(".work", {
      scrollTrigger: {
        trigger: ".work",
      },
      x: 0,
      rotate: 360,
      duration: 1,
      opacity: 1,
      reversed: true,
    });
  }, []);
  return (
    <Box
      p={{ base: "2" }}
      bg={colorsConfig.bg}
      backgroundPosition={"center"}
      backgroundSize="contain"
      backgroundRepeat={"no-repeat"}
      backgroundImage={BG}
    >
      <MidDevicesView />
      <MobileDeviceView />
    </Box>
  );
};

export default Work;

const work = [
  {
    role: "Software Engineer ",
    company: "Artemis Network",
    duration: "Sep 2021 - Present",
    experience: "present",
    work: [
      "Designed & Implemented architecture for Arcade Gaming Platform & NFT Market place",
      "Build a mobile app, static websites, & worked on building lot of apis for various clients",
      "Build Telegram chatbots",
      "Optimized and enhanced the performance of applications",
      "Tech I recently worked on, React, Flutter, Nodejs, MongoDB, Python, Docker, Aws, Azure",
    ],
  },
  {
    role: "Java J2EE Developer Intern",
    company: "SC Railway, Vijayawada",
    duration: "Jan 2021 - May 2021",
    experience: "5 months",
    work: [
      "Building day to day features",
      "Refactoring code base",
      "enhance the existing system",
    ],
  },
  {
    role: "Co Founder",
    company: "AuxDynamics",
    duration: "Oct 2020 - Feb 2021",
    experience: "5 months",
    work: [
      "Lead the team",
      "Mentoring interns",
      "Code reviewing and approving PR's",
      "Implementing architecture for various products",
    ],
  },
  {
    role: "Open Source Developer & Mentor for WOC 2020 Hackthon",
    company: "Canvasbird",
    duration: "Nov 2020 - Jan 2021",
    experience: "3 months",
    work: [
      "Designed and implemented architecuture for a DB driven File Mangement System",
      "Worked with NodeJS, ExpressJS, MongoDB & Angular",
      "Code reviewing and approving PR's",
      "Guided students for WOC hackthon on various work items",
    ],
  },
];

const MobileDeviceView = () => {
  const workText = [`W`, `o`, `r`, `k`];
  const [content, setContent] = useState([false, false, false, false, false]);
  function changeContent(index: number) {
    let temp = [false, false, false, false, false];
    temp[index] = !temp[index];
    setContent(temp);
  }

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={16}
      >
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
            {workText.map((h, i) => (
              <Text
                display={"inline-block"}
                color={colorsConfig.bg}
                textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                fontFamily={fonts.heading}
                className="work"
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
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box pos={"relative"}>
          <Box
            borderRadius={"3xl"}
            width={"16px"}
            height={"850px"}
            bg={colorsConfig.bg}
            backgroundImage={BG}
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            flexDirection={"column"}
            boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
            data-aos={"fade-up"}
          >
            {work.map((m, i) => (
              <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5}>
                <Box
                  my={4}
                  flexDirection={"column"}
                  key={i}
                  display={"flex"}
                  position="relative"
                >
                  <Box
                    cursor={"pointer"}
                    display={"flex"}
                    data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
                    fontSize={{ base: "sm" }}
                    borderTopRadius="md"
                    width={"100%"}
                    fontFamily={fonts.heading}
                    bg={colorsConfig.bg}
                    color={colorsConfig.focus}
                    boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
                    fontWeight="bold"
                    justifyContent="center"
                    alignItems={"center"}
                    textAlign="center"
                    p={4}
                  >
                    {m.duration}
                  </Box>
                  <Box
                    cursor={"pointer"}
                    minW="320px"
                    bg={colorsConfig.bg}
                    borderBottomRadius="md"
                    boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
                    left={i % 2 === 0 ? "160px" : "auto"}
                    right={i % 2 !== 0 ? "40px" : "auto"}
                    data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                    p={3}
                  >
                    <Box
                      fontSize={{ base: "sm" }}
                      fontFamily={fonts.heading}
                      color={colorsConfig.sub}
                    >
                      @{m.company}
                    </Box>
                    <Box
                      fontSize={{ base: "xs" }}
                      fontFamily={fonts.heading}
                      color={colorsConfig.focus}
                    >
                      {m.role}
                    </Box>
                    <Divider my={1} />

                    {content[i] ? (
                      <Box
                        display={"flex"}
                        color={colorsConfig.focus}
                        flexDirection="column"
                        textAlign={"left"}
                      >
                        {m.work.map((w, i) => (
                          <Box
                            pt={1}
                            display={"flex"}
                            justifyContent="flex-start"
                            alignItems={"center"}
                            color={colorsConfig.sub}
                            fontFamily={fonts.subHeading}
                            fontSize={{ base: "xs" }}
                            columnGap=".5rem"
                          >
                            <Image
                              data-aos="fade-right"
                              width="12px"
                              height={"12px"}
                              src={ChceckIcon}
                            />
                            <Box data-aos="fade-left">{w}</Box>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Button
                        variant={"outline"}
                        size="xs"
                        cursor={"pointer"}
                        fontFamily={fonts.heading}
                        color={colorsConfig.focus}
                        fontSize="sm"
                        onClick={() => changeContent(i)}
                        outline={"none"}
                        border={colorsConfig.focus}
                        _hover={{
                          bg: colorsConfig.focus,
                          color: colorsConfig.bg,
                        }}
                      >
                        View More
                      </Button>
                    )}
                  </Box>
                </Box>
              </Tilt>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const MidDevicesView = () => {
  const workText = [`W`, `o`, `r`, `k`];
  const [content, setContent] = useState([false, false, false, false, false]);
  function changeContent(index: number) {
    let temp = [false, false, false, false, false];
    temp[index] = !temp[index];
    setContent(temp);
  }

  return (
    <Box display={{ base: "none", lg: "block" }}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={16}
      >
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
            {workText.map((h, i) => (
              <Text
                display={"inline-block"}
                color={colorsConfig.bg}
                textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                fontFamily={fonts.heading}
                className="work"
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
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box pos={"relative"}>
          <Box
            borderRadius={"3xl"}
            width={"32px"}
            height={"850px"}
            bg={colorsConfig.bg}
            backgroundImage={BG}
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            flexDirection={"column"}
            boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
            data-aos={"fade-up"}
          >
            {work.map((m, i) => (
              <Box key={i} display={"flex"} position="relative">
                <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5}>
                  <Box
                    cursor={"pointer"}
                    minW="320px"
                    bg={colorsConfig.bg}
                    borderRadius="md"
                    boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
                    position={"absolute"}
                    left={i % 2 === 0 ? "160px" : "auto"}
                    right={i % 2 !== 0 ? "40px" : "auto"}
                    data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                    p={3}
                  >
                    <Box
                      fontSize={{ base: "sm" }}
                      fontFamily={fonts.heading}
                      color={colorsConfig.sub}
                    >
                      @{m.company}
                    </Box>
                    <Box
                      fontSize={{ base: "xs" }}
                      fontFamily={fonts.heading}
                      color={colorsConfig.focus}
                    >
                      {m.role}
                    </Box>
                    <Divider my={1} />

                    {content[i] ? (
                      <Box
                        display={"flex"}
                        color={colorsConfig.focus}
                        flexDirection="column"
                        textAlign={"left"}
                      >
                        {m.work.map((w, i) => (
                          <Box
                            pt={1}
                            display={"flex"}
                            justifyContent="flex-start"
                            alignItems={"center"}
                            color={colorsConfig.sub}
                            fontFamily={fonts.subHeading}
                            fontSize={{ base: "xs" }}
                            columnGap=".5rem"
                          >
                            <Image
                              data-aos="fade-right"
                              width="12px"
                              height={"12px"}
                              src={ChceckIcon}
                            />
                            <Box data-aos="fade-left">{w}</Box>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Button
                        variant={"outline"}
                        size="xs"
                        cursor={"pointer"}
                        fontFamily={fonts.heading}
                        color={colorsConfig.focus}
                        fontSize="sm"
                        onClick={() => changeContent(i)}
                        outline={"none"}
                        border={colorsConfig.focus}
                        _hover={{
                          bg: colorsConfig.focus,
                          color: colorsConfig.bg,
                        }}
                      >
                        View More
                      </Button>
                    )}
                  </Box>
                </Tilt>
                <Tilt>
                  <Box
                    cursor={"pointer"}
                    display={"flex"}
                    data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
                    borderRadius={"100%"}
                    minH="120px"
                    minW="120px"
                    fontSize={{ base: "sm" }}
                    fontFamily={fonts.heading}
                    bg={colorsConfig.bg}
                    color={colorsConfig.focus}
                    boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
                    fontWeight="bold"
                    justifyContent="center"
                    alignItems={"center"}
                    textAlign="center"
                    p={4}
                  >
                    {m.duration}
                  </Box>
                </Tilt>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
