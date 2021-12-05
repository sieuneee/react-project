import React, { useState } from "react";
import Posting from "./Posting";
import List from "./List";
import { Route, Routes } from "react-router-dom";

const ListPage = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<List/>} />
        <Route path="posting" element={<Posting/>} />
      </Routes>
    </div>
  );
};

export default ListPage;
