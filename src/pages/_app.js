import { GlobalStyle, theme } from '../styles/global'
import { ThemeProvider } from 'styled-components'

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps } />
      </ThemeProvider>
    </>
  )
}

export default App;