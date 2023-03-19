'use client'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${(props) => props.theme.font.family};
  }
  
  body {
    background-color: #EFF5FF;
    overflow: hidden;
  }

  #root{
    margin: 0 auto;
  }
`
