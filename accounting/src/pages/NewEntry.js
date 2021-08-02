import React from "react";
import Layout from "../layouts/Default.layout";
import Row from "../components/Row";
import Heading from "../components/Heading";

const NewEntry = () => (
    <Layout>
        <Row className="border-bottom">
            <Heading>New entry</Heading>
        </Row>
    </Layout>
);

export default NewEntry;
