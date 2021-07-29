import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
    return (
        <div className="app-main-layout">
            <Navbar />
            <div className="row">
                <Sidebar />
                <MainContent>{children}</MainContent>
            </div>
        </div>
    );
};

export default DefaultLayout;
