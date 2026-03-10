import React from 'react'
import Navbar from './components/Navbar'
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
import CategoryProduct from './components/pages/CategoryProduct'
import Contact from './components/Contact'
import SingleProduct from './components/pages/SingleProduct'
import Cart from './components/pages/Cart'
import OrderSummary from './components/pages/OrderSummary'
import AddressCard from './components/pages/AddressCard';
import PaymentSuccess from './components/pages/PaymentSuccess';
import Order from './components/pages/Order';


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
      <Route path='/contact' element={<Contact />}/>
      <Route path='/products/:category' element={<CategoryProduct />}/>
      <Route path='/product/:id' element={<SingleProduct />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/address_card' element={<AddressCard />}/>
      <Route path='/order_summary/:id' element={<OrderSummary />}/>
      <Route path='/payment-success' element={<PaymentSuccess />}/>
      <Route path='order' element={<Order />}/>

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
