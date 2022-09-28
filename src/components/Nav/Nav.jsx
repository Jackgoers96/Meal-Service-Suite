// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();

  const pages = [
    'About',
    'Registration',
    'Login',
    'Home',
  ]

  const handleNavigation = (pageTitle) =>{
    pageTitle.toLowercase()
    navigate('/' + pageTitle)
  }

  return (
    <>
      {pages.map(pageName => (
        <p
          value={pageName}
          onClick={(event)=> handleNavigation(event.target.value)}
        >{pageName}
        </p>
      ))}
    </>
  )
}
export default Nav;