import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  pre, code, kbd {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  }
`

const Container = styled.div`
  overflow: auto;
`

const Body = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 70px 20px 20px;

  @media (max-width: 600px) {
    padding: 60px 10px 10px;
  }
`

const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Helmet
      title="react-texty"
      meta={[
        {
          name: 'description',
          content: 'A straight forward text component with tooltip support when it\'s truncated',
        },
        {
          name: 'keywords',
          content: 'react, component, text, ellipsis, tooltip',
        },
      ]}
    />
    <Header />
    <Body>{children}</Body>
  </Container>
)

export default Layout
