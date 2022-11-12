import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../layouts/Main'

// views
import Login from '../views/auth/login'
import { Dashboard } from '../views/dashboard'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Dashboard} />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}

