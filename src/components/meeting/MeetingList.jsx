import MeetingStore from "../../Data/MeetingStore"
import Meeting from "./Meeting"
import { useEffect } from "react";
import { observer } from "mobx-react"
import * as React from 'react';
import { getAppointments } from "../../Data/server"

const MeetingList=(observer(()=>{
  useEffect(() => {
    if (!MeetingStore.meetings.length) {
      getAppointments();
    }
  }, []);
  
    return (
      <>

       
       {
       
       MeetingStore.meetings.map((meeting,index)=>{
         return (<><div key={index} > <Meeting meeting={meeting}/></div></>)
       })}
        
      </>
    )
  }))
  
  export default MeetingList
  