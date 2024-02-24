import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function TypeName() {
  return (
      <TextField 
        sx={{ width: 270 }}
        id="outlined-basic"
        label="Zadej název"
        variant="outlined" 
        size="small"
        color="secondary" focused/>
  );
}