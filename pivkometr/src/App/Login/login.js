import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './user_context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Login = () => {
  const { login } = useUser(); // Destructure the login function from useUser
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically make an API call to authenticate the user
    // For demo purposes, let's assume the login is successful
    const user = { email, loggedIn: true };
    login(user); // Use the login function from useUser to set the user
    navigate('/');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
        <Typography sx={{ color: 'white' }} variant="h4" gutterBottom>
          Přihlášení
        </Typography>
        <TextField
          sx={{ width: 280 }}
          color="secondary"
          focused
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          sx={{ width: 280, paddingBottom: 1 }}
          color="secondary"
          focused
          label="Heslo"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button color="secondary" variant="contained" onClick={handleLogin}>
          Přihlásit
        </Button>
        <Typography sx={{ color: 'white' }} variant="body2" mt={2}>
          Nemáš účet? <Link style={{ color: 'white' }} to="/register">Registruj se</Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
