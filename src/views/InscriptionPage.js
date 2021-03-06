import React from "react";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import FooterBottom from "../components/FooterBottom";
import classNames from "classnames";

import styles from "../assets/jss/views/inscriptionPageStyle";
import {makeStyles} from "@material-ui/core/styles";
import SignupForm from "./InscriptionPage/Sections/SignUpForm";


const useStyles = makeStyles(styles);

export default function InscriptionPage(props) {
    //hooks
    const classes = useStyles();
    const history = useHistory();

    //redirect to driver inscription
    const cancel = () => {
        let path = `/`;
        history.push(path);
    };
    return (
        <div>
            <HeaderTop
                showButton={false}
                goToHome={cancel}
                label="Inscription"
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid className={classes.grid} container>
                    <Grid item xs={12} sm={12} md={12}>
                        <SignupForm
                        />
                    </Grid>
                </Grid>
            </div>
            <FooterBottom/>
        </div>
    );
}