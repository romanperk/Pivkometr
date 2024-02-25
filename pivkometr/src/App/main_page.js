import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AccordAdd from './Add/accord_add';
import AccordSumm from './Summary/accord_summary';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useUser } from '../App/Login/user_context'; 
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function MainPage() {
  const { user } = useUser();
  const navigate = useNavigate(); // Use navigate instead of history
  
  // Redirect to login if user is not logged in
  const handleLoginClick = () => {
    navigate('/login');  // Redirect to login page
  };

  if (!user) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        }}>
          <Typography sx={{ color: 'white', paddingBottom: 2 }} variant="h6" gutterBottom align='center'>
            Odemkni exkluzivní obsah!<br/>Krok 1: Vytvoř si účet.<br/>Krok 2: Neexistuje krok 2. <br/>Vítej!
          </Typography>
          <Button color="secondary" variant="contained" onClick={handleLoginClick}>
        Přihlásit
      </Button>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ borderRadius: 3, margin: 3 }}>
        <Item>UŽIJ SI PIVKO!</Item>
      </Box>
      <Box>
        <AccordAdd />
      </Box>
      <Box>
        <AccordSumm />
      </Box>
    </ThemeProvider>
  );
}
