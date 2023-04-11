import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

import './App.css';

function App() {
  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <LoginPage setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
