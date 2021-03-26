import React from 'react'
import Textfield from "@material-ui/core/TextField";
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
    const {values, handleChange} = props;
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
                    label="Modèle"
                    type="type"
                    onChange={handleChange("type")}
                    defaultValue={values.type}
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