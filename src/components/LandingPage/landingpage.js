import React from 'react';
import './landingpage.scss';
import Cards from '../Cards/cards.js';

function LandingPage() {
    return (
        <div>
            <div className="introduction">
                <div className="name">
                    <span>Hi, I'm Bandana</span>
                </div>
                <div>
                    <span>First of all, welcome to my space, I hope this turns out informatory for you.</span>
                </div>
                <div>
                    <span>I enjoy working from my laptop, with music playing in background.
                        An introvert person, using web to communicate.</span>
                </div>
            </div>
            <div>
                <div><span className="recent-text">Here are some recent stuff I made</span></div>
                <Cards/>
            </div>
        </div>
    );
}

export default LandingPage;