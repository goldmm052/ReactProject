import { observer } from "mobx-react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
const Service = (observer(({ service }) => {

  return (
    <>

      <List
        sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={service.name} />
            <ListItemText primary={`Price: ${service.price} shekels`} />
            <ListItemText primary={`Duration: ${service.duration} minutes`} />
            <br />
          </ListItemButton>
        </ListItem>

      </List>
    </>
  )
}
  //}

)
)


export default Service
