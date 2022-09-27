// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import useHistory from 'react-router-dom';

function Nav() {

  const history = useHistory();

  const pages = [
    'About',
    'Registration',
    'Login',
    'Home',
  ]

  const handleNavigation = (pageTitle) =>{
    pageTitle.toLowercase()
    history.push('/' + pageTitle)
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