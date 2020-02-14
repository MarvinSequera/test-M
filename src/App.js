import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Search from './components/Search'
import Tarifa from './components/Tarifa'

// Service
import Service from './service/Service.js'


class App extends Component {
  constructor() {
    super()
    this._service = new Service()
    this.state = {
      rates: [],
      existRates: Boolean
    }
  }
  getRates = (hotelId, checkin, nights) => {
    this._service.getRoomRate(hotelId, checkin, nights)
      .then(rates => {
        let rateArray = Object.values(rates.data.availableRates)
        // Condicional para gestionar cuando no hay dispo
        if (rateArray.length === 0) {
          this.setState({ existRates: false })
        } else {
          this.setState({ rates: rateArray[0], existRates: true })
        }
      })
      // Para gestionar si el servidor no responde o el Usuario no llena toda la info
      .catch(err => {
        this.setState({ existRates: false })
        console.log(err)
      })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={props => <Search getRates={this.getRates} {...props} />} />
        <Route path='/result' render={props => <Tarifa rates={this.state.rates} existRates={this.state.existRates} {...props} />} />
      </Switch>
    )
  }

}


export default App;
