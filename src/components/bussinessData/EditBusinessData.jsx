import { useState, useEffect } from "react"
import { observer } from "mobx-react"
import Button from '@mui/material/Button';
import Store from "../../Data/Store"
import { editBusiness } from "../../Data/server"
import { getBusinessData } from "../../Data/server"


const EditBusinessData = (observer(() => {
  const [formEditBusinessData, setFormEditBusinessData] = useState({
    shem: Store.business.shem,
    address: Store.business.address,
    phone: Store.business.phone,
    owner: Store.business.owner,
    logo: Store.business.logo,
    description: Store.business.description,

  })
  useEffect(() => {
    if (!Store.business) {

      getBusinessData();
    }
  }, []);

  const handleSubmitBusinessData = (event) => {
    event.preventDefault();
    editBusiness(formEditBusinessData);
    setFormEditBusinessData({
      shem: '',
      address: '',
      phone: '',
      owner: '',
      logo: '',
      description: '',
    })
  }
  const handleChangeBusinessData = (event) => {
    const { name, value } = event.target;
    setFormEditBusinessData({ ...formEditBusinessData, [name]: value });
  }
  return (
    <>

      <form class="roll" onSubmit={handleSubmitBusinessData} style={{ margin: '50px', display: "flex", flexDirection: "column" }}>

        <div>
          <lable class="width">Business Name: </lable>
          <input type='text' name='shem' placeholder={Store.business.shem} value={formEditBusinessData.shem} onChange={handleChangeBusinessData} /><br /><br />
        </div>
        <div>
          <lable class="width">Businees Adderss:</lable>
          <input type='text' name='address' placeholder={Store.business.address} value={formEditBusinessData.address} onChange={handleChangeBusinessData} /><br /><br />
        </div>
        <div>
          <lable class="width">Business Phone:  </lable>
          <input type='text' name='phone' placeholder={Store.business.phone} value={formEditBusinessData.phone} onChange={handleChangeBusinessData} /><br /><br />
        </div>
        <div>
          <lable class="width">Business Discription:</lable>
          <input type='text' name='description' placeholder={Store.business.description} value={formEditBusinessData.description} onChange={handleChangeBusinessData} /><br /><br />
        </div>
        <Button type='submit' class="button" variant="contained" color="success" >Save Changes</Button>
      </form>

    </>
  )
}))

export default EditBusinessData
