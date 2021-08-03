import React, { useState } from "react";

import Layout from "../layouts/Auth.layout";
import SubmitButton from "../components/SubmitButton";

import { Link as RouterLink } from "react-router-dom";

import {
    Card,
    CardActions,
    CardContent,
    TextField,
    Link,
    FormControlLabel,
    Checkbox,
    Typography,
} from "@material-ui/core";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <Layout>
            <Card component="form" className="card card--login">
                <CardContent className="card__content">
                    <h1 className="title fw-lighter">Home Accounting</h1>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        helperText=" "
                        color="primary"
                        error={false}
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        error={false}
                        helperText=" "
                    />
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        error={false}
                        helperText=" "
                    />
                    <FormControlLabel
                        inputProps={{ "aria-label": "Checkbox A" }}
                        control={
                            <Checkbox
                                className="card__checkbox"
                                value={checked}
                                color="primary"
                                onChange={(e) => setChecked(e.target.value)}
                            />
                        }
                        label={<Typography>I agree with the rules</Typography>}
                        color="primary"
                    />
                </CardContent>
                <CardActions className="card__actions">
                    <SubmitButton text="register" className="card__button" />

                    <p className="card__text">
                        Already have an account?
                        <Link
                            className="card__link"
                            color="secondary"
                            component={RouterLink}
                            to="/login"
                        >
                            Log in!
                        </Link>
                    </p>
                </CardActions>
            </Card>
        </Layout>
    );
};

export default Register;
