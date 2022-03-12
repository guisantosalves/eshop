import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CheckOut from './components/CheckOut';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/CheckOut">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
