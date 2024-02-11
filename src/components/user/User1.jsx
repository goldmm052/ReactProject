import BusinessData from "../bussinessData/BusinessData"
import { observer } from "mobx-react"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Outlet, useNavigate } from "react-router-dom";


const User = (observer(() => {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <>
      <BusinessData />
      <Box sx={{ width: '100%' }} style={{ textAline: 'left' }}>
        <Box class="sticky-top1" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Service List" value="service" />
            <Tab label="Add Meeting" value="meeting" />

          </Tabs>

        </Box>
        <div class="roll">
          <Outlet />

        </div>
      </Box>


    </>
  )
}))

export default User



