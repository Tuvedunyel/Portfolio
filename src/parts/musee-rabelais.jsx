import React, {Component} from 'react'
import logoRabelais from '../img/rabelais-logo.svg'
import museeRabelais from '../img/musee-rabelais.jpg'

export class MuseeRabelais extends Component {


    render () {
        return <section className="projets-page">
        <div className="container-narrow">
            <h1>Musée Rabelais</h1>
            <article>
                <img src={logoRabelais} className="black-logo logo" alt="Logo du musée Rabelais, la devinière. Un R majuscule avec un M au dessus"/>
                <img src={logoRabelais} className="logo" alt="Logo du musée Rabelais, la devinière. Un R majuscule avec un M au dessus"/>
                <h2>Projet : Musée Rabelais</h2>
                <p>
                    Musée Rabelais, la devinière. Projet d'entrer en stage.
                </p>
                <p>
                    Sous WordPress, intégrer les débuts de maquette réalisé par mon entreprise d'accueil qui avait essayé d'emporter l'appel d'offre du conseil départemental.
                </p>
            </article>
            <aside>
                <img src={museeRabelais} alt="Présentaiton du haut de page du site Musée Rabelais, la devinière"/>
                <a href="https://www.montoya.studio/musee-rabelais/les-caves/" target="_blank" rel="noopener">Visiter le site</a>
            </aside>
        </div>
        <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    </section>
    }
}