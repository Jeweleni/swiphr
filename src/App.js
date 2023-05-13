import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Customers from './pages/Customers';
import Discount from './pages/Discount';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/products/Products';
import Reporting from './pages/Reporting';
import Subsriptions from './pages/Subsriptions';
import AllProducts from './pages/products/AllProducts';
import Categories from './pages/products/Categories';
import Attributes from './pages/products/Attributes';
import GiftCards from './pages/products/GiftCards';
import PurchaseLinks from './pages/products/PurchaseLinks';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <SideBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/:id' element={<Orders />} />
          <Route path='/Subsiptions' element={<Subsriptions />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/allproducts' element={<AllProducts />} />
          <Route path='/products/categories' element={<Categories />} />
          <Route path='/products/attributes' element={<Attributes />} />
          <Route path='/products/giftcards' element={<GiftCards />} />
          <Route path='/products/purchaselinks' element={<PurchaseLinks />} />
          <Route path='/discount' element={<Discount />} />
          <Route path='/reporting' element={<Reporting />} />
        </Routes>
        </SideBar>

      </BrowserRouter>
    </div>
  )
}

export default App