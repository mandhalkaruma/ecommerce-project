import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Register from './components/Register'
import Login from './components/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Routes, Route, useLocation} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import { Footer } from './components/Footer'
import AddProduct from './components/Admin/AddProduct'
import Home from './components/Home'

const App = () => {

  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");
  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />

     {!hideNavbar && <Navbar />}
     <Routes>

      {/* public routes */}
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>

      {/* Admin route */}
      <Route 
        path='/admin/dashboard'
        element={
          <ProtectedRoute role="admin">
              <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route 
        path='/admin/users'
        element={
          <ProtectedRoute role="admin">
              <Users />
          </ProtectedRoute>
        }
      />

      <Route 
        path='/admin/products'
        element={
          <ProtectedRoute role="admin">
            <AddProduct />
          </ProtectedRoute>
        }
      />

     </Routes>
     {!hideNavbar && <Footer />}
    </>
  )
}

export default App
