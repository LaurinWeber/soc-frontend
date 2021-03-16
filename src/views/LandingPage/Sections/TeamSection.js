import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {Grid} from "@material-ui/core";
import Card from "../../../components/Card";

import styles from "../../../assets/jss/views/landingPageSections/teamStyle.js";

import laurin from "../../../assets/img/laurin.jpg";
import kevin from "../../../assets/img/kevin-test.jpg";
import maxime from "../../../assets/img/maxime-test.jpg";
import celine from "../../../assets/img/celine-test.jpg";
import thomas from "../../../assets/img/thomas.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Connaître l'équipe</h2>

            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card plain>
                            <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={laurin} alt="..." className={imageClasses}/>
                            </Grid>
                            <h4 className={classes.cardTitle}>
                                Laurin Weber
                                <br/>
                                <small className={classes.smallTitle}>Developer</small>
                            </h4>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card plain>
                            <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={kevin} alt="..." className={imageClasses}/>
                            </Grid>
                            <h4 className={classes.cardTitle}>
                                Kevin Kobler
                                <br/>
                                <small className={classes.smallTitle}>Designer</small>
                            </h4>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card plain>
                            <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={celine} alt="..." className={imageClasses}/>
                            </Grid>
                            <h4 className={classes.cardTitle}>
                                Céline Gex
                                <br/>
                                <small className={classes.smallTitle}>Marketing</small>
                            </h4>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card plain>
                            <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={maxime} alt="..." className={imageClasses}/>
                            </Grid>
                            <h4 className={classes.cardTitle}>
                                Maxime Georges
                                <br/>
                                <small className={classes.smallTitle}>Résponsable financière</small>
                            </h4>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card plain>
                            <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={thomas} alt="..." className={imageClasses}/>
                            </Grid>
                            <h4 className={classes.cardTitle}>
                                Thomas Berger
                                <br/>
                                <small className={classes.smallTitle}>Manager de qualité</small>
                            </h4>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
