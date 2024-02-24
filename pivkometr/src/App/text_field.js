import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function Input({label}) {
  return (
      <TextField 
        sx={{ width: 270 }}
        id="outlined-basic"
        label={label}
        variant="outlined" 
        size="small"
        color="secondary" focused/>
  );
}