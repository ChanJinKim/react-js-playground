import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import D3Circle1Page from './pages/D3Circle1Page';
import D3LineGraph1Page from './pages/D3LineGraph1Page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/d3-circle-1" element={<D3Circle1Page />} />
        <Route path="/d3-line-graph-1" element={<D3LineGraph1Page />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
