import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Outlet, useNavigate } from 'react-router-dom';


export default function AdminBasicTabs() {
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (

    <Box sx={{ width: '100%' }} style={{ textAline: 'left' }}>
      <Box class="sticky-top1" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Service List" value="service" />
          <Tab label="Add Service" value="AddService" />
          <Tab label="Meetings" value="meeting" />
          <Tab label="Edit Business Details" value="Edit_Business" />
        </Tabs>
      </Box>
      <div class="roll">

        <Outlet />

      </div>
    </Box>

  );
}