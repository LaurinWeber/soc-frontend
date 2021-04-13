import React from "react";
import {makeStyles} from "@material-ui/styles";
import {primaryColor} from "../assets/jss/mainStyles";
import logo from "../assets/img/logo-hes-so-valais-2019.png";

const useStyles = makeStyles({
    root: {
        height: '10px',
        textAlign: 'right'
    },
    second: {

        backgroundColor: primaryColor
    },
    logo:{
        paddingTop:'10px',
        paddingBottom:'5px',
        paddingStart:'10px',
        width: '100px'
    }
})

export default function FooterBottom(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}/>
            <div className={classes.second}>
                <img src={logo} alt="logo" className={classes.logo}/>
            </div>
        </>
    );
}