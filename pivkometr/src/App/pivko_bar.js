import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';

// App bar of the application
function PivkoBar() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#455a64',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsBarRoundedIcon/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: '20px'
            }}
          >
            PivkoMetr
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default PivkoBar;