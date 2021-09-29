import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Abouts from './components/Abouts/Abouts';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">



      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <Abouts></Abouts>
          </Route>
          <Route path="/friend">
            <Friends></Friends>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
