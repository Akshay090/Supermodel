import React from 'react';
import { withTheme } from 'emotion-theming';
import { Flex, Button, useColorMode, IconButton } from '@chakra-ui/core';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex flexDir="column" flex="1">
      <Navbar>
        <Button variantColor="green" rounded="2rem">
          Get Started
        </Button>
        <ThemeSwitch
          aria-label={`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          color={colorMode === 'light' ? 'black' : 'white'}
        />
      </Navbar>
      <Hero />
    </Flex>
  );
};

const ThemeSwitch = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <IconButton variant="ghost" ml="2" fontSize="20px" {...props} />
);

export default withTheme(Index);
