import {createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar'



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#75DEC9',
      main: '#1ABC9C',
      dark: '#087A64',
      contrastText: '#fff'
    }
  }

})

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar children={<h3>Hello EIC</h3>}></Navbar>
      
    </ThemeProvider>
  );
}