import React, {useEffect, useState} from "react";
import {Formik, Form} from 'formik';
import {title} from "../../../assets/jss/mainStyles";
import * as Yup from 'yup';
import Textfield from "../../../components/TextfieldWrapper";
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Button from "../../../components/ButtonWrapper";
import Button2 from "../../../components/Button";
import {useHistory} from "react-router-dom";
import DatePicker from "../../../components/DateTimePickerWrapper";
import request from "../../../utils/request";

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    }
}));

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    city: '',
    email: '',
    phone: '',
    birthdate: '',
    brand: '',
    model: '',
    year: '',
    color: '',
    region: '',
    km: ''
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('obligatoire'),
    lastName: Yup.string()
        .required('obligatoire'),
    address: Yup.string()
        .required('obligatoire'),
    zip: Yup.number()
        .required('obligatoire'),
    city: Yup.string()
        .required('obligatoire'),
    email: Yup.string()
        .email('enter valid email address')
        .required('obligatoire'),
    phone: Yup.number()
        .integer()
        .typeError('Enter valid phone number')
        .required('obligatoire'),
    birthdate: Yup.date()
        .required('obligatoire'),
    brand: Yup.string()
        .required('obligatoire'),
    model: Yup.string()
        .required('obligatoire'),
    year: Yup.string()
        .required('obligatoire'),
    color: Yup.string()
        .required('obligatoire'),
    region: Yup.string()
        .required('obligatoire'),
    km: Yup.string()
        .required('obligatoire'),
})


export default function SignupForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const [submitted, setSubmitted] = useState(false);
    const[person, setPerson] = useState({
        firstname: '',
        lastname: '',
    });

    //redirect to driver inscription
    const cancel = () => {
        let path = `/`;
        history.push(path);
    };

    //post to backend
    const handleSubmit = async (values) => {
        setSubmitted(true);

        //convert string values to numbers
        values.year = Number(values.year)
        values.km = Number(values.km)

        //Car
        const car = JSON.stringify({
                brand: values.brand,
                model: values.model,
                year: values.year,
                color: values.color,
            }
        )
        let carObject = await request(
            `https://localhost:44373/api/cars/`,
            "POST",
            car
        )

        //Driving
        const driving = JSON.stringify({
                Region: values.region,
                KmPerWeek: values.km
            }
        )
        let drivingObject = await request(
            `https://localhost:44373/api/drivings/`,
            "POST",
            driving
        )
        //Person
        const person = JSON.stringify({
                Firstname: values.firstName,
                Lastname: values.lastName,
                Address: values.address,
                Zip: values.zip,
                City: values.city,
                Email: values.email,
                Phone: values.phone,
                Birthdate: values.birthdate,
                FkCar: carObject.id,
                FkDriving: drivingObject.id,
            }
        )
        let response = await request(
            `https://localhost:44373/api/people/`,
            "POST",
            person
        )
        setPerson(response);
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div className={classes.formWrapper}>
                        {submitted ?
                            <div align={"center"}>
                                <Typography variant={"subtitle2"} className={classes.title}>
                                    {"Thank you for your Submission "+ person.firstname}
                                </Typography>
                                <Button2 onClick={cancel} color={"primary"}>
                                    landingpage
                                </Button2>
                            </div> :
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE
                                }}
                                validationSchema={
                                    FORM_VALIDATION
                                }
                                onSubmit={values => {
                                    console.log(values);
                                    handleSubmit(values);
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant={"h3"} className={classes.title}>
                                                Personal Details
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='firstName'
                                                label='First Name'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='lastName'
                                                label='Last Name'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12} xl={12}>
                                            <Textfield
                                                name='address'
                                                label='Addresse'
                                            />
                                        </Grid>
                                        <Grid item xs={4} md={4} xl={4}>
                                            <Textfield
                                                name='zip'
                                                label='ZIP'
                                            />
                                        </Grid>
                                        <Grid item xs={8} md={8} xl={8}>
                                            <Textfield
                                                name='city'
                                                label='City'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Textfield
                                                name='email'
                                                label='E-Mail'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='phone'
                                                label='Phone'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <DatePicker
                                                name="birthdate"
                                                label="Birthdate"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant={"h3"} className={classes.title}>
                                                Car
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='brand'
                                                label='Brand'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='model'
                                                label='Model'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12} xl={12}>
                                            <Textfield
                                                name='year'
                                                label='Year'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12} xl={12}>
                                            <Textfield
                                                name='color'
                                                label='Color'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant={"h3"} className={classes.title}>
                                                Driving
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='region'
                                                label='Region'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Textfield
                                                name='km'
                                                label='Km'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button color={"primary"}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        }
                    </div>
                </Container>
            </Grid>
        </Grid>
    );
};