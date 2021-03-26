import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {Grid, Typography} from "@material-ui/core";
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
            <Typography variant={'h4'} className={classes.title}>Connaître l'équipe </Typography>
            <Typography variant={'body2'} className={classes.description}>
                Nous somme des étudiants de l'HES-SO Valais / Wallis.
            </Typography>
            <div>
                <Typography>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card plain>
                                <Grid item xs={8} sm={8} md={6} className={classes.itemGrid}>
                                    <img src={laurin} alt="..." className={imageClasses}/>
                                </Grid>
                                <h4 className={classes.cardTitle}>
                                    Laurin Weber
                                    <br/>
                                    <small className={classes.smallTitle}>Informatique</small>
                                </h4>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card plain>
                                <Grid item xs={8} sm={8} md={6} className={classes.itemGrid}>
                                    <img src={kevin} alt="..." className={imageClasses}/>
                                </Grid>
                                <h4 className={classes.cardTitle}>
                                    Kevin Kobler
                                    <br/>
                                    <small className={classes.smallTitle}>Tourisme</small>
                                </h4>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card plain>
                                <Grid item xs={8} sm={8} md={6} className={classes.itemGrid}>
                                    <img src={celine} alt="..." className={imageClasses}/>
                                </Grid>
                                <h4 className={classes.cardTitle}>
                                    Céline Gex
                                    <br/>
                                    <small className={classes.smallTitle}>Économie</small>
                                </h4>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card plain>
                                <Grid item xs={8} sm={8} md={6} className={classes.itemGrid}>
                                    <img src={maxime} alt="..." className={imageClasses}/>
                                </Grid>
                                <h4 className={classes.cardTitle}>
                                    Maxime Georges
                                    <br/>
                                    <small className={classes.smallTitle}>Économie</small>
                                </h4>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card plain>
                                <Grid item xs={8} sm={8} md={6} className={classes.itemGrid}>
                                    <img src={thomas} alt="..." className={imageClasses}/>
                                </Grid>
                                <h4 className={classes.cardTitle}>
                                    Thomas Berger
                                    <br/>
                                    <small className={classes.smallTitle}>Ingénieur</small>
                                </h4>
                            </Card>
                        </Grid>
                    </Grid>
                </Typography>
            </div>
        </div>
    );
}
