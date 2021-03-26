import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
    return ['Conducteur', 'Voiture', "KM", 'Confirmation'];
}

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "transparent"
    },
    stepLabel: {
        color: "#1488CC"
    },
    avatar: {
        width: "1.5em",
        height: "1.5em",
        backgroundColor: "black"
    },
    lineVertical: {
        padding: "8px 0px",
        marginLeft: 14
    }
}));

export default function StepperTop(props) {
    const {step} = props;
    const classes = useStyles();
    const steps = getSteps();


    return (
        <div>
            <Stepper activeStep={step}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            classes={{ active: classes.stepLabel }}
                        >{""}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}