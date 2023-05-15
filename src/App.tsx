import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar';
import { DialogSearchProvider } from './components/DialogSearch/DialogSearchProvider';
import useIsSmallWindow from './components/hooks/useIsSmallWindow';
import Footer from './components/Footer';

function Main() {
  const isSmallWindow = useIsSmallWindow();
  return (
    <BrowserRouter>
      <DialogSearchProvider>
        <Navbar/>
        <AppRouter/>
        {isSmallWindow && <Footer/>}
      </DialogSearchProvider>
  </BrowserRouter>
  )
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Main/>
    </MuiThemeProvider>
  );
}

export default App;
