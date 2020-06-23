import React from 'react';
import './cards.scss';
import card1 from '../../assets/zaanse-schans.jpg';
import card3 from '../../assets/snow.jpg';
import cardgif from '../../assets/spring-animation.gif';


function Cards() {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={card1} alt="card 1"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                Solo travelling experience to Zaanse Schans
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={cardgif} alt="card 2"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                A Spring in garden city of India - Bangalore
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={card3} alt="card 3"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                Winter trek in Kedarkantha, Uttarakhand
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;