import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Reusable Component
 

// Page Components
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Chocolate from './Chocolate'; // ✅ Spelling corrected
import MenDress from './MenDress';
import Cart from './Cart';
import Order from './Order';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import WomanDress from './WomanDress';
import Milk from './Milk';
import SignIn from './SignIn';
 

function App() {
   
  return (
    <BrowserRouter>
      <div className="app-header">
  <div className="header-top">
    <h1 className="title">╰‿╯ ᏒᎧᎽᎯᏝ 💖乂 ᎻᏬᏁԵᎬᏒ ❤️亗</h1>
    <input type="search" placeholder="🔍 Search here..." className="search-bar" />
  </div>
   <nav className="nav-links">
          <Link to='/home'>🏠 Home</Link>
          <Link to='/veg'>🥦 Veg</Link>
          <Link to='/nonVeg'>🍗 NonVeg</Link>
          <Link to='/milk'>🥛 Milk</Link>
          <Link to='/chocolate'>🍫 Chocolate</Link>
          <Link to='/womanDress'>👗 Woman Dresses</Link>
          <Link to='/menDress'>👔 Men Dress</Link>
          <Link to='/cart'>🛒 Cart</Link>
          <Link to='/order'>📦 Order</Link>
          <Link to='/contactUs'>📞 Contact Us</Link>
          <Link to='/aboutUs'>ℹ️ About Us</Link>
          <Link to='/sigin'>🔐 Sign In</Link>
           
        </nav>
</div>


      <Routes>
        <Route path='/home' element={<Home  />} />
        <Route path='/veg' element={<Veg   />} />
        <Route path='/nonVeg' element={<NonVeg   />} />
         <Route path='/milk' element={<Milk/>}></Route>
        <Route path='/chocolate' element={<Chocolate />} /> {/* ✅ Chocolate */}
        <Route path='/womanDress' element={<WomanDress/>}> </Route>
        <Route path='/menDress' element={<MenDress />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/sigin' element={<SignIn />} />
       
        <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
