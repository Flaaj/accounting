import React from "react";
import { useSelector } from "react-redux";

import { Button } from "@material-ui/core";

import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menuItems = useSelector(state => state.ui.menuItems)
    const showSidebar = useSelector((state) => state.ui.showSidebar);

    return (
        <aside className={`sidebar` + (showSidebar ? "" : " hide")}>
            <ul className="menu">
                {menuItems.map((item) => (
                    <Button key={item.name} className="menu__item">
                        <Link className="menu__link" to={item.slug}>{item.name}</Link>
                    </Button>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;


