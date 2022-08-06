import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import MealCalc from '../MealCalc/MealCalc';
import MenuBar from '../../components/MenuBar/MenuBar';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="*" element={<Navigate to="/LandingPage" replace />} />
        <Route exact path="/MealCalc" element={<MealCalc />} />
        <Route exact path="LandingPage" element={<LandingPage />} />
      </Routes>
    </Router>

  );
}

export default App;
