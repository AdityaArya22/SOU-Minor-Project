import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Symptoms from './Components/Symptoms/Symptoms.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='symptoms' element={<Symptoms/>}/>
    <Route path='appointment' element={<Appointment/>}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
