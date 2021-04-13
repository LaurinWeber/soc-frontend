import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import styles from "../assets/jss/views/landingPageStyle";
import {Grid, Typography} from "@material-ui/core";
import ProductSection from "./LandingPage/Sections/ProductSection";
import RoleSection from "./LandingPage/Sections/RoleSection";
import TeamSection from "./LandingPage/Sections/TeamSection";
import ContactSection from "./LandingPage/Sections/ContactSection";
import Parallax from "../components/Parallax";
import Button from "../components/Button";

//hooks
import {useHistory} from "react-router-dom";
import FooterBottom from "../components/FooterBottom";
import HeaderTop from "../components/HeaderTop";

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
    //hooks
    const classes = useStyles();
    const history = useHistory();

    //redirect to driver inscription
    const handleInscription = () => {
        let path = `inscription`;
        history.push(path);
    };

    //redirect to company details
    const handleDetails = () => {
        let path = `details`;
        history.push(path);
    };

    return (
        <div>
            <HeaderTop
                showButton={true}
                inscription={handleInscription}
            />
            <Parallax filter>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <Typography variant={"h3"}>Besion d'argent?</Typography>
                            <Typography variant={"subtitle1"}>
                                Customise ta voiture avec de la publicité et repars avec un
                                salaire mensuel
                            </Typography>
                            <br/>
                            <Button color="danger" size="lg" onClick={handleInscription}>
                                S'inscrire
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid className={classes.grid} container>
                    <Grid item xs={12} sm={12} md={12}>
                        <ProductSection/>
                        <RoleSection
                            handleInscription={handleInscription}
                            handleDetails={handleDetails}/>
                        <TeamSection/>
                        <ContactSection/>
                    </Grid>
                </Grid>
            </div>
            <FooterBottom/>
        </div>
    );
}
