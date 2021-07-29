import { Button, Menu } from "@material-ui/core";
import React, { useState, useRef } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./navbar.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuAnchor = useRef(null);
    return (
        <nav className="navbar">
            <Button>
                <MenuIcon />
            </Button>
            <Button ref={menuAnchor} onClick={() => setMenuOpen(!menuOpen)}>
                USER <ArrowDropDownIcon />
            </Button>
            <Menu
                open={menuOpen}
                className="user-menu"
                anchorEl={menuAnchor.current}
                keepMounted
                onClose={() => setMenuOpen(!menuOpen)}
            >
                <Button>Profile</Button>
                <Button>Logout</Button>
            </Menu>
        </nav>
    );
};

export default Navbar;
