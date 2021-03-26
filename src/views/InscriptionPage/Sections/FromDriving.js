import React from 'react'
import Textfield from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        paddingLeft: "25px",
        paddingRight: "25px",
    },
    textField: {
        width: "150px",
    }
})


export default function FormDriving(props) {
    const {values, handleChange} = props;
    const classes = useStyles();

    return (
        <>
            <div className={classes.main} align={'center'}>
                <Textfield
                    label="Région"
                    placeholder="Bas Valais"
                    onChange={handleChange("region")}
                    defaultValue={values.region}
                />
                <br/>
                <Textfield
                    label="Km / Semaine"
                    onChange={handleChange("kmPerWeek")}
                    defaultValue={values.kmPerWeek}
                />
                <br/>
            </div>
        </>
    )
}