import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { NavbarLight } from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarLight />
    </ThemeProvider>
  );
}

export default App;
