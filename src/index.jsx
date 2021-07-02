import {render} from 'react-dom'
import React, {Component} from 'react'
import {Header} from './parts/header'
import {Accueil} from './parts/accueil'
import {PortFolio} from './parts/portfolio'
import {Contact} from './parts/contact'
import {Aqv} from './parts/aqv'
import {Isover} from './parts/isover'
import {Heosys} from './parts/heosys'
import {MuseeRabelais} from './parts/musee-rabelais'
import {SaintCosme} from './parts/st-cosme'
import {Footer} from './parts/footer' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import sun from './img/sun.svg'
import moon from './img/moon.svg'

class LightMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState( (state) => ({theme: !state.theme}) )
    }


    render () {
        return <>
            { !this.state.theme ? <button className="sun" onClick={this.handleClick}>
                <img src={sun} alt="Basculer vers le mode clair"/>
            </button> : <button className="moon" onClick={this.handleClick}>
                <img src={moon} alt="Basculer vers le mode sombre"/>
            </button> }
            <div className={ !this.state.theme ? "dark-theme" : "light-theme" }>
                <Router>
                    <header>
                        <Header />
                    </header>

                    <Route path="/" exact component={Accueil} />
                    <Route path="/Portfolio" exact component={PortFolio} />
                    <Route path="/Contact" exact component={Contact} />
                    <Route path="/Auxquatrevents" exact component={Aqv} />
                    <Route path="/Isover" exact component={Isover} />
                    <Route path="/Heosys" exact component={Heosys} />
                    <Route path="/Saint-Cosme" exact component={SaintCosme} />
                    <Route path="/Musee-Rabelais" exact component={MuseeRabelais} />
                    
                    <footer>
                        <Footer />
                    </footer>
                </Router>
            </div>
        </>
    }

}

render (
    <LightMode />, document.getElementById('root')
)