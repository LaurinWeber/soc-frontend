import React, {useState} from 'react'
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Fab} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {container} from "../../../assets/jss/mainStyles";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    input: {
        display: "none"
    },
    main: {
        paddingLeft: "25px",
        paddingRight: "25px",
    },
    textField: {
        width: "150px",
    }
})

export default function FormCar(props) {
    const {values, handleChange, addImage} = props;
    const classes = useStyles();

    return (
        <>
            <div className={classes.main} align={'center'}>
                <Textfield
                    label="Marque"
                    onChange={handleChange("brand")}
                    defaultValue={values.brand}
                />
                <br/>
                <Textfield
                    type="year"
                    label="Année"
                    onChange={handleChange("year")}
                    defaultValue={values.year}
                />
                <br/>
                <Textfield
                    label="Type"
                    type="type"
                    onChange={handleChange("type")}
                    defaultValue={values.type}
                />
                <br/>
                <Textfield
                    label="Couleur"
                    type="text"
                    onChange={handleChange("color")}
                    defaultValue={values.color}
                />
                <br/>
                <br/>
            </div>
        </>
    )
}