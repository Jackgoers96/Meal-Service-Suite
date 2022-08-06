import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import MealCalc from '../MealCalc/MealCalc';
import MenuBar from '../../components/MenuBar/MenuBar'

import { Container } from '@mui/material';

import './LandingPage.css';
import React from 'react';

function LandingPage() {
    return (
        <Container maxwidth="sm">
            <p> This is the landing page</p>
        </Container>
    );
}

export default LandingPage;
