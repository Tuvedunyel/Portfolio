import React, {Component} from "react"
import isoverLogo from '../img/logo-isover.svg'
import isover from '../img/isover.jpg'

export class Isover extends Component {



    render () {

        return <section className="projets-page">
        <div className="container-narrow">
            <h1>Isover</h1>
            <article>
                <img src={isoverLogo} alt="Logo d'isover Saint-Gobain solution d'isolation thermique et phonique"/>
                <img src={isoverLogo} alt="Logo d'isover Saint-Gobain solution d'isolation thermique et phonique"/>
                <h2>Projet : Isover</h2>
                <p>
                    Isover Saint-Gobain, solutions d'isolation thermique et phonique a contacté l'agence dans laquelle j'effectuais mon stage.
                </p>
                <p>
                    Il s'agit ici d'une landing page réalisé pour le client.
                    Cette dernière s'axe autour de leur dernier message publicitaire. Site réalisé en HTML CSS et JavaScript uniquement.
                </p>
            </article>
            <aside>
                <img src={isover} alt="Présentaiton de la landing page réalisé pour Isover"/>
                <a href="https://www.montoya.studio/isover" target="_blank" rel="noopener">Visiter le site</a>
            </aside>
        </div>
        <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    </section>
    }
}