import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AccordAdd from './Add/accord_add';
import AccordSumm from './Summary/accord_summary';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Main/App.css';

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

  /* 
    Mnozstvi se zobrazi pouze u piva a nealka
    Moznost zmenit mnozstvi v prehledu
  */
 
export default function MainPage() {
  return (
      <div>
        <ThemeProvider theme={darkTheme}>

          <Box sx={{ borderRadius: 3, margin: 3 }} >
            <Item>UŽIJ SI PIVKO!</Item>
          </Box>

          <Box>
            <AccordAdd/>
          </Box>

          <Box>
            <AccordSumm/>
          </Box>
          
        </ThemeProvider>
    </div>
  );
}