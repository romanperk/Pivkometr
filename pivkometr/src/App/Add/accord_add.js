import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectType from './select_type';
import SelectSize from './select_size';
import TypeName from './type_name';
import TypePrize from './type_prize';
import Button from '@mui/material/Button';
import { useItems } from '../items_provider'; // Import useItems hook

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

export default function AccordAdd() {
  const { handleAdd } = useItems(); // Destructure handleAdd function from useItems

  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Function to handle adding an item
  const handleAddItem = () => {
    if (!selectedType || !name || !price) {
      alert('Please fill in all fields');
      return;
    }

    const newItem = {
      id: generateUniqueId(), // You'd need a function to generate unique IDs
      name: name,
      price: parseInt(price),
      quantity: 1
    };

    if (selectedSize) {
      newItem.size = selectedSize;
    }

    handleAdd(selectedType, newItem); // Call handleAdd function with type and new item
    setSelectedType('');
    setSelectedSize('');
    setName('');
    setPrice('');
  };

  // Function to generate a unique ID (you might need a more robust solution)
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <Accordion sx={{ borderRadius: 5, margin: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ borderRadius: 5 }}
      >
        Přidej položku
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ borderRadius: 3, p: 2, margin: 2 }}>
          <Stack spacing={2}>
            <Item sx={{ width: 270 }}>
              <SelectType
                value={selectedType} // Pass selectedType as value prop
                onChange={setSelectedType}
              />
            </Item>
            {selectedType === "beers" || selectedType === "nonalco" ? (
              <Item sx={{ width: 270 }}>
                <SelectSize
                  value={selectedSize} // Pass selectedSize as value prop
                  onChange={setSelectedSize}
                />
              </Item>
            ) : null}
            <Item sx={{ width: 270 }}>
              <TypeName
                value={name} // Pass name as value prop
                onChange={setName}
              />
            </Item>
            <Item sx={{ width: 270 }}>
              <TypePrize
                value={price} // Pass price as value prop
                onChange={setPrice}
              />
            </Item>
            <Button color="secondary" onClick={handleAddItem}>
              přidat
            </Button>
          </Stack>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
