import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { history } from './utils/history';
// import NotFound from './components/notFound';
import LoginForm from './auth/loginForm';
import Register from './auth/registerForm';
import Home from './components/home';


const App = () =>  {
  return (
      <div>
      <Router history={history}>
      <Switch>
        <Route path={["/login","/register","/notfound","/"]}>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={Register}/>
            {/* <Route path="/notfound" component={NotFound} /> */}
            <Route exact path="/" component={Home}/>
        </Route>
        </Switch>
      </Router>
      </div>
  );
};

export default App;
