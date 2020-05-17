import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider, CSSReset, ColorModeProvider, Box, Flex } from '@chakra-ui/core'

import theme from '../theme'

const Layout = ({ children }) => <Flex flexDir="column" alignItems="center" minH="100vh">{children}</Flex>;

class App extends NextApp {
  render() {
    const { Component } = this.props
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Layout>
          <Component />
          </Layout>
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default App
