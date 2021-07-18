import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Page from './components/Page'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/details/:charId" component={Details} />
          <Route exact path="/page/:pageNum" component={Page} />
        </Switch>
      </Router>


    </>
  );
}

export default App;
