import { Flex, Heading, Image } from "@chakra-ui/core";

const Hero = () => {
  return (
    <Flex flexDirection="row" alignItems="center" justifyContent="center">
      <Heading fontSize="3xl" fontWeight="bold" textAlign="left">
        community market place for deep learning projects
      </Heading>
      <Image
        height="28rem"
        width="28rem"
        src="https://res.cloudinary.com/supermodel/image/upload/v1589546581/hero_img_yxyeru.svg"
      />
    </Flex>
  );
};

export default Hero;
