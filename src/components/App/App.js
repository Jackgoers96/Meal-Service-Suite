  import './App.css';
  import { HashRouter as Router, Redirect, Route, Switch, Link, } from 'react-router-dom';
  // import useEffect from 'react'; (id:5501)
  // import { useDispatch, useSelector } from 'react-redux'; (id:5501)
  //=====================^< TOOLS >^===================================
  // import LowLevelRoute from '../LowLevelRoute/LowLevelRoute'; // Lowest Authorization level protected route (id:5503)
  // import AdminLevelRoute from '../AdminLevelRoute/AdminLevelRoute'; // Admin only Authorization protected route (id:5503)
  //=====================^< ROUTES >^===================================
  import LandingPage from '../LandingPage/LandingPage';
  import LoginPage from '../LoginPage/LoginPage';
  import RegisterPage from '../RegisterPage/RegisterPage';
  import AboutPage from '../AboutPage/AboutPage';
  import Nav from '../Nav/Nav';
  import AllUsersPage from '../AllUsersPage/AllUsersPage';
  // import LowLevelAuthPage from '../LowLevelAuthPage/LowLevelAuthPage'; // Lowest Authorization level protected page (id:5503)
  // import AdminLevelAuthPage from '../AdminLevelAuthPage/AdminLevelAuthPage'; // Admin only Authorization protected page (id:5503)
  // ^^=====================^< COMPONENTS/VIEWS >^==========================
  // import { createTheme, ThemeProvider } from "@mui/material/styles"; (id:5502)
  // ^^=====================^< MUI THEME IMPORTS >^==========================
 
 
 
  function App() {
 
 
    // /* ******************* Enable this below for applications with user data! (id:5501) ********************************* */
    // const dispatch = useDispatch();
    // const user = useSelector(store => store.user);
    // useEffect(() => {
    //   dispatch({ type: 'FETCH_USER' });
    // }, [dispatch]);
    // /* ******************* Enable this above for applications with user data! (id:5501) ********************************* */
 
 
    // /* ******************* Enable this below for applications with MUI themes! (id:5502) ********************************* */
    //// ========< MUI GLOBAL THEME >==========
    //// MUI info link https://mui.com/material-ui/customization/theme-components/#global-style-overrides
    // const theme = createTheme({
    //   typography: {
    //     allVariants: {
    //       fontFamily: 'sans-serif',
    //     },
    //   },
    //   palette: {
    //     primary: {
    //       main: '#ffffff',
    //       contrastText: '#000000'
    //     },
    //     secondary: {
    //       main: '#111111',
    //       contrastText: '#222222'
    //     }
    //   },
    // });
    // /* ******************* Enable this above for applications with MUI themes! (id:5502) ********************************* */
 
    //========================================**< START RETURN >**====================================================
    return (
      <>
        {/* <ThemeProvider theme={theme}>  (id:5502) */}
        <Router>
          <div>
            <Switch>
 
              <Redirect exact from="/" to="/home" /> {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
 
 
              {/* =============================*< Login/Registration >*============================= */}
              {/* -----< LOGIN >--------------------------------- */}
              <Route exact path="/login">
                {user.id ?
                  // If the user is already logged in then shouldn't need to reach this page,
                  // redirect to the /all-users-page
                  <Redirect to="/all-users-page" />
                  :
                  // Otherwise, show the login page
                  <LoginPage />
                }
              </Route>
              {/* -----< End Login >----- */}
 
              {/* -----< REGISTRATION >---------------------------- */}
              <Route exact path="/registration">
                {user.id ?
                  // If the user is already logged in then shouldn't need to reach this page,
                  // redirect them to the /all-users-page
                  <Redirect to="/all-users-page" />
                  :
                  // Otherwise, show the registration page
                  <RegisterPage />
                }
              </Route>
              {/* -----< End Registration >----- */}
              {/* =============================*< END Login/Registration >*============================= */}
 
 
              {/* ======================= Non-authenticated Pages =======================*/}
              {/* ---------< ABOUT PAGE >---------------- */}
              <Route
                exact
                path="/about">
                <Nav />
                <AboutPage />
              </Route>
              {/* ---------< END ABOUT PAGE >---------------- */}
 
              {/* -----< All Users Page >--------- */}
              <Route
                // shows page at all times (logged in or not)
                exact
                path="/all-users-page">
                <Nav />
                <AllUsersPage />
              </Route>
              {/* -----< End All Users Page >----- */}
              {/* ======================= END Non-authenticated Pages =======================*/}
 
 
              {/* ======================= Authentication Pages and Logic =======================*/}
 
              {/* -----< Level 1+ Users Only Page >--------- */}
              {/* ******************* Enable this below for applications with authentication! (id:5503) ********************************* */}
              {/* <LowLevelRoute
                // If logged in, this will show the user a page
                exact
                path="/low-level-auth-page">
                <Nav />
                <LowLevelAuthPage />
              </LowLevelRoute> */}
              {/* ******************* Enable this above for applications with authentication! (id:5503) ********************************* */}
              {/* -----< End Level 1+ Users Only Page >----- */}
 
              {/* -----< Level 2+ Users Only Page >--------- */}
              {/* ******************* Enable this below for applications with level 2 auth! (id:5503) ********************************* */}
              {/* <MidLevelRoute
              // If logged in and authentication is level 2+, this will show the user a page
                exact
                path="/mid-level-auth-page">
                <Nav />
                <MidLevelAuthPage />
              </MidLevelRoute> */}
              {/* ******************* Enable this above for applications with level 2 auth! (id:5503) ********************************* */}
              {/* -----< End Level 2+ Users Only Page >----- */}
 
              {/* ------< Level 3 users only page >----- */}
              {/* ******************* Enable this below for applications with level 3 auth! (id:5503) ********************************* */}
              {/* <AdminLevelRoute
              // If logged in and authentication is level 3, this will show the user a page
                exact
                path="/admin-only-page">
                <Nav />
                <AdminLevelAuthPage />
              </AdminLevelRoute> */}
              {/* ******************* Enable this above for applications with level 3 auth! (id:5503) ********************************* */}
              {/* ------< Level 3 users only page >----- */}
 
 
 
 
 
              <Route
                exact
                path="/home">
                {/* ******************* Enable this below for applications with logged in users! (id:5501) ********************************* */}
                {/* {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the low-level-auth-page.
                  // If not logged in, redirect to landing page
                <Redirect to="/low-level-auth-page" />
                : */}
                {/* ******************* Enable this above for applications with logged in users! (id:5501) ********************************* */}
                <LandingPage />
                {/* ******************* Enable this below for applications with logged in users! (id:5501) ********************************* */}
                {/*  } */}
                {/* ******************* Enable this above for applications with logged in users! (id:5501) ********************************* */}
              </Route>
 
              {/* ======================= END Authentication Pages and Logic =======================*/}
 
 
 
              {/* --------------------------<If none of the other routes matched, we will show a 404. >--------------------------*/}
              <Route> <h1>404</h1> </Route>
 
            </Switch>
            {/*====================================< END SWITCH >==================================== */}
 
            {/* <Footer /> ---------------------< FOOTER COMPONENT >--------------------- */}
          </div>
        </Router>
        {/* ******************* Enable this below for applications with logged in users! (id:5501) ********************************* */}
        {/* </ThemeProvider>  (id:5502) */}
        {/* ******************* Enable this above for applications with logged in users! (id:5501) ********************************* */}
 
      </>
    ); //====================================< END RETURN >====================================
 
 
  } //====================================< END FUNCTION >====================================
 
  export default App;