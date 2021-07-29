import { Button } from "@material-ui/core";
import React from "react";

import "./sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="menu">
                {menuItems.map((item) => (
                    <Button key={item.name} className="menu__item" href={item.slug}>{item.name}</Button>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;

const menuItems = [
    { name: "Account", slug: "/" },
    { name: "History", slug: "/history" },
    { name: "Planning", slug: "/planning" },
    { name: "New entry", slug: "/new-entry" },
    { name: "Categories", slug: "/categories" },
];
