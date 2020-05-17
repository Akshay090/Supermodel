import React from 'react';
import { Box, useColorMode, Flex } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Logo from '../logo';

const Navbar = (props) => {
  const { children } = props;
  const { colorMode } = useColorMode();
  const bg = { light: '#faeded', dark: 'gray.800' };

  return (
    <Header bg={bg[colorMode]} {...props}>
      <Flex
        size="100%"
        px={['3', '3', '6', '6']}
        align="center"
        justify="space-between"
      >
        <Logo />

        <Flex alignItems="center">{children}</Flex>
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

Navbar.PropType = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
