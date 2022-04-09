import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
