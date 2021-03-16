import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import { createBrowserHistory } from "history";
var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={LandingPage} />
        </Switch>
    </Router>,
  document.getElementById('root')
);

