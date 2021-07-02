import React, {Component} from 'react'
import facebook from '../img/facebook.svg'
import facebookLight from '../img/facebook-light.svg'
import linkedin from '../img/linkedin.svg'
import linkedinLight from '../img/linkedin-light.svg'

export class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rgpd: false,
            mentions: false
        }
        this.handlePolitique = this.handlePolitique.bind(this);
        this.handleMentions = this.handleMentions.bind(this);
    }

    handlePolitique (e) {
        e.preventDefault()
        this.setState( (state) => ({rgpd: !state.rgpd}) )
    }

    handleMentions (e) {
        e.preventDefault();
        this.setState ( (state) => ({ mentions: !state.mentions }) )
    }


    render () {
        return <div className="container-narrow">
            <section className="socials">
                <ul className="dark-socials">
                    <li>
                        <a href="https://www.facebook.com/gregoire.montoya.54" rel="noopener" target="_blank">
                            <span className="screen-reader-text">Profil FaceBook de Grégoire</span>
                            <img src={facebook} alt="Accéder au profil FaceBook de Montoya Grégoire"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://fr.linkedin.com/in/gr%C3%A9goire-montoya-5a43941b9" rel="noopener" target="_blank">
                            <span className="screen-reader-text">Profil Linkedin de Grégoire</span>
                            <img src={linkedin} alt="Accéder au profil Linkedin de Grégoire Montoya"/>
                        </a>
                    </li>
                </ul><ul className="light-socials">
                    <li>
                        <a href="https://www.facebook.com/gregoire.montoya.54" rel="noopener" target="_blank">
                            <span className="screen-reader-text">Profil FaceBook de Grégoire</span>
                            <img src={facebookLight} alt="Accéder au profil FaceBook de Montoya Grégoire"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://fr.linkedin.com/in/gr%C3%A9goire-montoya-5a43941b9" rel="noopener" target="_blank">
                            <span className="screen-reader-text">Profil Linkedin de Grégoire</span>
                            <img src={linkedinLight} alt="Accéder au profil Linkedin de Grégoire Montoya"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="mentions">
                <a href="#" onClick={this.handlePolitique}>Politique de confidentialité</a>
                <a href="#" onClick={this.handleMentions}>Mentions légales</a>
            </section>

            { this.state.rgpd &&  <section className="politique">
                <h2>Politique de confidentialité</h2>
                <h3>Gestion de vos données</h3>
                <article>
                    <strong>Information sur le destinataire, durée de vie de vos données et précision en cas de non-fourniture des données. </strong>
                    <p>
                        Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par <span>Montoya Grégoire Propriétaire du site</span>. Ces informations ont pour but de <span>répondre au demande de contact via le formulaire.</span> La base légale du traitement est le <span>consentement de l’utilisateur.</span><br/>
                        Les données collectées seront communiquées au seul destinataire suivant : <span>Montoya Grégoire, propriétaire du site <a href="https://www.montoya.studio">https://wwww.montoya.studio</a></span><br />
                        Les données sont conservées pendant <span>le temps de l’échange avec Montoya Grégoire ou pour une durée maximale de 6 mois.</span><br />
                        La non-fourniture des données obligatoires entrainera une impossibilité à communiquer avec le propriétaire du site par le biais du formulaire du site. Les données optionnelles telles que le Nom seront conservées pour une durée identique à celle citée ci-dessus. L’absence de ces données non obligatoires n’aura aucune conséquence sur le traitement initial de demande de contact et n’entravera d’aucune façon la communication que cela soit par le formulaire du site ou tout autre méthode mise à place sur la page Contact.
                    </p>

                    <strong>Vos droits sur vos données</strong>
                    <p>
                        Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Vous pouvez retirer à tout moment votre consentement au traitement de vos données ; Vous pouvez également vous opposer au traitement de vos données.<br />
                        Consultez le site <a href="https://www.cnil.fr">cnil.fr</a> pour plus d’informations sur vos droits.<br />

                        Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter  :<br />

                            <a href="mailto:gregoire@montoya.studio">gregoire@montoya.studio</a> <br />

                        Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                    </p>
                </article>
                <button onClick={this.handlePolitique}>Fermer</button>
            </section> }

            { this.state.mentions && <section className="mention-legale">
                <h2>Mentions légales</h2>
                <h3>Edition du site</h3>
                <article>
                    <p>
                    En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet <a href="https://www.montoya.studio" rel="noopener">https://www.montoya.studio</a> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi: <br />

                    Propriétaire du site : Grégoire Montoya – Contact : <a href="mailto:gregoire@montoya.studio">gregoire@montoya.studio</a> <br />

                    Hébergeur : SARL O2Switch – 222-224 Boulevard Gustave Flaubert – 63000 Clermont-Ferrand – Téléphone : +33 4 44 44 60 40<br />

                    Délégué à la protection des données : Grégoire Montoya – <a href="mailto:gregoire@montoya.studio">gregoire@montoya.studio</a><br />

                    Autres contributeurs : Les mentions légales sont proposées par le générateur de mentions légales de La Webeuse.<br />
                    </p>
                </article>
                <button onClick={this.handleMentions}>Fermer</button>
            </section> }
        </div>
    }
}