import React from 'react';
import TextField from '@mui/material/TextField';

export default function TypePrice({ value, onChange }) {
  const handleChange = (event) => {
    let inputValue = event.target.value;

    // Remove non-numeric characters except for decimal point
    inputValue = inputValue.replace(/[^0-9.]/g, '');

    // If input is empty or starts with a non-numeric character, set value to empty string
    if (!inputValue || !/^[0-9]/.test(inputValue)) {
      inputValue = '';
    }

    // Check if input is a valid number
    if (/^[0-9]*\.?[0-9]*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <TextField
      sx={{ width: 270 }}
      label="Zadej cenu"
      variant="outlined"
      size="small"
      color="secondary"
      focused
      value={value}
      onChange={handleChange}
      type="text" // Use text type to handle custom input validation
      inputProps={{
        pattern: "[0-9]*", // Only allow numbers
        inputMode: "numeric", // Show numeric keyboard on mobile devices
      }}
    />
  );
}
