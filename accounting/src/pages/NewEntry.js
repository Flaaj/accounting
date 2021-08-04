import React, { useState } from "react";

import Layout from "../layouts/Default.layout";

import Row from "../components/Row";
import Heading from "../components/Heading";
import Form from "../components/Form";

import {
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@material-ui/core";
import SubmitButton from "../components/SubmitButton";

const NewEntry = () => {
    const [sum, setSum] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(null);

    return (
        <Layout>
            <Row className="border-bottom">
                <Heading>New entry</Heading>
            </Row>
            <Form className="new-entry-form mw-600">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select a category</FormLabel>
                    <RadioGroup
                        aria-label="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel
                            value="income"
                            control={<Radio color="primary" />}
                            label="Income"
                        />
                        <FormControlLabel
                            value="outcome"
                            control={<Radio color="primary" />}
                            label="Outcome"
                        />
                    </RadioGroup>
                </FormControl>
                <TextField
                    value={sum}
                    type="number"
                    onChange={(e) => setSum(e.target.value)}
                    label="Sum"
                    error={false}
                    helperText=" "
                />
                <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label="Description"
                    error={false}
                    helperText=" "
                />
                <SubmitButton text="Create" className="medium"/>
            </Form>
        </Layout>
    );
};

export default NewEntry;
