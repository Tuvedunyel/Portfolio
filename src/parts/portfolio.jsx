import React, {Component} from 'react'
import isover from '../img/isover.jpg'
import auxquatrevents from '../img/aqv.jpg'
import heosys from '../img/heosys.jpg'
import museeRabelais from '../img/musee-rabelais.jpg'
import stCosme from '../img/st-cosme.jpg'
import {Link} from 'react-router-dom'

export class PortFolio extends Component {


    render () {
        return <section id="portfolio">
            <div className="container-narrow">
                <h2>Portfolio</h2>
                <article>
                    <div className="img-container">
                        <img src={auxquatrevents} alt="Aux quatre vents, association multi-culturelle"/>
                    </div>
                    <div className="button-container">
                        <h3>Aux Quatre vents</h3>
                        <p>Développement et design d'un thème personnalisé sous WordPress pour l'association Aux quatre Vents</p>
                        <Link to="/Auxquatrevents">En découvrir plus</Link>
                    </div>
                </article>
                <article>
                    <div className="img-container">
                        <img src={isover} alt="Isover Saint-Gobain, solutions d'isolation"/>
                    </div>
                    <div className="button-container">
                        <h3>Isover</h3>
                        <p>Développement statique d'une landing page</p>
                        <Link to="/Isover">En découvrir plus</Link>
                    </div>
                </article>
                <article>
                    <div className="img-container">
                        <img src={heosys} alt="Heosys, acteur de votre Tranquil'it"/>
                    </div>
                    <div className="button-container">
                        <h3>Heosys</h3>
                        <p>Développement d'un thème personnalisé sous WordPress pour l'entreprise Heosys</p>
                        <Link to="/Heosys">En découvrir plus</Link>
                    </div>
                </article>
                <article>
                    <div className="img-container">
                        <img src={museeRabelais} alt="Musée Rabelais, destionation la Rabelaisie"/>
                    </div>
                    <div className="button-container">
                        <h3>Musée Rabelais</h3>
                        <p>Développment d'un thème WordPress pour le Musée Rabelais</p>
                        <Link to="/Musee-Rabelais">En découvrir plus</Link>
                    </div>
                </article>
                <article>
                    <div className="img-container">
                        <img src={stCosme} alt="Prieuré Saint-Cosme, demeure de Ronsard"/>
                    </div>
                    <div className="button-container">
                        <h3>Saint-Cosme</h3>
                        <p>Développement statique d'une page pour le Prieuré Saint-Cosme demeure de Ronsard</p>
                        <Link to="/Saint-Cosme">En découvrir plus</Link>
                    </div>
                </article>
            </div>
        </section>
    }
}