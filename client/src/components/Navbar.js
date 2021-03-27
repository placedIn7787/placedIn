import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

function Navbar(props) {

    const [ isOpen, setState ] = useState(false)

    const toggleCollapse = () => {
        setState(!isOpen)
    }

    return(
        <>
            <MDBNavbar color="blue-grey" dark expand="md" className="sticky-top">
            <MDBNavbarBrand>
                <strong className="white-text">PlacedIn</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                    <MDBNavLink className="navbar_item" to="/dashboard">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink className="navbar_item" to="/dashboard/profiles" onClick={props.onReload}>Colleagues</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink className="navbar_item" to="#!">Interview Experiences</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right className="pr-5">
                    <MDBNavItem>
                        <MDBDropdown dropleft>
                            <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="/dashboard/profileSettings">Add profile</MDBDropdownItem>
                                <MDBDropdownItem href="/dashboard/profileSettings">Edit profile</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Your Posts</MDBDropdownItem>
                                <MDBDropdownItem divider/>
                                <MDBDropdownItem href='/'>Logout</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar> 
        </>
    )
}

export default Navbar