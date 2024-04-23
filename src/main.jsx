import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import SignUp from './Components/SignUp.jsx'
import SignIn from './Components/SignIn.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Users from './Components/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-nine-khaki.vercel.app/coffee')
  },
  {
    path: "addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
   
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
   
  },
  {
    path: "/users",
    element: <Users></Users>,
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
