import React from "react";

// Layout
import Layout from "../layouts/Default.layout";

// custom components:
import Row from "../components/Row";
import Table from "../components/Table";

// material ui components:
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { Refresh as RefreshIcon } from "@material-ui/icons/";

// utils:
import { currency } from "../utils/currency";
import Heading from "../components/Heading";

const Account = () => {
    return (
        <Layout>
            <Row className="space-between border-bottom">
                <Heading>Account</Heading>
                <Button className="small" variant="contained" color="primary">
                    <RefreshIcon />
                </Button>
            </Row>
            <Row className="space-between flex-column-mobile">
                <Card className="blue small">
                    <CardHeader title="Currency account" />
                    <CardContent>{currency(100)}</CardContent>
                </Card>
                <Card className="orange">
                    <CardHeader title="Exchange Rates" />
                    <CardContent>
                        <Table
                            head={["Currency", "Course", "Date"]}
                            // this data is just a placeholder. To be changed later
                            rows={[["EUR", 4.67, new Date().toLocaleDateString()]]}
                        />
                    </CardContent>
                </Card>
            </Row>
        </Layout>
    );
};

export default Account;
