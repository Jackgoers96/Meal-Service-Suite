import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import MealCalc from '../MealCalc/MealCalc';
import MenuBar from '../MenuBar/MenuBar'
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="*" element={<Navigate to="/MealCalc" replace />}/>
        <Route exact path="/MealCalc" element={<MealCalc />}/>
      </Routes>
    </Router>

  );
}

export default App;
