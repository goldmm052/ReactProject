import BusinessData from "../bussinessData/BusinessData"
import AdminBasicTabs from "./AdminBasicTabs"

import { observer } from "mobx-react"

const AdminHome = (observer(() => {

    return (
        <>

        <BusinessData />
        <AdminBasicTabs/>
       
        </>
    )
}))

export default AdminHome
