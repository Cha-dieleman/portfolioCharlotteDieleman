import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Parcours from './containers/Parcours'
import EnConstruction from './globalComponents/EnConstruction'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/parcours" component={Parcours} />
            <Route exact path="/construction" component={EnConstruction} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
