import { useState } from "react"
import { observer } from "mobx-react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { addService } from "../../Data/server"

const AddService = (observer(() => {
  const [newServiceForm, setNewServiceForm] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    duration: ''
  })
  const handleSubmitNewServiceForm = (event) => {
    event.preventDefault();
    addService(newServiceForm).then(x => {
      setNewServiceForm({
        id: '',
        name: '',
        description: '',
        price: '',
        duration: ''
      });
    });

  }
  const handleChangeNewServiceForm = (event) => {
    const { name, value } = event.target;
    setNewServiceForm({ ...newServiceForm, [name]: value });
  }
  return (
    <>
      <form onSubmit={handleSubmitNewServiceForm}>
        <Box style={{ width: '350px' }} noValidate sx={{ mt: 0.3 }}>
          <TextField
            margin="normal"
            required="true"
            fullWidth
            id="ServiceName"
            label="Service Name"
            name="name"
            type="text"
            value={newServiceForm.name} onChange={handleChangeNewServiceForm}
            autoFocus
          />
          <TextField
            margin="normal"
            required="true"
            fullWidth
            name="price"
            label="price"
            type="text"
            id="price"
            value={newServiceForm.price} onChange={handleChangeNewServiceForm}
          />
          <TextField
            margin="normal"
            required="true"
            fullWidth
            id="DurationTreat"
            label="Duration Treat"
            name="duration"
            type="text"
            value={newServiceForm.duration} onChange={handleChangeNewServiceForm}
          />
          <Button type='submit' class="button" color='success' variant="contained" >Add Service</Button>
        </Box>
      </form>

    </>
  )
}))
export default AddService


