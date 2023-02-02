import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FreightsPage from './features/freightsPage';
import UploadPage from './features/uploadPage';
const Main = () => {
return (         
    <Routes>
    <Route path= '/' element={<UploadPage/>} />
    <Route path='/freights' element={<FreightsPage/>} />
  </Routes>
);
}
export default Main;