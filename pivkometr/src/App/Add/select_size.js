import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export default function SelectSize({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 270 }} size="small" color="secondary" focused>
        <InputLabel>Vyber množství</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label="Vyber množství"
        >
          <MenuItem value="0,3l">0,3l</MenuItem>
          <MenuItem value="0,4l">0,4l</MenuItem>
          <MenuItem value="0,5l">0,5l</MenuItem>
          <MenuItem value="Pint">Pint</MenuItem>
          <MenuItem value="0,7l">0,7l</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
