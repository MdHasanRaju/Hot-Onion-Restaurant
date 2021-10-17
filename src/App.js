import { getAuth } from '@firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import useAuth from './hooks/useAuth';
import useFirebase from './hooks/useFirebase';
import Banner from './pages/Banner/Banner';
import BreakfastDetails from './pages/BreakfastDetails/BreakfastDetails';
import BreakfastItems from './pages/BreakfastItems/BreakfastItems';
import DinnerDetails from './pages/DinnerDetails/DinnerDetails';
import DinnerItems from './pages/DinnerItems/DinnerItems';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import ItemRoute from './pages/ItemRoute/ItemRoute';
import Login from './pages/Login/Login';
import LunchDetails from './pages/LunchDetails/LunchDetails';
import LunchItems from './pages/LunchItems/LunchItems';
import Header from './pages/Shared/Header/Header';
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  // const {user, setUser}= useAuth();
  // const auth = getAuth()
  // console.log(user);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user?.email) {
  //       setUser(user);
  //     }
  //     else {
  //       setUser(null)
  //     }
  //   });
  // }, []);

  return (
    <AuthProvider>
      <div>
        <Router>
          <Header></Header>
          <Banner></Banner>
          <ItemRoute></ItemRoute>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/lunch">
              <LunchItems></LunchItems>
            </Route>
            <PrivateRoute path="/lunchdetails/:lunchId">
              <LunchDetails></LunchDetails>
            </PrivateRoute>
            <Route path="/breakfast">
              <BreakfastItems></BreakfastItems>
            </Route>
            <PrivateRoute path="/breakfastdetails/:breakfastId">
              <BreakfastDetails></BreakfastDetails>
            </PrivateRoute>
            <Route path="/dinner">
              <DinnerItems></DinnerItems>
            </Route>
            <PrivateRoute path="/dinnerdetails/:dinnerId">
              <DinnerDetails></DinnerDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
