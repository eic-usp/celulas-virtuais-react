import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

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

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary'>Aumenta</Button>
      </ThemeProvider>

    </div>
  );
}

export default App;
