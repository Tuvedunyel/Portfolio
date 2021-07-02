import React, {Component} from 'react'
import lightLogo from '../img/montoya-header.svg'
import darkLogo from '../img/montoya-header-light.svg'
import {Link} from "react-router-dom"

export class Header extends Component {


    render() {
        return <>
            <div className="container">
                <div className="logo-container">
                    <Link to="/" className="return-home">
                        <span className="screen-reader-text">Retour à l'accueil</span>
                        <img src={lightLogo} alt="Montoya Grégoire, Designer Web"/>
                        <img src={darkLogo} alt="Montoya Grégoire, Designer Web"/>
                    </Link>
                </div>
                <nav>
                    <ul id="main-nav">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    }
}