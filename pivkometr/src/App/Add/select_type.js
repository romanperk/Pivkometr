import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectType({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 270 }} size="small" color="secondary" focused>
        <InputLabel>Vyber druh</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label="Vyber druh"
        >
          <MenuItem value="beers">Pivo</MenuItem>
          <MenuItem value="drinks">Drink</MenuItem>
          <MenuItem value="shots">Panák</MenuItem>
          <MenuItem value="food">Jídlo</MenuItem>
          <MenuItem value="nonalco">Nealko</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}