import * as React from 'react';
import PivkoBar from '../App/pivko_bar';
import { Box } from '@mui/material';
import { ItemsProvider } from '../App/items_provider';
import { UserProvider } from '../App/Login/user_context';
import AppRoutes from './Routes';
import './App.css';

// The whole app
function App() {
  return (
   <div className='App-header'>
    <UserProvider>
    <ItemsProvider>
      <PivkoBar/>
      <Box sx={{ borderRadius: 3, p: 2 }} >
        <AppRoutes/>
      </Box>
      </ItemsProvider>
      </UserProvider>
   </div>
  );
};

export default App;