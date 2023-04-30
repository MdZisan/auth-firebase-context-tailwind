import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainLayout/Main.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import Profile from './Components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      ,{
        path:'/login'
        ,element:<Login></Login>
      },
      {
        path:'/register'
        ,element:<Register></Register>
      },
      {
        path:'profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path:'orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

<RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
