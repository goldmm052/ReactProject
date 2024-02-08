import { useState, useEffect } from "react"
import { observer } from "mobx-react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ServiceStore from '../../Data/ServiceStore';
import TextField from '@mui/material/TextField';
import { addAppointment } from "../../Data/server"

const AddMeeting = (observer(() => {
  const [selectedDateMeeting, setSelectedDateMeeting] = useState('')
  const [selectedServiceMeeting, setSelectedServiceMeeting] = useState('')
  const [newClientName, setnewClientName] = useState('')
  const [newClientPhone, setnewClientPhone] = useState('')
  const handleDateChange = (e) => {
    const dateObj = new Date(e.$d);
const dayOfWeek = dateObj.getDay();
 if(dayOfWeek===6) {
  alert("It is not possible to make an appointment for Saturday")
  DateTimePicker.autoFocus} 
  else
    setSelectedDateMeeting(e.$d);

  }
  const handleServiceMeetingChange = (e) => {
    setSelectedServiceMeeting(e.target.value);
    console.log(e.target.value)
  }
  const handlenewClientNameChange = (e) => {
    setnewClientName(e.target.value);
  }
  const handlenewClientPhoneChange = (e) => {
    setnewClientPhone(e.target.value);
  }
  const handleAddMeeting = () => {
    addAppointment(
      {
        serviceName: selectedServiceMeeting,
        serviceDescription: "aaa",
        servicePrice:500,
        dateTime: selectedDateMeeting,
        clientName: newClientName,
        clientPhone: newClientPhone,
        clientEmail: "aaa"
      }).then(x => {
        
    setSelectedDateMeeting('');
    setSelectedServiceMeeting('');
    setnewClientName('');
    setnewClientPhone('');
  })
  }
  return (
    <>
      <div class ="roll">
      <div class="container">
        <Box sx={{ minWidth: 260}}>
          <FormControl  fullWidth style={{ width: "260px" }}>
            <InputLabel id="select-label">Service</InputLabel>
          
            <Select class="flex1"  required
              style={{ width: "260px" }}
              value={selectedServiceMeeting}
              label="Select a Service"
              onChange={handleServiceMeetingChange}
              autoFocus
            >
             
              {ServiceStore.services.map((service, index) => {
                return (<MenuItem key={index} value={service.name}>{service.name}</MenuItem>)
              })}

            </Select>
               
        

        <LocalizationProvider dateAdapter={AdapterDayjs} class="flex2">
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker id="selectedDate1"
            name='selectedDate'
            lable='Select Date'
            value={selectedDateMeeting}
            onChange={handleDateChange} />
      </DemoContainer>
    </LocalizationProvider>
    
    <div style={{ width: '270px' }} component="form" noValidate sx={{ mt: 0.3 }}label="Client Details">
        <TextField
          margin="normal"
          required
          fullWidth
          id="ClientName"
          label="Client Name"
          name="clientName"
          type="text"
          value={newClientName} onChange={handlenewClientNameChange}
          

        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="ClientPhone"
          name="ClientPhone"
          label="ClientPhone"
          type="text"
           value={newClientPhone} onChange={handlenewClientPhoneChange}

        />
                
        
      </div>


        <div>
          <Button class="button" variant="contained" color="success" onClick={handleAddMeeting}>Add Meeting</Button>
        </div>
       
        </FormControl>
        </Box>
      </div>
      </div>
    </>
  )
}))



export default AddMeeting