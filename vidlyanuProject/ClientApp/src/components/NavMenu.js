﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>vidlyanuProject</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem>
                                <Glyphicon glyph='education' /> Counter
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/movies'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Movies
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/login'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Login
                         </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/registrationform'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Register
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
