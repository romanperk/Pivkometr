import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const items = [
  {
    beers: [
        { id: "d1bce180", name: "Plzeň", size: "0,5l", price: 50, quantity: 1 },
        { id: "d1bce48c", name: "Kozel", size: "0,3l", price: 35, quantity: 2 }
    ],
    drinks: [
        { id: "d1bce48f", name: "Rumkola", price: 150, quantity: 1 },
    ],
    shots: [
        { id: "d1bce5d6", name: "Zelená", price: 50, quantity: 2 },
    ],
    food: [
        { id: "d1bce70c", name: "Řízečky s kaší", price: 180, quantity: 1 },
    ],
    nonalco: [
        { id: "d1bce82e", name: "Malinovka", size: "0,5l", price: 50, quantity: 1 },
    ],
  },
];

const renderItems = (items, category) => {
  return items[0][category].map((item, index) => (
    <div key={index}>
      {item.name} {item.size ? `${item.size}` : ''} ({item.price}Kč) <b>{item.quantity}x</b> = {item.price * item.quantity}Kč
      <br />
    </div>
  ));
};

const calculateTotalPrice = () => {
  let total = 0;
  items[0].beers.forEach((beer) => {
    total += beer.price * beer.quantity;
  });
  items[0].drinks.forEach((drink) => {
    total += drink.price * drink.quantity;
  });
  items[0].shots.forEach((shot) => {
    total += shot.price * shot.quantity;
  });
  items[0].food.forEach((food) => {
    total += food.price * food.quantity;
  });
  items[0].nonalco.forEach((nonalco) => {
    total += nonalco.price * nonalco.quantity;
  });
  return total;
};

const totalAllItems = calculateTotalPrice();
console.log(totalAllItems);

export default function Summary() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="scrollable">
            <Tab label="Piva" value="1" />
            <Tab label="Drinky" value="2" />
            <Tab label="Panáky" value="3" />
            <Tab label="Jídlo" value="4" />
            <Tab label="Nealko" value="5" />
          </Tabs>
        </Box>
        <TabPanel value="1">{renderItems(items, 'beers')}</TabPanel>
        <TabPanel value="2">{renderItems(items, 'drinks')}</TabPanel>
        <TabPanel value="3">{renderItems(items, 'shots')}</TabPanel>
        <TabPanel value="4">{renderItems(items, 'food')}</TabPanel>
        <TabPanel value="5">{renderItems(items, 'nonalco')}</TabPanel>
      </TabContext>
      <Item>Celková cena: {totalAllItems}Kč</Item>
    </Box>
  );
}
