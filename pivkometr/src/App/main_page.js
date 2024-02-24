import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Selector from './selector';
import Input from './text_field';
import Summary from './summary';
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
        <Accordion sx={{ borderRadius: 5, margin: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ borderRadius: 5}}
        >
          Přidej položku
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item sx={{ width: 270 }}><Selector label="Vyber druh"/></Item>
                    <Item sx={{ width: 270 }}><Selector label="Vyber množství"/></Item>
                    <Item sx={{ width: 270 }}><Input label="Zadej název"/></Item>
                    <Item sx={{ width: 270 }}><Input label="Zadej cenu"/></Item>
                </Stack>
          </Box>
        </AccordionDetails>
        </Accordion>
        </Box>

        <Box>
        <Accordion sx={{ borderRadius: 3, margin: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ borderRadius: 3}}
        >
          Přehled položek
        </AccordionSummary>
          <AccordionDetails>
        <Summary/>
        </AccordionDetails>
        </Accordion>
        </Box>

        <Box sx={{ margin: 3 }} >
                <Item>Celková cena = 605Kč</Item>
        </Box>
        </ThemeProvider>
    </div>
  );
}