import React, {Component} from 'react'
import logoHeosys from '../img/logo-heosys-largeur.svg'
import heosys from '../img/heosys.jpg'

export class Heosys extends Component {


    render () {
        return <section className="projets-page">
        <div className="container-narrow">
            <h1>Heosys</h1>
            <article>
                <img src={logoHeosys} alt="Logo de Heosys acteur de votre Tranqui'it représentant un H majuscule"/>
                <img src={logoHeosys} alt="Logo de Heosys acteur de votre Tranqui'it représentant un H majuscule"/>
                <h2>Projet : Heosys</h2>
                <p>
                    Heosys, Acteur de votre Tranquil'it est une entreprise basé à Tours qui a fait appel à mon entreprise d'accueil pour son site.
                </p>
                <p>
                    Site sous WordPress avec un thème personnalisé. Avec l'objectif de rendre le site plus attractif, l'ajout d'effet de parrallax et d'animation sur l'image SVG à l'accueil a été nécessaire.
                </p>
            </article>
            <aside>
                <img src={heosys} alt="Accueil du site de Heosys acteur de votre Tranquil'it"/>
                <a href="https://www.heosys.com/" target="_blank" rel="noopener">Visiter le site</a>
            </aside>
        </div>
        <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    </section>
    }
}