import React from "react";
import HeaderTop from "../components/HeaderTop";
import FooterBottom from "../components/FooterBottom";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import classNames from "classnames";

//Styling
import {makeStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/views/inscriptionPageStyle";
const useStyles = makeStyles(styles);

export default function DetailsPage(props) {
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
                label="Details"
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid className={classes.grid} container>
                    <Grid item xs={12} sm={12} md={12}>



                    </Grid>
                </Grid>
            </div>
            <FooterBottom/>
        </div>
    );
}