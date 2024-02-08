import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddService from '../service/AddService';
import ServiceList from '../service/ServicesList';
import MeetingList from '../meeting/MeetingList';
import EditBusinessData from '../bussinessData/EditBusinessData';
//import {Link,Outlet} from "react-router-dom";
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

export default function AdminBasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }} style={{ textAline:'left'}}> 
      <Box class ="sticky-top1" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Service List" {...a11yProps(0)} />
        
          <Tab label="Add Service" {...a11yProps(1)} />
          <Tab label="Meetings" {...a11yProps(2)} />
          <Tab label="Edit Business Details" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <div class="roll">
      <CustomTabPanel value={value} index={0}>
      
      <ServiceList/>
        </CustomTabPanel>
      
      <CustomTabPanel value={value} index={2}>
        <MeetingList/>
             
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      
      <AddService/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <EditBusinessData/>
      </CustomTabPanel>
           </div>
    </Box>
       
  );
}