import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Portfolio from './containers/Portfolio'
import Home from './containers/Home'
import ParksContainer from './containers/ParksListContainer'
import ParksMapContainer from './containers/ParksMapContainer'
import Error from './containers/Error'
import Park from './containers/Park'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Portfolio}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/parksList" component={ParksContainer}/>
            <Route exact path="/parksList/:nom" component={Park} />
            <Route exact path="/parksMap" component={ParksMapContainer}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
