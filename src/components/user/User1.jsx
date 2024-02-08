//import { Outlet } from "react-router-dom"
import BusinessData from "../bussinessData/BusinessData"
import { observer } from "mobx-react"
import ServiceList from "../service/ServicesList"
import AddMeeting from "../meeting/AddMeeting"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MeetingList from "../meeting/MeetingList"

//import SelectService from "../meeting/SelectService"
//import UserBasicTabs from "./User"


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const User = (observer(() => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
            <BusinessData/>
       <Box sx={{ width: '100%' }} style={{ textAline:'left'}}> 
      <Box  class="sticky-top1" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Service List" {...a11yProps(0)} />
          <Tab label="Add Meeting" {...a11yProps(1)} />
        
        </Tabs>
        
      </Box>
      <div class="roll">
      <CustomTabPanel value={value} index={0}>

      <ServiceList/>
         
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      
      <AddMeeting/>
      </CustomTabPanel>
      
      </div>
    </Box>

  
        
    
        {/* <UserBasicTabs/> */}
        
      
             
        </>
    )
}))

export default User



/*
npm install react-router-dom localforage match-sorter sort-by
npm i mobx mobx-react
*/
