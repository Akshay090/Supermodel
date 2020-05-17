import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Stack,
  useTheme,
  useColorMode,
} from "@chakra-ui/core";

import HeroImage from "../../assets/HeroImage.svg"

const Hero = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "#faeded", dark: "gray.800" };
  return (
    <Box px={["4rem", "4rem", "2rem", "2rem"]} bg={bg[colorMode]} flex="1">
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
      >
        <Stack>
          <Heading
            fontSize="3rem"
            fontWeight="bold"
            textAlign="left"
            color={colorMode === "light" ? "black" : "white"}
            pt={["2rem", "2rem", "5rem", "5rem"]}
          >
            Community market place for{" "}
            <Box as="span" color={theme.colors.teal[500]}>
              deep learning projects{" "}
            </Box>
          </Heading>
          <Text
            fontSize="2xl"
            color={colorMode === "light" ? "black" : "white"}
          >
            One stop place to find and share deep learning projects. Get suport
            learn and grow as a community.
          </Text>
        </Stack>
        <Image
          height={["15rem", "15rem", "28rem", "28rem"]}
          max-width="48rem"
          src="https://res.cloudinary.com/supermodel/image/upload/v1589546581/Supermodel_website_assets/hero_img_yxyeru.svg"
        />
      </Flex>
    </Box>
  );
};

export default Hero;
