import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Summary from './summary';

export default function AccordSumm() {
  return (
    <Accordion sx={{ borderRadius: 3, margin: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ borderRadius: 3 }}
      >
        Přehled položek
      </AccordionSummary>
      <AccordionDetails>
        <Summary />
      </AccordionDetails>
    </Accordion>
  );
}
