//import { useState } from "react"
//import Login from "./Login"
import AdminHome from "./AdminHome"
import dataStore from "../../Data/dataStore"
import { observer } from "mobx-react"
import SignIn from "./SignIn"
import { useEffect } from "react"


const AdminPage = (observer(() => {

    return (
        <>

            {dataStore.isLogin ? <AdminHome /> : <SignIn />}
        </>
    )
}))

export default AdminPage
