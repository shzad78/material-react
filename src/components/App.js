import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import Header from '../components/Header'


function App() {
  return (
    <ThemeProvider>
    <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
