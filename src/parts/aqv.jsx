import React, {Component} from "react"
import aqvLogo from '../img/aqv-logo.svg'
import aqvLogoLight from '../img/aqv-logo-light.svg'
import auxquatrevents from '../img/aqv.jpg'

export class Aqv extends Component {



    render() {
        return  <section className="projets-page">
            <div className="container-narrow">
                <h1>Aux Quatre Vents</h1>
                <article>
                    <img src={aqvLogo} alt="Logo de l'association Aux quatre Vents représentant un cheval rouge cabré"/>
                    <img src={aqvLogoLight} alt="Logo de l'association Aux quatre Vents représentant un cheval rouge cabré"/>
                    <h2>Projet : Aux quatre Vents</h2>
                    <p>
                        Aux quatre vents est une association culturelle. 
                        Cette association à fait appel au Cefim pour une refonte complète de leur site initial. Le principal défi était de rendre la grande quantité de contenu et d'activité clair et facilement accéssible aux utilisateurs.
                    </p>
                    <p>
                        Site réalisé dans le cadre de la formation CEFIM Designer Web 2020.
                        Après la création du thème personnalisé sur Adobe XD le site utilise WordPress pour permettre aux clients d'aisement maintenir le site à jour et ajouter rapidement des contenus.
                    </p>
                </article>
                <aside>
                    <img src={auxquatrevents} alt="Présentation du site réalisé par Grégoire Montoya pour l'association"/>
                    <a href="https://www.montoya.cefim.o2switch.site/auxquatrevents" target="_blank" rel="noopener">Visiter le site</a>
                </aside>
            </div>
            <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </section>
        
    }
}