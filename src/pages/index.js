import React from "react";
import { withTheme } from "emotion-theming";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Box } from "@chakra-ui/core";

const Index = () => (
  <Box>
    <Navbar />
    <Hero />
  </Box>
);

export default withTheme(Index);
