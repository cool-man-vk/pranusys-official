import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RouteLinks from './components/routes/RouteLinks';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <RouteLinks />
    </div>
  );
}

export default App;
