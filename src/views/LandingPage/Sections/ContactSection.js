import React, {useState} from 'react';
import emailjs from "emailjs-com";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

import styles from "../../../assets/jss/views/landingPageSections/contactStyle.js";

import {makeStyles} from "@material-ui/core/styles";
import {Grid, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "../../../components/Button";

const useStyles = makeStyles(styles);

export default function ContactSection() {
    const classes = useStyles();
    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    //handle fields change
    const handleChange = input => e => {
        setMessage(prev => ({
            ...prev,
            [input]: e.target.value
        }))
    }

    function sendEmail(e) {
        e.preventDefault();

        if (
            message.email === "" ||
            message.name === "" ||
            message.subject === "" ||
            message.message === "") {
            return;
        }

        emailjs.sendForm("service_2x3eajy", "template_rf85yeh", e.target, "user_Kuu8pWYFwfVQ8xffWm1tV")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage({
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        )
    }

    return (
        <div className={classes.section}>
            <Grid container justify="center">
                <Grid item cs={12} sm={12} md={8}>
                    <Typography variant={'h4'} className={classes.title}>Contact</Typography>
                    <Typography variant={'body2'} className={classes.description}>
                        T'as des questions? N'hesite pas de nous contacter!
                    </Typography>
                    <br/>

                    <Typography>
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={12} sm={12} md={12}>
                                <form onSubmit={sendEmail}>
                                    <div className={classes.inputWrapper}>
                                        <div className={classes.inputField}>
                                            <TextField
                                                type="text"
                                                onChange={handleChange('name')}
                                                className={classes.inputControl}
                                                placeholder=" nom"
                                                name="name"/>
                                        </div>
                                        <div className={classes.inputField}>
                                            <TextField
                                                type="email"
                                                onChange={handleChange('email')}
                                                className={classes.inputControl}
                                                placeholder=" email"
                                                name="email"/>
                                        </div>
                                        <div className={classes.inputField}>
                                            <TextField
                                                type="text"
                                                onChange={handleChange('subject')}
                                                className={classes.inputControl}
                                                placeholder=" sujet"
                                                name="subject"/>
                                        </div>
                                        <div className={classes.inputField}>
                                            <TextField
                                                onChange={handleChange('message')}
                                                className={classes.inputControl}
                                                multiline id="" cols="30"
                                                rows="8"
                                                placeholder=" ton message"
                                                name="message"/>
                                        </div>
                                        <div className={classes.inputField}>
                                            <Button type="submit" color={'primary'}>Envoyer</Button>
                                        </div>
                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};