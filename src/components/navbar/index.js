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

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };

  return (
    <Header bg={bg[colorMode]} {...props}>
      <Flex size="100%" px="6" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Image
            height="3rem"
            width="3rem"
            src="https://res.cloudinary.com/supermodel/image/upload/v1589546614/Group_6_fl94zk.svg"
          />
          <Text
            display="inline"
            fontWeight="bold"
            ml=".5rem"
            fontSize="2rem"
            fontStyle="italic"
            color={colorMode === 'light' ? "black" : "white"}
          >
            Supermodel
          </Text>
        </Flex>

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
            color={colorMode === 'light' ? "black" : "white"}
          />
        </Flex>
      </Flex>
    </Header>
  );
};

export const Header = (props) => (
  <Box
    as="header"
    borderBottomWidth="1px"
    width="full"
    height="4rem"
    {...props}
  />
);

const ThemeSwitch = (props) => (
  <IconButton
    variant="ghost"
    ml="2"
    fontSize="20px"
    {...props}
  />
);

export default Navbar;
