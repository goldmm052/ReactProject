
import { useState, useEffect } from "react"
import ServiceStore from "../../Data/ServiceStore"
import { observer } from "mobx-react"
import * as React from 'react';
import Service from "./Service";
import { getServices } from "../../Data/server"

const ServicesList = (observer(() => {
  useEffect(() => {
    if (!ServiceStore.services.length) {
      getServices();
    }
  }, []);
  return (
    <>
      <br />
      <div>

        {ServiceStore.services.map((service, index) => {
          return (<><div key={index} ><Service service={service} /></div></>)
        })}
      </div>

    </>
  )
}
)
)

export default ServicesList
