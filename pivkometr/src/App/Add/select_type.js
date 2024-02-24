import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectType({label}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ width: 270 }} size="small" color="secondary" focused>
        <InputLabel id="demo-simple-select-standard-label">Vyber druh</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Vyber druh"
        >
          <MenuItem value={0}>Pivo</MenuItem>
          <MenuItem value={1}>Drink</MenuItem>
          <MenuItem value={2}>Panák</MenuItem>
          <MenuItem value={3}>Jídlo</MenuItem>
          <MenuItem value={4}>Nealko</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}