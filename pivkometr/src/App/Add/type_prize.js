import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function TypePrize() {
  return (
      <TextField 
        sx={{ width: 270 }}
        id="outlined-basic"
        label="Zadej cenu"
        variant="outlined" 
        size="small"
        color="secondary" focused/>
  );
}