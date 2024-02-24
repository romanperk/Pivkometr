import * as React from 'react';
import PivkoBar from '../App/pivko_bar';
import MainPage from '../App/main_page';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
   <div className='App-header'>
      <PivkoBar/>
      <Box sx={{ borderRadius: 3, p: 2 }} >
        <MainPage/>
        </Box>
   </div>
  );
};

export default App;