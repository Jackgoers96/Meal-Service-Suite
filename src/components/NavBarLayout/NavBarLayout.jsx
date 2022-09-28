// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, Outlet} from 'react-router-dom';

function NavBarLayout() {

  const navigate = useNavigate();

  const pages = [
    'About',
    'Register',
    'Login',
    'Home',
    'Organization',
  ]

  const handleNavigation = (pageTitle) =>{
    let newTitle = pageTitle.toLowerCase()
    navigate('/' + pageTitle)
  }

  return (
    <>
      {pages.map((pageName, i) => (
        <p
          key={i}
          // value={pageName}
          onClick={()=> handleNavigation(pageName)}
        >{pageName}
        </p>
      ))}
      <Outlet />
    </>
  )
}
export default NavBarLayout;