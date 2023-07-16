import React, { useState } from 'react';
import "./Navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [hover, setHover] = useState(false);

    let navHover = {
        color: ''
    };

    if (hover) {
        navHover.color = "red";
    }
    else {
        navHover.color = '';
    };

    const menuOptions = [
        {
            text: "Products",
        },
        {
            text: "Services",
        },
        {
            text: "About",
        },
        {
            text: "Jobs",
        },
        {
            text: "Contact",
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">SOFTGRAY</div>
            <div className="navbar-links-container">
                <a
                    href=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={navHover}
                >
                    Products
                </a>
                <a
                    href=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={navHover}
                >
                    Services
                </a>
                <a
                    href=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={navHover}
                >
                    About
                </a>
                <a
                    href=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={navHover}
                >
                    Jobs
                </a>
                <a
                    href=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={navHover}
                >
                    Contact
                </a>
                <b>+81-00-0000-0000</b>
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default NavBar;