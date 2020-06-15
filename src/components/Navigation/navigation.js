import React from 'react';
import './navigation.scss';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar className="justify-content-center navigator" activeKey="/home">
                <Nav.Item className="navigator-item">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navigator-item">
                    <Nav.Link href="#">Travel</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navigator-item">
                    <Nav.Link href="#">Art</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navigator-item">
                    <Nav.Link href="#">Gardening</Nav.Link>
                </Nav.Item>
            </Navbar>
        </div>  
    );
}

export default Navigation;