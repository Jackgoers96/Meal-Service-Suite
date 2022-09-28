import './App.css';
import { HashRouter as Router, Navigate, Route, Routes, Link, } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//=====================^< TOOLS >^===================================
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute'; // Lowest Authorization level protected route
import AdminRoute from '../ProtectedRoutes/AdminRoute'; // Admin only Authorization protected route
//=====================^< ROUTES >^===================================
import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import RecipesPage from '../Pages/Recipes/Recipes'; // Lowest Authorization level protected page
import OrganizationPage from '../Pages/Organization/Organization'; // Admin only Authorization protected page
import NavBarLayout from '../NavBarLayout/NavBarLayout';
// ^^=====================^< COMPONENTS/VIEWS >^==========================
import { createTheme, ThemeProvider } from "@mui/material/styles";
// ^^=====================^< MUI THEME IMPORTS >^==========================



function App() {


  // const dispatch = useDispatch();
  // const user = useSelector(store => store.user);
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  // }, [dispatch]);
  const user = {
    id: 1,
    access_level: 2
  }


  // ========< MUI GLOBAL THEME >==========
  // MUI info link https://mui.com/material-ui/customization/theme-components/#global-style-overrides
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['montserrat', 'sans-serif'],
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
        <Routes>
          <Route element={<NavBarLayout />}>
            <Route exact path="/" element={<Navigate to={'/home'} />} />
            <Route exact path="/home" element={<LandingPage />} />
            <Route exact path="/recipes" element={<RecipesPage />} />
            <Route exact path="/organization" element={<OrganizationPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/register" element={<RegistrationPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Route>
            <Route path="*" element={<h1>404 Page not found ¯\_(ツ)_/¯ </h1>} />
        </Routes>


        {/* =============================*< Login/Registration >*============================= */}
        {/* -----< LOGIN >--------------------------------- */}
        {/* <Route exact path="/login">
                {user.id ?
                  // If the user is already logged in then shouldn't need to reach this page,
                  // Navigate to the /all-users-page
                  <Navigate replace to="/recipes" />
                  :
                  // Otherwise, show the login page
                  <LoginPage />
                }
              </Route> */}
        {/* -----< End Login >----- */}

        {/* -----< REGISTRATION >---------------------------- */}
        {/* <Route exact path="/registration">
                {user.id ?
                  // If the user is already logged in then shouldn't need to reach this page,
                  // Navigate them to the /home
                  <Navigate replace to="/recipes" />
                  :
                  // Otherwise, show the registration page
                  <RegistrationPage />
                }
              </Route> */}
        {/* -----< End Registration >----- */}
        {/* =============================*< END Login/Registration >*============================= */}


        {/* ======================= Non-authenticated Pages =======================*/}
        {/* ---------< ABOUT PAGE >---------------- */}
        {/* <Route
                exact
                path="/about">
                <AboutPage />
              </Route> */}
        {/* ---------< END ABOUT PAGE >---------------- */}

        {/* -----< All Users Page >--------- */}
        {/* <Route
                // shows page at all times (logged in or not)
                exact
                path="/home">
                <LandingPage />
              </Route> */}
        {/* -----< End All Users Page >----- */}
        {/* ======================= END Non-authenticated Pages =======================*/}


        {/* ======================= Authentication Pages and Logic =======================*/}

        {/* -----< Level 1+ Users Only Page >--------- */}
        {/* <ProtectedRoute
                // If logged in, this will show the user a page
                exact
                path="/recipes">
                <Recipes />
              </ProtectedRoute> */}
        {/* -----< End Level 1+ Users Only Page >----- */}

        {/* ------< Level 3 users only page >----- */}
        {/* <AdminRoute
                // If logged in and authentication is level 3, this will show the user a page
                exact
                path="/organization">
                <Organization />
              </AdminRoute> */}
        {/* ------< Level 3 users only page >----- */}





        {/* <Route
                exact
                path="/home">
                {user.id ?
                  // If the user is already logged in, 
                  // Navigate them to the recipes.
                  // If not logged in, Navigate to landing page
                  <Navigate replace to="/recipes" />
                  :
                  <LandingPage />
                }
              </Route> */}

        {/* ======================= END Authentication Pages and Logic =======================*/}



        {/* --------------------------<If none of the other routes matched, we will show a 404. >--------------------------*/}
        {/* <Route> <h1>404</h1> </Route> */}
      </Router>
      </ThemeProvider>
    </>
  ); //====================================< END RETURN >====================================


} //====================================< END FUNCTION >====================================

export default App;