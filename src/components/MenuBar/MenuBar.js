import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material';
import './MenuBar.css';

function MenuBar() {
  return (
    <Box className='menubar'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
          </IconButton>
        </Toolbar>
        </AppBar>
        </Box>

        );
}

export default MenuBar;