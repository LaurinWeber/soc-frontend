import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import InscriptionPage from "./views/InscriptionPage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/inscription" component={InscriptionPage} />
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </Router>,
  document.getElementById('root')
);

