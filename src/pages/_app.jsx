import React from 'react';
import NextApp from 'next/app';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Flex,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

import theme from '../theme';

const Layout = ({ children }) => (
  <Flex flexDir="column" alignItems="center" minH="100vh">
    {children}
  </Flex>
);

class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Layout>
            <Component />
          </Layout>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
