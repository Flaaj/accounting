import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// material ui:
import { Button, Menu } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
// store:
import { Actions } from "../store/actionCreators";
// styles:
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuAnchor = useRef(null);
    const dispatch = useDispatch();

    return (
        <nav className="navbar">
            <Button onClick={() => dispatch(Actions.toggleSidebar())}>
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
                <Button>
                    <Link className="user-menu__link" to="/profile">
                        Profile
                    </Link>
                </Button>
                <Button>
                    <span className="user-menu__link">Logout</span>
                </Button>
            </Menu>
        </nav>
    );
};

export default Navbar;
