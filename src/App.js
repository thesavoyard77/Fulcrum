import {WorkOrders} from './public/workOrders.js'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home'
import Form from './componants/AddWorkOrder'



function App() {

  const [workOrders , setWorkOrders ] = useState(() => {
    let value;
    try {
      value = localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
    } catch {
        value = undefined;
    }
    return value;
  });


  
  useEffect(() => {
    if (!workOrders) {
      setWorkOrders(WorkOrders)
  }
    localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
}, [workOrders])


  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/create' exact={true} element={<Form />}>
        </Route>
        <Route path='/' exact={true} element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
