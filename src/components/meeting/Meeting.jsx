import { observer } from "mobx-react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import MeetingStore from "../../Data/MeetingStore";
import moment  from "moment/moment";

const Meeting = (observer(({ meeting }) => {


  const colorMeeting = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
 if (meetingDate.getDate() === currentDate.getDate() &&
      meetingDate.getMonth() === currentDate.getMonth() &&
      meetingDate.getFullYear() === currentDate.getFullYear())
      return 'red';
    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
      return 'orange'
   
    return 'green';
  }
  const color = colorMeeting(meeting.dateTime)
  console.log(color,"color",meeting.dateTime)
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
            <div><ListItemText className={`${color}`} primary={`Date: ${moment(meeting.dateTime).format('MMMM Do YYYY, h:mm:ss a')}`}/></div>
            <div><ListItemText className={`${color}`} primary={`Client Details: ${meeting.clientName}`} /></div>
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
