import React, { useState } from "react";

import Layout from "../layouts/Auth.layout";
import SubmitButton from "../components/SubmitButton";
import { Link as RouterLink } from "react-router-dom";

import { Card, CardActions, CardContent, TextField, Link } from "@material-ui/core";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout>
            <Card component="form" className="card card--login">
                <CardContent className="card__content">
                    <h1 className="title fw-lighter">Home Accounting</h1>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        error={false}
                        helperText=" "
                        color="primary"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        error={false}
                        helperText=" "
                    />
                </CardContent>
                <CardActions className="card__actions">
                    <SubmitButton text="login" className="card__button" />
                    <p className="card__text">
                        Dont have an account?
                        <Link
                            className="card__link"
                            color="secondary"
                            component={RouterLink}
                            to="/register"
                        >
                            Register now
                        </Link>
                    </p>
                </CardActions>
            </Card>
        </Layout>
    );
};

export default Login;
