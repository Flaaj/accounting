import React from "react";
import Heading from "../components/Heading";
import ItemProgress from "../components/ItemProgress";
import Row from "../components/Row";
import Layout from "../layouts/Default.layout";

const Planning = () => (
    <Layout>
        <Row className="border-bottom">
            <Heading>Planning</Heading>
        </Row>
            <ItemProgress itemName="Keyboard" currentAmount={360} targetAmount={440} />
            <ItemProgress itemName="Laptop" currentAmount={1800} targetAmount={4000} />
            <ItemProgress itemName="New car" currentAmount={8000} targetAmount={10000} />
    </Layout>
);

export default Planning;
