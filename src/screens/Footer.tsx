import { Divider, Flex, Text } from "@chakra-ui/react";
import { colorsConfig } from "../config/colorsConfig";
import { fonts } from "../config/fontConfig";

const Footer = () => {
  return (
    <Flex
      minH="20vh"
      py="3"
      columnGap={1}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="row"
      bg={colorsConfig.bg}
      data-aos="fade-down"
    >
      <Text
        fontFamily={fonts.heading}
        fontSize={{ base: "sm" }}
        color={colorsConfig.focus}
      >
        Designed & Build by @akashmadduru
      </Text>
    </Flex>
  );
};

export default Footer;
