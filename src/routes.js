import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PortfolioTest from './containers/Portfolio2'
import Portfolio from './containers/Portfolio'
import Home from './containers/Home'
import ParksListContainer from './containers/ParksListContainer'
import MapContainer from './containers/MapContainer'
import Error from './containers/Error'
import Park from './containers/Park'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Portfolio}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/parksList" component={ParksListContainer}/>
            <Route exact path="/parksList/:nom" component={Park} />
            <Route exact path="/parksMap" component={MapContainer}/>
            <Route exact path="/parksMap/:nom" component={Park} />
            <Route exact path="/test" component={PortfolioTest}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
