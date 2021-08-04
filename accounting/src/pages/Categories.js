import React, { useState } from "react";
import Layout from "../layouts/Default.layout";

import Row from "../components/Row";
import Heading from "../components/Heading";
import Form from "../components/Form";
import { TextField } from "@material-ui/core";
import SubmitButton from "../components/SubmitButton";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const Categories = () => {
    const [newCatName, setNewCatName] = useState("");
    const [newCatLimit, setNewCatLimit] = useState("");
    const [editCatName, setEditCatName] = useState("");
    const [editCatLimit, setEditCatLimit] = useState("");

    return (
        <Layout>
            <Row className="border-bottom">
                <Heading>Categories</Heading>
            </Row>
            <Row className="space-between flex-column-mobile">
                <Form className="new-category-form with-padding">
                    <Heading level="h2">Create</Heading>
                    <TextField
                        value={newCatName}
                        onChange={(e) => setNewCatName(e.target.value)}
                        label="Name"
                        error={false}
                        helperText=" "
                    />
                    <TextField
                        value={newCatLimit}
                        onChange={(e) => setNewCatLimit(e.target.value)}
                        label="Password"
                        error={false}
                        helperText=" "
                    />
                    <SubmitButton text="Create" className="medium" />
                </Form>
                <Form className="edit-category-form with-padding">
                    <Heading level="h2">Edit</Heading>
                    <InputLabel id="label">Select a category</InputLabel>
                    <Select
                        labelId="label"
                        id="select"
                        value={editCatName}
                        onChange={(e) => setEditCatName(e.target.value)}
                        helperText=" "
                    >
                        <MenuItem value="keyboard">Keyboard</MenuItem>
                        <MenuItem value="new-car">New car</MenuItem>
                    </Select>
                    <TextField
                        value={editCatLimit}
                        onChange={(e) => setEditCatLimit(e.target.value)}
                        label="Limit"
                        error={false}
                        helperText=" "
                    />
                    <SubmitButton text="Save" className="medium" />
                </Form>
            </Row>
        </Layout>
    );
};

export default Categories;
