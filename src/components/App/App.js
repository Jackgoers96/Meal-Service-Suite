  import './App.css';
  import { HashRouter as Router, Redirect, Route, Switch, Link, } from 'react-router-dom';
  import useEffect from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  //=====================^< TOOLS >^===================================
  import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute'; // Lowest Authorization level protected route
  import AdminRoute from '../ProtectedRoutes/AdminRoute'; // Admin only Authorization protected route
  //=====================^< ROUTES >^===================================
  import LandingPage from '../LandingPage/LandingPage';
  import LoginPage from '../LoginPage/LoginPage';
  import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';
  import AboutPage from '../Pages/AboutPage/AboutPage';
  import Nav from '../Nav/Nav';
  import AllUsersPage from '../AllUsersPage/AllUsersPage';
  import LowLevelAuthPage from '../LowLevelAuthPage/LowLevelAuthPage'; // Lowest Authorization level protected page
  import AdminLevelAuthPage from '../AdminLevelAuthPage/AdminLevelAuthPage'; // Admin only Authorization protected page
  // ^^=====================^< COMPONENTS/VIEWS >^==========================
  import { createTheme, ThemeProvider } from "@mui/material/styles";
  // ^^=====================^< MUI THEME IMPORTS >^==========================
 
 
 
  function App() {
 
 
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    useEffect(() => {
      dispatch({ type: 'FETCH_USER' });
    }, [dispatch]);
 
 
    // ========< MUI GLOBAL THEME >==========
    // MUI info link https://mui.com/material-ui/customization/theme-components/#global-style-overrides
    const theme = createTheme({
      typography: {
        allVariants: {
          fontFamily: 'sans-serif',
        },
      },
      palette: {
        primary: {
          main: '#ffffff',
          contrastText: '#000000'
        },
        secondary: {
          main: '#111111',
          contrastText: '#222222'
        }
      },
    });
 
    //========================================**< START RETURN >**====================================================
    return (
      <>
        <ThemeProvider theme={theme}>
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
                  <RegistrationPage />
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
              <ProtectedRoute
                // If logged in, this will show the user a page
                exact
                path="/low-level-auth-page">
                <Nav />
                <LowLevelAuthPage />
              </ProtectedRoute>
              {/* -----< End Level 1+ Users Only Page >----- */}
 
              {/* ------< Level 3 users only page >----- */}
              <AdminRoute
              // If logged in and authentication is level 3, this will show the user a page
                exact
                path="/admin-only-page">
                <Nav />
                <AdminLevelAuthPage />
              </AdminRoute>
              {/* ------< Level 3 users only page >----- */}
 
 
 
 
 
              <Route
                exact
                path="/home">
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the low-level-auth-page.
                  // If not logged in, redirect to landing page
                <Redirect to="/low-level-auth-page" />
                :
                <LandingPage />
                 } 
              </Route>
 
              {/* ======================= END Authentication Pages and Logic =======================*/}
 
 
 
              {/* --------------------------<If none of the other routes matched, we will show a 404. >--------------------------*/}
              <Route> <h1>404</h1> </Route>
 
            </Switch>
            {/*====================================< END SWITCH >==================================== */}
 
            {/* <Footer /> ---------------------< FOOTER COMPONENT >--------------------- */}
          </div>
        </Router>
        </ThemeProvider> 
 
      </>
    ); //====================================< END RETURN >====================================
 
 
  } //====================================< END FUNCTION >====================================
 
  export default App;