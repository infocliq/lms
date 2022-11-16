import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../layouts/Main'

// views
import Login from '../views/auth/login'
import { Dashboard } from '../views/dashboard'
import { Letters } from '../views/letters'
import { CreateLetters } from '../views/letters/create'
import { Departments } from '../views/departments'
import { Categories } from '../views/categories'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/letters' exact component={Letters} />
              <Route path='/assign-letter' exact component={CreateLetters} />
              <Route path='/departments' exact component={Departments} />
              <Route path='/categories' exact component={Categories} />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}

