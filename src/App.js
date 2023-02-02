import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './Main';

function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Upload</Link></li>
        <li><Link to='/freights'>Frete</Link></li>
      </ul>
      <hr />
      <Main />
    </div>


  );
}

export default App;
