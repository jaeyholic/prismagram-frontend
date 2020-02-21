import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Router from '../router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Fragment>
        <GlobalStyles />
        <Router isLoggedIn={false} />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
