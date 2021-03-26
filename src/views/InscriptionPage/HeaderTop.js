import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Button from "../../components/Button";
import {makeStyles} from "@material-ui/styles";
import logo from "../../assets/img/logo-soc.png";
import React from "react";

const useStyles = makeStyles({
        button: {
            backgroundColor: "transparent",
            marginTop: '5px'

        },
    title:{
            color:'#EE7501'
    },
        logo: {
            justifyContent: 'center',
            width: '80px',
        },
        nav: {
            backgroundColor: 'white',
            boxShadow: 'inherit',
            display: "flex",
            justifyContent: "space-between",
        },
        right: {}
    }
)

export default function (props) {
    const {goToHome, inscription, showButton, label} = props;
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.nav}>
                <div className={classes.button} onClick={goToHome}>
                    <img src={logo} alt="StickOnCar" className={classes.logo}/>
                </div>
                {showButton ?
                    <div>
                        <Button
                            right size='sm'
                            color='outlined'
                            onClick={inscription}
                        >S'inscrire</Button>
                    </div>
                    :

                    <Typography variant={"h5"} className={classes.title}>{label}</Typography>
                }
            </Toolbar>
        </AppBar>

    );
}