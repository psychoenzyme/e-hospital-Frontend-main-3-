import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Layout(props) {


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {props.children} 
        </Container>
    </ThemeProvider>
  )
}
export default Layout;