import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import AdminPage from './components/admin/AdminPage.jsx'

// import AdminBasicTabs from './components/admin/AdminHome.jsx'
// import BusinessAdmin from './components/bussinessData/BusinessData.jsx'
import ServicesList from './components/service/ServicesList.jsx'
import MeetingList from './components/meeting/MeetingList.jsx'
import EditBusinessData from './components/bussinessData/EditBusinessData.jsx'
import AddService from './components/service/AddService.jsx'
import AddMeeting from './components/meeting/AddMeeting.jsx'
// import AdminHome from './components/admin/AdminHome.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "service",
        element: <ServicesList />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      },
      {
        path: "meeting",
        element: <AddMeeting />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      },
    ],
    errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>,


    children: [
      {
        path: "service",
        element: <ServicesList />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      },
      {
        path: 'meeting',
        element: <MeetingList />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      },
      {
        path: 'Edit_Business',
        element: <EditBusinessData />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      },
      {
        path: 'AddService',
        element: <AddService />,
        errorElement: <div><h1>Error Page</h1><h3>404 NOT FOUND</h3></div>
      }
    ]

  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
