import Tilt from "react-parallax-tilt";
import {
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiReact,
  SiAngular,
  SiFlask,
  SiSpringboot,
  SiNodemon,
  SiMongodb,
  SiMysql,
  SiVim,
  SiGit,
  SiLinux,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiRust,
  SiPython,
  SiCplusplus,
  SiVuetify,
  SiDjango,
} from "react-icons/si";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "react-gsap";
import { Box, Text, Icon, Grid } from "@chakra-ui/react";
import { fonts } from "../config/fontConfig";
import { colorsConfig } from "../config/colorsConfig";
import { AnimatePresence, motion } from "framer-motion";

import BG from "../assets/spiral.svg";

const TechinicalSkill = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".skills", {
      x: 400,
      rotate: 0,
      opacity: 0,
      reversed: true,
    });
    gsap.to(".skills", {
      scrollTrigger: {
        trigger: ".skills",
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
      bg={colorsConfig.bg}
      backgroundPosition={"center"}
      backgroundSize="contain"
      backgroundRepeat={"no-repeat"}
      backgroundImage={BG}
      minH="100vh"
    >
      <Box
        pt={16}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
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
            {techinicalSkills.map((h, i) => (
              <Text
                display={"inline-block"}
                color={colorsConfig.bg}
                textShadow={`1px 1px 2px ${colorsConfig.bg}, -1px -1px 2px ${colorsConfig.sub}`}
                fontFamily={fonts.heading}
                className="skills"
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
      <Grid
        rowGap={"4rem"}
        justifyContent="center"
        alignItems={"center"}
        pb={16}
      >
        <Grid
          gridTemplateColumns={{
            base: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          rowGap="2rem"
          columnGap="2rem"
        >
          {frontend.map((c, i) => (
            <CIcon index={i} key={i} {...c} />
          ))}
        </Grid>

        <Grid
          gridTemplateColumns={{
            base: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          rowGap="2rem"
          columnGap="2rem"
        >
          {backend.map((c, i) => (
            <CIcon index={i} key={i} {...c} />
          ))}
        </Grid>

        <Grid
          gridTemplateColumns={{
            base: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          rowGap="2rem"
          columnGap="2rem"
        >
          {deploy.map((c, i) => (
            <CIcon index={i} key={i} {...c} />
          ))}
        </Grid>

        <Grid
          gridTemplateColumns={{
            base: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          rowGap="2rem"
          columnGap="2rem"
        >
          {languages.map((c, i) => (
            <CIcon index={i} key={i} {...c} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

const CIcon = (props: { name: string; icon: any; index: number }) => {
  return (
    <Tilt>
      <Box
        transition={"all 200ms ease-in"}
        _hover={{ transform: `scale(0.9)` }}
      >
        <Box
          cursor={"pointer"}
          display={"flex"}
          bg={"black"}
          borderRadius="50%"
          m={0}
          backgroundImage={`radial-gradient(circle, #ffe459, #f7bc3a, #ec9325, #dc6a1b, #c93d1b)`}
          h={"72px"}
          w={"72px"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection="column"
          rowGap={".25rem"}
          position="relative"
          boxShadow={`0px 0px 24px -12px ${colorsConfig.focus}`}
          data-aos="fade-left"
          data-aos-delay={props.index.toString() + "00"}
        >
          <Icon h="30px" w="30px" color={colorsConfig.bg} as={props.icon} />

          <Text
            fontSize={{ base: "sm" }}
            position={"absolute"}
            px={4}
            borderRadius="sm"
            bg={colorsConfig.bg}
            color={colorsConfig.focus}
            fontFamily={fonts.subHeading}
            bottom={`-14px`}
            boxShadow={`1px 1px 1px #040014, -1px -1px 1px ${colorsConfig.sub}`}
          >
            {props.name}
          </Text>
        </Box>
      </Box>
    </Tilt>
  );
};

const techinicalSkills = ["S", "K", "I", "L", "L", "S"];

const frontend = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Vue",
    icon: SiVuetify,
  },
  {
    name: "Angular",
    icon: SiAngular,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
  },
  {
    name: "HTML",
    icon: SiHtml5,
  },
  { name: "CSS", icon: SiCss3 },
];

const languages = [
  {
    name: "JS",
    icon: SiJavascript,
  },
  {
    name: "TS",
    icon: SiTypescript,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Rust",
    icon: SiRust,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
];

const backend = [
  { name: "Node", icon: SiNodemon },
  { name: "Flask", icon: SiFlask },
  { name: "Spring", icon: SiSpringboot },
  { name: "Django", icon: SiDjango },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
];

const deploy = [
  {
    name: "Vim",
    icon: SiVim,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Bash",
    icon: SiLinux,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
  },
  {
    name: "Azure",
    icon: SiMicrosoftazure,
  },
];

export default TechinicalSkill;
