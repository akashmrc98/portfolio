import { gsap } from "gsap";
import { Link } from "react-scroll";
import { fonts } from "../config/fontConfig";
import { ScrollTrigger } from "react-gsap";
import { useEffect, useState } from "react";
import { colorsConfig } from "../config/colorsConfig";
import { Box, Button, Flex, Image, Icon, theme } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Box>
      <SmallDevices />
      <MidDevices />
    </Box>
  );
};

const SmallDevices = () => {
  const [colorChange, setColorchange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar", {
      x: 100,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
      },
      x: 0,
      opacity: 1,
      reversed: false,
    });

    gsap.from(".logo", {
      x: -100,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".logo", {
      scrollTrigger: {
        trigger: ".logo",
      },
      x: 0,
      duration: 1,
      opacity: 1,
      reversed: false,
    });
  }, []);
  return (
    <Box display={{ base: "block", lg: "none" }} position="relative">
      <Box
        display={"flex"}
        position="fixed"
        justifyContent="space-between"
        alignItems={"center"}
        minH={{ base: "10vh" }}
        py={2}
        boxShadow={colorChange ? "2xl" : "none"}
        transition="all 200ms ease-in"
        width={"100%"}
        bg={colorsConfig.bg}
        zIndex={19999}
      >
        <Image
          mx={4}
          borderRadius={"100%"}
          boxShadow={`0px 0px 4px ${colorsConfig.sub}`}
          maxH="12"
          p={0.5}
          className="logo"
          cursor={"pointer"}
          src={Logo}
        />
        <Flex onClick={() => setIsOpen(!isOpen)} cursor={"pointer"} mx={8}>
          <Icon
            transition={"all 100ms ease-in"}
            height={"12"}
            color={colorsConfig.sub}
            width="12"
            as={isOpen ? AiOutlineCloseCircle : AiOutlineMenu}
          />
        </Flex>
      </Box>

      <Box
        bg={colorsConfig.bg}
        width={"100%"}
        zIndex={9999}
        position={"fixed"}
        overflow="hidden"
        display={isOpen ? "block" : "none"}
      >
        <Flex
          width={"100%"}
          height="100vh"
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
          mx={4}
          rowGap="3rem"
        >
          <MCustomButton
            onClick={() => setIsOpen(!isOpen)}
            change={colorChange}
            route="home"
            title={"Home"}
          />
          <MCustomButton
            onClick={() => setIsOpen(!isOpen)}
            change={colorChange}
            route="about"
            title={"About"}
          />
          <MCustomButton
            onClick={() => setIsOpen(!isOpen)}
            change={colorChange}
            route="skills"
            title={"Skills"}
          />
          <MCustomButton
            onClick={() => setIsOpen(!isOpen)}
            change={colorChange}
            route="work"
            title={"Work"}
          />
          <MCustomButton
            change={colorChange}
            route="contact"
            title={"Contact"}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

const MidDevices = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
      },
      y: 0,
      opacity: 1,
      reversed: false,
    });

    gsap.from(".logo", {
      x: -100,
      opacity: 0,
      reversed: false,
    });
    gsap.to(".logo", {
      scrollTrigger: {
        trigger: ".logo",
      },
      x: 0,
      duration: 1,
      opacity: 1,
      reversed: false,
    });
  }, []);
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      justifyContent="space-between"
      alignItems={"center"}
      minH={{ base: "10vh" }}
      bg={colorChange ? colorsConfig.bg : "transparent"}
      py={2}
      boxShadow={colorChange ? "2xl" : "none"}
      position="fixed"
      width={"100%"}
      zIndex={1999}
      transition="all 200ms ease-in"
    >
      <Image
        mx={4}
        borderRadius={"100%"}
        boxShadow={`0px 0px 4px ${colorsConfig.sub}`}
        maxH="12"
        p={0.5}
        className="logo"
        src={Logo}
      />
      <Flex mx={4} columnGap="1rem">
        <CustomButton change={colorChange} route="home" title={"Home"} />
        <CustomButton change={colorChange} route="about" title={"About"} />
        <CustomButton change={colorChange} route="skills" title={"Skills"} />
        <CustomButton change={colorChange} route="work" title={"Work"} />
        <CustomButton change={colorChange} route="contact" title={"Contact"} />
      </Flex>
    </Box>
  );
};

const CustomButton = (props: any) => {
  return (
    <Link spy={true} to={props.route} smooth={true}>
      <Button
        borderRadius={"3xl"}
        className="navbar"
        border="none"
        fontFamily={fonts.heading}
        minW="28"
        backgroundImage={`radial-gradient(circle, #f273e6, #b953c3, #8334a0, #4e177d, #13005a)`}
        boxShadow={`0px 0px 3px ${colorsConfig.sub}`}
        variant="outline"
        _hover={{
          bg: colorsConfig.sub,
        }}
      >
        {props.title}{" "}
      </Button>
    </Link>
  );
};

const MCustomButton = (props: any) => {
  return (
    <Link spy={true} to={props.route} smooth={true}>
      <Button
        onClick={props.onClick}
        borderRadius={"3xl"}
        className="navbar"
        border="none"
        fontFamily={fonts.heading}
        minW="28"
        backgroundImage={`radial-gradient(circle, #f273e6, #b953c3, #8334a0, #4e177d, #13005a)`}
        boxShadow={`0px 0px 3px ${colorsConfig.sub}`}
        variant="outline"
        _hover={{
          bg: colorsConfig.sub,
        }}
      >
        {props.title}{" "}
      </Button>
    </Link>
  );
};
