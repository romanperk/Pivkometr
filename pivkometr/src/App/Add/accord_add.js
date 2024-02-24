import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectType from './select_type';
import SelectSize from './select_size';
import TypeName from './type_name';
import TypePrize from './type_prize';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center'
  }));

export default function AccordAdd() {
    return (
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
                                <Item sx={{ width: 270 }}><SelectType/></Item>
                                <Item sx={{ width: 270 }}><SelectSize/></Item>
                                <Item sx={{ width: 270 }}><TypeName/></Item>
                                <Item sx={{ width: 270 }}><TypePrize/></Item>
                                <Button color="secondary">přidat</Button>
                            </Stack>
                    </Box>
                    </AccordionDetails>
                </Accordion>
    );
}