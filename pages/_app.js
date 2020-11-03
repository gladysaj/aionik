import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../styles/globals.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5349DB',
    },
    secondary: {
      main: '#EE6F5E',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
