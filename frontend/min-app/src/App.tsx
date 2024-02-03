import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Mineral from "./pages/Mineral";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/minerals" element={<Mineral/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
