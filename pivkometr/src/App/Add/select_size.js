import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSize({label}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ width: 270 }} size="small" color="secondary" focused>
        <InputLabel id="demo-simple-select-standard-label">Vyber množství</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Vyber množství"
        >
          <MenuItem value={0}>0,3l</MenuItem>
          <MenuItem value={1}>0,4l</MenuItem>
          <MenuItem value={1}>0,5l</MenuItem>
          <MenuItem value={2}>Pint</MenuItem>
          <MenuItem value={3}>0,7l</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}