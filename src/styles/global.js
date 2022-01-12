import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
      cursor: pointer;
  }

  a {
      text-decoration: none
  }
`

export const theme = {
  colors: {
    primary: '#0070f3',
    title: '#f5f5f5'
  },
}