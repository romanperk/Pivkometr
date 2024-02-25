import React from 'react';
import TextField from '@mui/material/TextField';

export default function TypeName({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      sx={{ width: 270 }}
      label="Zadej název"
      variant="outlined"
      size="small"
      color="secondary"
      focused
      value={value}
      onChange={handleChange}
    />
  );
}
