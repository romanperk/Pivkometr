import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useItems } from '../items_provider';
import RenderItems from './render_items';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

// The content of summary accordion
export default function Summary() {
  const { itemsList, handleUpdate } = useItems();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const calculateTotalPrice = () => {
    let total = 0;
  
    Object.values(itemsList).forEach((category) => {
      category.forEach((item) => {
        // Check if price is a valid number, if not, set it to 0
        if (!isNaN(item.price)) {
          total += item.price * item.quantity;
        }
      });
    });
  
    return total;
  };

  const handleQuantityChange = (itemId, newQuantity, category) => {
    if (newQuantity <= 0) {
      // Show delete button by setting quantity to 0
      const updatedItemsList = itemsList[category].map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: 0,
          };
        }
        return item;
      });
      handleUpdate({ ...itemsList, [category]: updatedItemsList });
    } else {
      const updatedItemsList = itemsList[category].map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      handleUpdate({ ...itemsList, [category]: updatedItemsList });
    }
  };

  const handleItemDelete = (itemId, category) => {
    const updatedItemsList = itemsList[category].filter((item) => item.id !== itemId);
    handleUpdate({ ...itemsList, [category]: updatedItemsList });
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="scrollable">
            <Tab label="Piva" value="1" />
            <Tab label="Drinky" value="2" />
            <Tab label="Panáky" value="3" />
            <Tab label="Jídlo" value="4" />
            <Tab label="Nealko" value="5" />
          </Tabs>
        </Box>
        {Object.keys(itemsList).map((categoryKey, index) => (
          <TabPanel value={(index + 1).toString()} key={index}>
            <RenderItems
              items={itemsList[categoryKey]}
              handleQuantityChange={(itemId, newQuantity) => handleQuantityChange(itemId, newQuantity, categoryKey)}
              handleItemDelete={(itemId) => handleItemDelete(itemId, categoryKey)}
            />
          </TabPanel>
        ))}
      </TabContext>
      <Item>Celková cena: {calculateTotalPrice()}Kč</Item>
    </Box>
  );
}
