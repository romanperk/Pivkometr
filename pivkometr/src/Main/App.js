import * as React from 'react';
import PivkoBar from '../App/pivko_bar';
import MainPage from '../App/main_page';
import { Box } from '@mui/material';
import { ItemsProvider } from '../App/items_provider';
import './App.css';

function App() {
  return (
   <div className='App-header'>
    <ItemsProvider>
      <PivkoBar/>
      <Box sx={{ borderRadius: 3, p: 2 }} >
        <MainPage/>
      </Box>
      </ItemsProvider>
   </div>
  );
};

export default App;