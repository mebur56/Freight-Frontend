import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import FreightsPage from '../features/freightsPage';
import UploadPage from '../features/uploadPage';
import SideMenu from '../components/SideMenu';

function App() {



  return (
    <div>
        <SideMenu />
        <Routes>
          <Route path='/' element={<UploadPage />} />
          <Route path='/freights' element={<FreightsPage />} />
        </Routes>
    </div>

  );
}

export default App;
