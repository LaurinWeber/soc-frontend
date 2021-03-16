import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons

// core components
import styles from "../assets/jss/views/landingPageStyle";
import {Grid, AppBar, Toolbar} from "@material-ui/core";
import ProductSection from "./LandingPage/Sections/ProductSection";
import RoleSection from "./LandingPage/Sections/RoleSection";
import TeamSection from "./LandingPage/Sections/TeamSection";
import ContactSection from "./LandingPage/Sections/ContactSection";
import Parallax from "../components/Parallax";
import Button from "../components/Button";
import logo from "../assets/img/logo-soc.png"

const useStyles = makeStyles(styles);

export default function LandingPage() {
    //hooks
    const classes = useStyles();

    //redirect to driver inscription
    const handleInscription = async () => {
        //let path = `/inscription-page`;
        //history.push(path);
    };

    return (

        <div>
            <AppBar className={classes.appBarClasses}>
                <Toolbar className={classes.container}>
                    <img src={logo} alt="StickOnCar" className={classes.logo} />
                </Toolbar>
            </AppBar>
            <Parallax filter>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={5}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h1 className={classes.title}>Besion d'argent?</h1>
                            <h4>
                                Customise ta voiture avec de la publicité et repars avec un
                                salaire mensuel
                            </h4>
                            <br/>
                            <Button color="danger" size="lg" disabled onClick={handleInscription}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                S'inscrire
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection/>
                    <RoleSection/>
                    <TeamSection/>
                    <ContactSection/>
                </div>
            </div>
        </div>
    );
}
