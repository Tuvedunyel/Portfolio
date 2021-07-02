import React, {Component} from 'react'
import stCosmeLogo from '../img/main-logo.svg'
import stCosmeLogoLight from '../img/prieure-light.svg'
import stCosme from '../img/st-cosme.jpg'


export class SaintCosme extends Component {


    render() {
        return <section className="projets-page">
        <div className="container-narrow">
            <h1>Prieuré Saint-Cosme demeure de Ronsard</h1>
            <article>
                <img src={stCosmeLogoLight} alt="Logo du prieuré Saint-Cosme demeure de Ronsard"/>
                <img src={stCosmeLogo} alt="Logo du prieuré Saint-Cosme demeure de Ronsard"/>
                <h2>Projet : Prieuré Saint-Cosme demeure de Ronsard</h2>
                <p>
                    Prieuré Saint-Cosme demeure de Ronsard, site culturel, le conseil départemental ayant lancé une appel d'offre pour son nouveau site et dans l'optique de remporter cet appel, nous avons mis en place un site internet fictif qui représente les maquettes proposées.
                </p>
                <p>
                    Intégration statique en HTML CSS et JavaScript.
                </p>
            </article>
            <aside>
                <img src={stCosme} alt="Haut de page du Prieuré Saint-Cosme demeure de Ronsard"/>
                <a href="https://www.montoya.studio/st-cosme" target="_blank" rel="noopener">Visiter le site</a>
            </aside>
        </div>
        <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    </section>
    }
}