import React, { useState } from "react";
import Layout from "../layouts/Default.layout";
import Row from "../components/Row";
import Heading from "../components/Heading";

import {
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@material-ui/core";

const NewEntry = () => {
    const [sum, setSum] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(null);

    return (
        <Layout>
            <Row className="border-bottom">
                <Heading>New entry</Heading>
            </Row>
            <Form className="new-entry-form">
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
                    onChange={(e) => setSum(e.target.value)}
                    label="Password"
                    // error
                    helperText=" "
                />
                <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label="Password"
                    // error
                    helperText=" "
                />
            </Form>
        </Layout>
    );
};

export default NewEntry;
