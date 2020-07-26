import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Parcours from './containers/Parcours'
import GardensList from './containers/GardensList'
import EnConstruction from './globalComponents/EnConstruction'
import Error from './globalComponents/Error'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/parcours" component={Parcours} />
            <Route exact path="/construction" component={EnConstruction} />
            <Route exact path="/liste/parcs" component={GardensList} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
