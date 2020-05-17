import React from "react";
import { withTheme } from "emotion-theming";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Flex } from "@chakra-ui/core";

const Index = () => (
  <Flex flexDir="column" flex="1">
    <Navbar />
    <Hero />
  </Flex>
);

export default withTheme(Index);
