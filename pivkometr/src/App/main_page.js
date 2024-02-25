import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AccordAdd from './Add/accord_add';
import AccordSumm from './Summary/accord_summary';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ItemsProvider } from './items_provider'; 
import '../Main/App.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

// Making the application visually dark
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Main page component
export default function MainPage() {
  return (
    <div>
      <ItemsProvider>
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
      </ItemsProvider>
    </div>
  );
}
