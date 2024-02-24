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
import '../Main/App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));
 
  /* 
    Mnozstvi se zobrazi pouze u piva a nealka
    Dodelat dvoujazycnost
    Moznost zmenit mnozstvi v prehledu
  */
  export default function MainPage() {
  return (
      <div>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Item>UŽIJ SI PIVKO</Item>
        </Box>
        <Accordion sx={{ bgcolor: 'grey', borderRadius: 3, margin: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ borderRadius: 3}}
        >
          Přidej položku
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item sx={{ width: 270 }}><Selector label="Vyber druh"/></Item>
                    <Item sx={{ width: 270 }}><Selector label="Vyber množství"/></Item>
                    <Item sx={{ width: 270 }}><Input label="Zadej název"/></Item>
                    <Item sx={{ width: 270 }}><Input label="Zadej cenu"/></Item>
                </Stack>
          </Box>
        </AccordionDetails>
        </Accordion>

        <Accordion sx={{ bgcolor: 'grey', borderRadius: 3, margin: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ borderRadius: 3}}
        >
          Přehled položek
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item>PIVA</Item>
                    <Item>Plzeň 0,5l (55kč) 5x = 275Kč</Item>
                </Stack>
        </Box>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item>JÍDLO</Item>
                    <Item>Řízečky s kaší 180Kč 1x = 180Kč</Item>
                </Stack>
        </Box>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item>PANÁKY</Item>
                    <Item>Zelená 50Kč 2x = 100Kč</Item>
                </Stack>
        </Box>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Stack spacing={2}>
                    <Item>NEALKO</Item>
                    <Item>Malinovka 0,5l 50Kč 1x = 50Kč</Item>
                </Stack>
        </Box>
        </AccordionDetails>
        </Accordion>
        <Box sx={{ bgcolor: 'grey', borderRadius: 3, p: 2, margin: 2 }} >
                <Item>CELKOVÁ CENA = 605Kč</Item>
        </Box>
    </div>
  );
}

/*


    <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
*/