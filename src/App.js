import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import Index from "./Pages/Index";
import List from "./Pages/List";
import Error404 from './Pages/Error404';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/list/*" element={<List/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default App;