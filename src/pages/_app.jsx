import { GlobalStyle, theme } from "../styles/global";
import { ThemeProvider } from "styled-components";
import StudentsProvider from "../contexts/students";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StudentsProvider>
          <Component {...pageProps} />
        </StudentsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
