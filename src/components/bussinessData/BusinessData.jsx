import { useEffect } from "react"
import { observer } from "mobx-react"
import Store from "../../Data/Store"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { getBusinessData } from "../../Data/server";
import { height } from "@mui/system";

const BusinessData = (observer(() => {
  useEffect(() => {

       getBusinessData();
  }, []);

  return (
    <>
      
      <Box class="sticky-top" sx={{ width: '100%', maxWidth: 1000 }}>
        <Box style={{alignItems:"center",backgroundColor:'white',width:'180px',height:'180px'}}>
        <img style ={{width:'170px',height:'175px'}}src="/src\assets\logo.webp"/>
        </Box>
        <Box style={{marginLeft:'100px'}}>
        <Typography variant="h2" gutterBottom>
          {Store.business.shem}
        </Typography>
        <Typography variant="h3" gutterBottom>
          {Store.business.description}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {Store.business.address}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {Store.business.phone}
        </Typography>
        </Box>
      </Box>

    </>
  )
}))

export default BusinessData


