import React from "react";
import Row from "../components/Row";
import Heading from "../components/Heading";
import Layout from "../layouts/Default.layout";
import Table from "../components/Table";
import { Button } from "@material-ui/core";
import { OpenInNew as OpenInNewIcon } from "@material-ui/icons";

const History = () => (
    <Layout>
        <Row className="border-bottom">
            <Heading>History</Heading>
        </Row>
        <Row></Row>
        <Row className="content-center overflow-md-scroll">
            <Table
                className="min-width-md"
                head={["#", "Sum", "Data", "Category", "Type", "Open"]}
                // this is placeholder data, to be changed later
                rows={[
                    [
                        1,
                        1234,
                        new Date().toLocaleDateString(),
                        "name",
                        "Consumption",
                        <Button className="small" variant="contained" color="primary">
                            <OpenInNewIcon />
                        </Button>,
                    ],
                ]}
            />
        </Row>
    </Layout>
);

export default History;
