import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './containers/Homepage'
import AppContainer from './containers/AppContainer'

const Routes = () => {
  
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/app" component={AppContainer} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default Routes
