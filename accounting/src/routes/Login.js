import React, { useState } from "react";
import Layout from "../layouts/Auth.layout";

import { Link as RouterLink } from "react-router-dom";

import { Card, CardActions, CardContent, TextField, Button, Link } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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
                        // error
                        helperText=" "
                        color="primary"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        // error
                        helperText=" "
                    />
                </CardContent>
                <CardActions className="card__actions">
                    <Button className="card__button" variant="contained" color="primary">
                        Login <SendIcon className="card__icon" />
                    </Button>
                    <p>
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
