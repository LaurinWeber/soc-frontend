import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import emailjs from "emailjs-com";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

import styles from "../../../assets/jss/views/landingPageSections/contactStyle.js";
import Button from "../../../components/Button.js";

import {makeStyles} from "@material-ui/core/styles";
import {Grid, TextField} from "@material-ui/core";
import CardBody from "../../../components/CardBody";

const useStyles = makeStyles(styles);

export default function ContactSection() {
    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();
        let serviceID = process.env.REACT_APP_EMAILJS_SERVICEID
        let templateID = process.env.REACT_APP_EMAILJS_TEMPLATEIDID
        let userID = process.env.REACT_APP_EMAILJS_USERID

        emailjs.sendForm("service_2x3eajy", "template_rf85yeh", e.target, "user_Kuu8pWYFwfVQ8xffWm1tV")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className={classes.section}>
            <Grid container justify="center">
                <Grid item cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Contact</h2>
                    <h4 className={classes.description}>
                        T'as des questions? N'hesite pas de nous contacter!
                    </h4>
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} sm={12} md={8}>
                            <form onSubmit={sendEmail}>
                                <div className={classes.inputWrapper}>
                                    <div className={classes.inputField}>
                                        <input type="text" className={classes.inputControl} placeholder="Name"
                                               name="name"/>
                                    </div>
                                    <div className={classes.inputField}>
                                        <input type="email" className={classes.inputControl} placeholder="Email Address"
                                               name="email"/>
                                    </div>
                                    <div className={classes.inputField}>
                                        <input type="text" className={classes.inputControl} placeholder="Subject"
                                               name="subject"/>
                                    </div>
                                    <div className={classes.inputField}>
                                        <textarea className={classes.inputControl} id="" cols="30" rows="8"
                                                  placeholder="Your message" name="message"></textarea>
                                    </div>
                                    <div className={classes.inputField}>
                                        <input type="submit" value="Send" className={classes.button}/>
                                    </div>
                                </div>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};