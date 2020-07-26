import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Parcours from './containers/Parcours'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/parcours" component={Parcours} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
