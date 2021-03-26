import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Contract from "@material-ui/icons/Create";
import Car from "@material-ui/icons/DirectionsCar";
import Money from "@material-ui/icons/MonetizationOn";
// core components
import InfoArea from "../../../components/InfoArea";

import styles from "../../../assets/jss/views/landingPageSections/productStyle";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Grid container spacing={4} justify="center">
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant={'h4'} className={classes.title}>Comment ça marche? </Typography>
                    <Typography variant={'body2'} className={classes.description}>
                        Avoir une voiture est signe de liberté.
                        Nous nous rendons toutes les semaines à pleins d’endroits différents: au travail, au magasin,
                        pour rencontrer des amis, la famille, se promener, faire du sport, etc. Et du coup nous faisons
                        tous des trajets récurrents, nous laissons notre voiture dans des parkings, etc.
                        En plus, notre voiture est vue par beaucoup de monde, que ce soit les piétons, les autres
                        usagers de la route, dans les embouteillages ou aux feux rouges.
                        On dit que dans une grande ville, une voiture peut être vue jusqu’à … fois. Tu ne le pensais pas
                        non?
                        Alors voilà, notre concept est d’offrir une grande visibilité aux entreprises sur un support
                        innovant: ta voiture!
                        Et toi, tu as juste besoin de continuer à vivre normalement. Et tu y gagnes de l’argent.
                    </Typography>
                </Grid>
            </Grid>
            <div>
                <Typography>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={12} md={3}>

                            <InfoArea
                                title="S'inscrire"
                                description="Tu t’inscris gratuitement sur notre plateforme en indiquant le véhicule que tu possèdes et dans quelle région tu as l’habitude de conduire puis l’équipe StickOnCar s’occupe du reste."
                                icon={PersonAdd}
                                iconColor="primary"
                                vertical
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoArea
                                title="Contrat"
                                description="On aura ton profil dans notre base de données et on te contactera pour te proposer un contrat dès qu’une entreprise partenaire décide de promouvoir un produit dans ta région."
                                icon={Contract}
                                iconColor="primary"
                                vertical
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoArea
                                title="Campagne"
                                description="Si tu acceptes, tu n’auras plus qu’à te rendre chez un colleur de stickers partenaire à StickOnCar proche de chez toi et attendre quelques minutes qu’un professionnel s’occupe de ta voiture gratuitement."
                                icon={Car}
                                iconColor="primary"
                                vertical
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoArea
                                title="Argent"
                                description="Une fois l’autocollant posé, continue tes activités normalement et reçoit de l’argent chaque fin de mois."
                                icon={Money}
                                iconColor="primary"
                                vertical
                            />
                        </Grid>
                    </Grid>
                </Typography>
            </div>
        </div>
    );
}
