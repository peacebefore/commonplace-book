import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { QuotesPage } from './pages/quotes-page/quotes-page.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QuotesPage />
    </ThemeProvider>
  );
}

export default App;
