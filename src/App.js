import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { Home } from './pages/home/home.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
