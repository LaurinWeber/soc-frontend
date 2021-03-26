import React from 'react'
import Textfield from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(  {
    main: {
        paddingLeft: "25px",
        paddingRight: "25px",
    },
    textField:{
        width: "150px",
    }
})


export default function FormPersonalDetails(props) {
    const {values, handleChange} = props;
    const classes = useStyles();

    return (
        <div className={classes.main} align={'center'}>
            <Textfield
                className={classes.textField}
                type="date"
                label="Anniversaire"
                onChange={handleChange("birthdate")}
                defaultValue={values.birthdate}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br/>
            <Textfield
                className={classes.textField}
                label="Email"
                type="email"
                onChange={handleChange("email")}
                defaultValue={values.email}
            />
            <br/>
                <Textfield
                    className={classes.textField}
                    label="Prénom"
                    type="text"
                    onChange={handleChange("firstname")}
                    defaultValue={values.firstname}
                />
                <br/>
                <Textfield
                    className={classes.textField}
                    label="Nom"
                    onChange={handleChange("lastname")}
                    defaultValue={values.lastname}
                />
                <br/>
                <Textfield
                    className={classes.textField}
                    label="Zip"
                    type="zip"
                    onChange={handleChange("zip")}
                    defaultValue={values.zip}
                />
                <br/>
                <Textfield
                    className={classes.textField}
                    label="Lieu"
                    onChange={handleChange("city")}
                    defaultValue={values.city}
                />
                <br/>
                <Textfield
                    className={classes.textField}
                    label="Addresse"
                    onChange={handleChange("street")}
                    defaultValue={values.street}
                />
                <br/>
        </div>)
}