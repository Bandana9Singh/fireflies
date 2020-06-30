import React from 'react';
import './navigation.scss';

function Navigation() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">
                        Home
                    </a>
                    <a className="navbar-item" href="#">
                        Documentation
                    </a>
                </div>
            </div>
        </nav> 
    );
}

export default Navigation;