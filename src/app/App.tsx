import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import FreightsPage from '../features/freightsPage';
import UploadPage from '../features/uploadPage';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';


function App() {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState("Upload de Fretes")

  const ToogleSideMenu = (toogle: boolean) => {



  }
  const changLabel = (label: string) => {

  }

  return (
    <div>
      <Header
        handleToogle={(toogle) => setOpen(toogle)}
        label={label}
      />
      <SideMenu
        open={open}
        handleToogle={(toogle) => setOpen(toogle)}
        handleLabel={(label) => setLabel(label)}
      />

      <Routes>
        <Route path='/' element={<UploadPage />} />
        <Route path='/freights' element={<FreightsPage />} />
      </Routes>
    </div>

  );
}

export default App;
