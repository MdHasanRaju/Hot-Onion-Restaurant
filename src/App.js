import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner/Banner';
import BreakfastItems from './pages/BreakfastItems/BreakfastItems';
import DinnerItems from './pages/DinnerItems/DinnerItems';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import ItemRoute from './pages/ItemRoute/ItemRoute';
import LunchItems from './pages/LunchItems/LunchItems';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/lunch">
            <Banner></Banner>
            <ItemRoute></ItemRoute>
            <LunchItems></LunchItems>
          </Route>
          <Route path="/breakfast">
            <Banner></Banner>
            <ItemRoute></ItemRoute>
            <BreakfastItems></BreakfastItems>
          </Route>
          <Route path="/dinner">
            <Banner></Banner>
            <ItemRoute></ItemRoute>
            <DinnerItems></DinnerItems>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
