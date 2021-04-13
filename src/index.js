import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import InscriptionPage from "./views/InscriptionPage";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import {primaryColor, warningColor} from "./assets/jss/mainStyles";
import DetailsPage from "./views/DetailsPage";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: warningColor,
        },
        spacing:{
            marginTop: 2,
            marginBottom: 2,
        }
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
         <Router>
            <Switch>
                <Route path="/details" component={DetailsPage}/>
                <Route path="/inscription" component={InscriptionPage}/>
                <Route exact path="/" component={LandingPage}/>
            </Switch>
        </Router>
    </ThemeProvider>
,
    document.getElementById('root')
);

