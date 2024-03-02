import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Card from './Card';
import React from 'react';



function App() {
  return (
    <div className="App">
      <NavBar/>      
      <h1>CS 230L</h1>
      <h2>Section 02</h2>
      <p>WVU ID: 800406079</p>
      <p>Hi I am Ahmad Haidaree</p>
      <Card/>

    </div>
  );
}
//comment
export default App;
