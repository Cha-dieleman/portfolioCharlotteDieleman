import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Portfolio from './containers/Portfolio'
import Home from './containers/Home'
import ParksContainer from './containers/ParksContainer'
import EnConstruction from './globalComponents/EnConstruction'
import Error from './globalComponents/Error'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/construction" component={EnConstruction} />
            <Route path="/parksList" component={ParksContainer} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
