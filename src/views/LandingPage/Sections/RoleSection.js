import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components

import styles from "../../../assets/jss/views/landingPageSections/roleStyle";
import Card from "../../../components/Card";
import CardHeader from "../../../components/CardHeader";
import CardBody from "../../../components/CardBody";
import Button from "../../../components/Button.js";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function RoleSection(props) {
    const classes = useStyles();

    //redirect to driver inscription
    const handleInscription = async () => {
        let path = `/inscription-page`;
    };

    //redirect to details about soc for companies
    const handleDetails = async (event) => {
        let path = `/details-page`;
    };

    return (
        <div className={classes.section}>
            <Grid container justify="center">
                <Grid item xs={6} sm={12} md={6}>
                    <h2 className={classes.title}>Quelle et ton rôle? </h2>
                </Grid>
            </Grid>
            <div>
                <Grid container justify="center">
                    <Grid item xs={6} sm={12} md={6}>
                        <Card className={classes.textCenter}>
                            <CardHeader color="info">Conducteur</CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>
                                    "Je veux mettre la pub sur ma voiture"
                                </h4>
                                <p>
                                    Tu conduis tous les jours et tu as envie de devenir
                                    ambassadeur d’une marque qui va te payer pour faire sa
                                    campagne publicitaire? Voici le projet fou que nous te
                                    proposons pour arrondir tes fins de mois😊 Tu es intéressé?
                                    Inscris-toi et nous te contacterons.
                                </p>
                                <Button onClick={handleInscription} disabled color={"danger"}>
                                    S'inscrire
                                </Button>
                            </CardBody>
                        </Card>
                        <br />

                        <Card className={classes.textCenter}>
                            <CardHeader color="info">
                                Entreprises et campagnes publicitaires
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>
                                    "Je veux promouvoir mon entreprise ou autre"
                                </h4>
                                <p>
                                    Vous avez un budget limité et vous voulez du résultat. Nous
                                    sommes là pour vous aider avec des campagnes adaptées à VOS
                                    besoins. besoins.
                                </p>
                                <Button disabled onClick={handleDetails}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                        <br />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
