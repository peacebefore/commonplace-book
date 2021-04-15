import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Home } from './pages/home-page/home-page.component';
import { NavbarLight } from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarLight />
      <Home />
    </ThemeProvider>
  );
}

export default App;
