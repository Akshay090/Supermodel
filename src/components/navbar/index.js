import React from "react";
import {
  Box,
  useColorMode,
  Switch,
  Flex,
  Image,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/core";
import Logo from "../logo";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "#faeded", dark: "gray.800" };

  return (
    <Header bg={bg[colorMode]} {...props}>
      <Flex size="100%" px="6" align="center" justify="space-between">
        <Logo />

        <Flex alignItems="center">
          <Button variantColor="green" rounded="2rem">
            Get Started
          </Button>

          <ThemeSwitch
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
            color={colorMode === "light" ? "black" : "white"}
          />
        </Flex>
      </Flex>
    </Header>
  );
};

export const Header = (props) => (
  <Box
    as="header"
    // borderBottomWidth="1px"
    width="full"
    height="4rem"
    {...props}
  />
);

const ThemeSwitch = (props) => (
  <IconButton variant="ghost" ml="2" fontSize="20px" {...props} />
);

export default Navbar;
