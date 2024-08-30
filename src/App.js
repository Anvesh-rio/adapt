import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Inventory from './pages/Inventory.jsx';
import Returns from './pages/Returns.jsx'
import Customers from './pages/Customers.jsx'
import Shipping from './pages/Shipping.jsx'
import Channels from './pages/Channels.jsx';
import Integrations from './pages/Integrations.jsx';
import Calculations from './pages/Calculations.jsx';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/calculations" element={<Calculations />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};
export default App;