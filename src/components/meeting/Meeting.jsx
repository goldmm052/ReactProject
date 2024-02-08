import { observer } from "mobx-react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import MeetingStore from "../../Data/MeetingStore";

const Meeting=(observer(({meeting})=>{
 
const color=MeetingStore.colorMeeting(meeting.dateTime)

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
          <div><ListItemText className={`${color}`} primary={meeting.serviceName} /></div>
          
          <div><ListItemText className={`${color}`} primary={meeting.dateTime} /></div>
          <div><ListItemText className={`${color}`} primary={meeting.clientName} /></div>
          <div><ListItemText className={`${color}`} primary={meeting.clientPhone} /></div>
            <br />
        </ListItemButton>
      </ListItem>
      
    </List>  
          
       </>
     )
   }

 )
)
 
    
  export default Meeting
  