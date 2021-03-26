import React, {useState} from "react";
import {Divider,  Grid, Typography} from "@material-ui/core";
import FormPerson from "./InscriptionPage/Sections/FromPerson";
import FormCar from "./InscriptionPage/Sections/FromCar";
import FormDriving from "./InscriptionPage/Sections/FromDriving";
import StepperTop from "./InscriptionPage/Sections/StepperTop";
import {useHistory} from "react-router-dom";
import ButtonsBottom from "./InscriptionPage/Sections/ButtonsBottom";
import HeaderTop from "./InscriptionPage/HeaderTop";
import FooterBottom from "./InscriptionPage/FooterBottom";
import classNames from "classnames";

import styles from "../assets/jss/views/inscriptionPageStyle";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function InscriptionPage(props) {
    //hooks
    const classes = useStyles();
    const history = useHistory();
    const [step, setStep] = useState(0);
    const [person, setPerson] = useState({
        birthdate: "",
        email: "",
        firstname: "",
        lastname: "",
        zip: "",
        city: "",
        street: "",
    });
    const [car, setCar] = useState({
        image: null,
        brand: "",
        year: "",
        type: "",
        color: "",
    });

    const [driving, setDriving] = useState({
        region: "",
        kmPerWeek: "",
        experience: 0,
    });

    //go to next step
    const nextStep = () => {
        setStep(step + 1);
        console.log(step)
    }

    //go to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    //handle fields change
    const handleChangePERSON = input => e => {
        setPerson(prev => ({
            ...prev,
            [input]: e.target.value
        }))
    }

    const addImage = input => {
        setCar(prev => ({
            ...prev,
            image: input
        }))
    }

    const handleChangeCAR = input => e => {
        setCar(prev => ({
            ...prev,
            [input]: e.target.value
        }))
    }

    const handleChangeDRIVING = input => e => {
        setDriving(prev => ({
            ...prev,
            [input]: e.target.value
        }))
    }

    //redirect to driver inscription
    const cancel = () => {
        let path = `/`;
        history.push(path);
    };

    switch (step) {
        case 0:
            return (
                <div>
                    <HeaderTop
                        showButton={false}
                        goToHome={cancel}
                        label="Détails personels"
                    />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Grid className={classes.grid} container>
                            <Grid item xs={12} sm={12} md={12}>
                                <StepperTop step={step}/>
                                <FormPerson
                                    handleChange={handleChangePERSON}
                                    values={person}
                                />
                                <ButtonsBottom
                                    step={step}
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                />

                            </Grid>
                        </Grid>
                    </div>
                    <FooterBottom/>
                </div>
            );
        case 1:
            return (
                <div>
                    <HeaderTop
                        showButton={false}
                        goToHome={cancel}
                        label="Voiture"
                    />

                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Grid className={classes.grid} container>
                            <Grid item xs={12} sm={12} md={12}>
                                <StepperTop step={step}/>
                                <FormCar
                                    handleChange={handleChangeCAR}
                                    addImage={addImage}
                                    values={car}
                                />
                                <ButtonsBottom
                                    step={step}
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <FooterBottom/>
                </div>
            );
        case 2:
            return (
                <div>
                    <HeaderTop
                        showButton={false}
                        goToHome={cancel}
                        label="Conduite"
                    />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Grid className={classes.grid} container>
                            <Grid item xs={12} sm={12} md={12}>
                                <StepperTop step={step}/>
                                <FormDriving
                                    handleChange={handleChangeDRIVING}
                                    values={driving}
                                />
                                <br/>
                                <ButtonsBottom
                                    step={step}
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <FooterBottom/>
                </div>
            );
        case 3:
            return (
                <div>
                    <HeaderTop
                        showButton={false}
                        goToHome={cancel}
                        label="Confirmation"
                    />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Grid className={classes.grid} container>
                            <Grid item xs={12} sm={12} md={12}>
                                <StepperTop step={step}/>
                                <Typography variant={"h5"}>Details personels</Typography>
                                <Divider/>
                                <br/>
                                <FormPerson
                                    handleChange={handleChangePERSON}
                                    values={person}
                                />
                                <br/>
                                <Typography variant={"h5"}>Voiture</Typography>
                                <Divider/>
                                <FormCar
                                    handleChange={handleChangeCAR}
                                    addImage={addImage}
                                    values={car}
                                />
                                <br/>
                                <Typography variant={"h5"}>Conduite</Typography>
                                <Divider/>
                                <FormDriving
                                    handleChange={handleChangeDRIVING}
                                    values={driving}
                                />
                                <ButtonsBottom
                                    step={step}
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <FooterBottom/>
                </div>
            );
        case 4:
            return (
                <div>
                    <HeaderTop
                        showButton={false}
                        goToHome={cancel}
                        label="Confirmation"
                    />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Grid className={classes.grid} container justify={"center"}>
                            <Grid item xs={12} sm={12} md={12}>
                                <br/>
                                <div align={"center"}>
                                <Typography variant={"h4"}>Merci pour ton inscription!</Typography>
                                <br/>
                                </div>
                                <ButtonsBottom
                                    step={step}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <FooterBottom/>
                </div>
            );
        default:

    }
}