import './App.css';
import { csv } from 'd3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home'
import Form from './componants/AddWorkOrder'
const data = require('./public/workOrders.csv');


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
  if (workOrders === undefined) {
      try {
        setWorkOrders(JSON.parse(localStorage.getItem(`workOrderStorage:`)))
  
      } catch (e) {
          csv(data).then(setWorkOrders)
          localStorage.setItem(`workOrderStorage:`, JSON.stringify(workOrders))
      }

  }

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
