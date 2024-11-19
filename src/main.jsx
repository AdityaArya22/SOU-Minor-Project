import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Symptoms from './Components/Symptoms/Symptoms.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'
import Results from './Components/Results.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import store from "./store.js"
import { Provider } from 'react-redux'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='symptoms' element={<Symptoms/>}/>
    <Route path='appointment' element={<Appointment/>}/>
    <Route path='result' element={<Results/>}/>
  </Route>
  )
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
      
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)