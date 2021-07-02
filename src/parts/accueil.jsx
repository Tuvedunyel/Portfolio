import React, {Component} from 'react'
import {PortFolio} from './portfolio'
import {Contact} from './contact'
import darkLogo from '../img/montoya-main-light.svg'
import lightLogo from '../img/montoya-main.svg'
import scroll from '../img/scroll-down.svg'
import scrollLight from '../img/scroll-down-light.svg'

export class Accueil extends Component {

    render () {
        return <>
            <section id="accueil">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className="container-narrow">
                    <div className="main-container__center">
                        <section className="main-logo">
                            <img src={lightLogo} alt="Montoya Grégoire, Designer Web"/>
                            <img src={darkLogo} alt="Montoya Grégoire, Designer Web"/>
                        </section>
                        <section className="main-title">
                            <h1>Grégoire</h1>
                            <h2>Designer Intégrateur Web</h2>
                        </section>
                    </div>
                    <div className="scroll">
                        <strong>Scroll</strong>
                        <a href="#portfolio">
                            <span className="screen-reader-text">Vers le Portfolio</span>
                            <img src={scroll} alt="Allez vers le Portfolio"/>
                            <img src={scrollLight} alt="Allez vers le Portfolio"/>
                        </a>
                    </div>
                </div>
            </section>
            <PortFolio />
            <Contact />
        </>
    }
}