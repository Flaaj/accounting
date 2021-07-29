import { Fab } from "@material-ui/core";
import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./default.scss";

const DefaultLayout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout__row">
                <Sidebar />
                <MainContent>{children}</MainContent>
            </div>
            <Fab className="fab" color="primary" aria-label="add">
                +
            </Fab>
        </div>
    );
};

export default DefaultLayout;
