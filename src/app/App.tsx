import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import FreightsPage from '../features/freightsPage';
import UploadPage from '../features/uploadPage';

function App() {
  return (
    <Routes>
    <Route path= '/' element={<UploadPage/>} />
    <Route path='/freights' element={<FreightsPage/>} />
  </Routes>


  );
}

export default App;
