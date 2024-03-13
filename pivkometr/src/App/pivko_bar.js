import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import { Button } from '@mui/material';
import { useUser } from './Login/user_context'; // Import the useUser hook

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

  const { logout } = useUser(); // Access the logout function from the useUser hook

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" >
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
                paddingLeft: '20px',
                flexGrow: 1
              }}
            >
              PivkoMetr
            </Typography>
            <Button size="small" color="secondary" variant="contained" onClick={handleLogout}>LOG OUT</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default PivkoBar;