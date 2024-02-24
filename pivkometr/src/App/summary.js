import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Summary() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleChange} textColor="secondary" indicatorColor="secondary">
            <Tab label="Piva" value="1" />
            <Tab label="Jídlo" value="2" />
            <Tab label="Panáky" value="3" />
            <Tab label="Nealko" value="4" />
          </Tabs>
        </Box>
        <TabPanel value="1">Plzeň 0,5l (55kč) 5x = 275Kč</TabPanel>
        <TabPanel value="2">Řízečky s kaší 180Kč 1x = 180Kč</TabPanel>
        <TabPanel value="3">Zelená 50Kč 2x = 100Kč</TabPanel>
        <TabPanel value="4">Malinovka 0,5l 50Kč 1x = 50Kč</TabPanel>
      </TabContext>
    </Box>
  );
}