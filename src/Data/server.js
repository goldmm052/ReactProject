import axios from "axios";
import dataStore from "./dataStore";
import ServiceStore from "./ServiceStore";
import Store from "./Store"
import MeetingStore from "./MeetingStore";
import AdminHome from "../components/admin/AdminHome";
import SignIn from "../components/admin/SignIn";

export async function CheckLogin(name, password) {
    try {
        console.log(name,password);
        
        const isValid = await axios.post("http://localhost:8787/login", {"name":name,"password":password});
        if (isValid.status === 200) {
            dataStore.setIsLogin(true);
               }
               
         }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
           password=''; 
        }
        else {
            alert('server CheckLogin failed');
        }
    }
}

export async function addService(service)
{
    try{
    const res = await axios.post("http://localhost:8787/service", service);
        if (res.status === 200) {
           ServiceStore.addService(service);
           alert ("The service has been added successfully")
            return 'success'
            
        }
        else
    return 'failed'   
    }
    catch (e) {
        
            if (e.response.status===400)
               alert("the service is already exist");
        
      
        else {
            alert('server  addService failed');
        }
    }
}
export async function getServices()
{
    try{
    const services = await axios.get("http://localhost:8787/services");
        
            ServiceStore.setService(services.data);
           
    }
    catch (e) {
        if (e.response) {
          //  alert(e.response);
        }
        else {
            alert('server getServices failed');
        }
    }
}

export async function addAppointment(meeting)
{
    try{
       
    const res = await axios.post("http://localhost:8787/appointment", meeting);
        if (res.status === 200) {
            
           MeetingStore.addMeeting(meeting);
          alert ("The meeting has been added successfully")
            return 'success'
            
        }
       
       
    }
    catch (e) {
        console.log(e.response.status)
        if (e.response.status===400)
               alert("the meeting is exist");
        
        else {
            alert('server addAppointment failed');
        }
    }
}
export async function getAppointments()
{
    try{
    const meetings = await axios.get("http://localhost:8787/appointments");
        
            MeetingStore.setMeeting(meetings.data);
            console.log(meetings.data)
          
    }
    catch (e) {
        if (e.response) {
          //  alert(e.response);
        }
        else {
            alert('server getAppointments failed');
        }
    }
}
    export async function getBusinessData()
{
    try{
    const business = await axios.get("http://localhost:8787/businessData");
          
            Store.setBusinessData(business.data);
              
    }
    catch (e) {
        if (e.response) {
                 }
        else {
                alert('server getBusinessDta failed');
        }
    }
}
export async function editBusiness(business)
{
    try{
       
    const res = await axios.put("http://localhost:8787/businessData", business);
       console.log(res)
        if (res.status === 200) {
           Store.editBusiness(business.data);
            return 'success'
            
        }
        else 
    return 'failed'   
    }
    catch (e) {
        if (e.response) {
            alert(e.respone);
        }
        else {
            alert('server failed');
        }
    }
}
