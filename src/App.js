import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' exact={true} >
          {/* <Home /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
