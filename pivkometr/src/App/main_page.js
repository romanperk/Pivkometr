import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import '../Main/App.css';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function MainPage() {
  return (
      <Box sx={{ flexGrow: 1  }} paddingTop="40px" width="80%">
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Box sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'grey'
              }}>
                <Stack spacing={2}>
                    <Item>Vyber druh --- vypln nazev --- cena --- mnozstvi --- total cena</Item>
                    <Item>Vyber druh --- vypln nazev --- cena --- mnozstvi --- total cena</Item>
                    <Item>Vyber druh --- vypln nazev --- cena --- mnozstvi --- total cena</Item>
                </Stack>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'grey'
                }}>
                <Stack spacing={2}>
                    <Item>CELKOVA CENA</Item>
                </Stack>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}