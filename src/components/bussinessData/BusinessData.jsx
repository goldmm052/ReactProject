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

const BusinessData = (observer(() => {
  useEffect(() => {

    if (!Store.business) {
      getBusinessData();
    }

    getBusinessData();

  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
      />

      <Box class="sticky-top" sx={{ width: '100%', maxWidth: 1000 }}>
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

    </>
  )
}))

export default BusinessData


