import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../../assets/scss/index.scss'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/img/logo.png'
import { Link } from "react-scroll";

const MainNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuIconStyle = {
        fontSize: '3rem',
        color: "#0a3a4f"
    }

    const logoStyle = {
        width: "5rem",
        height: "5rem"
    }

    return (
        <div>
            <Navbar fixed="top" expand="md">
                <NavbarBrand href="/" style={logoStyle}>
                    <img src={logo} alt="logo" />
                </NavbarBrand>

                <div className="navbar-toggler" onClick={toggle}>
                    <MenuIcon style={menuIconStyle} />
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" className="loginBtn">Sign In</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;