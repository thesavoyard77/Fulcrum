import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './componants/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter >
    <Navbar />
    </BrowserRouter>
  );
}

export default App;
