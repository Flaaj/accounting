import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import Row from "../components/Row";
import SubmitButton from "../components/SubmitButton";
import Layout from "../layouts/Default.layout";

const Profile = () => {
    const [profileName, setProfileName] = useState("");
    return (
        <Layout>
            <Row className="border-bottom">
                <Heading>Profile</Heading>
            </Row>
            <Row>
                <Form className="mw-600">
                    <TextField
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        label="Name"
                        error={false}
                        helperText=" "
                    />
                    <SubmitButton text="Save" className="medium"/>
                </Form>
            </Row>
        </Layout>
    );
};

export default Profile;
