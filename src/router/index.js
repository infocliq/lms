import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Main from '../layouts/Main'

// views
import Login from '../authentication/login'
import { Dashboard } from '../views/dashboard'
import { Letters } from '../views/letters'
import { CreateLetters } from '../views/letters/create'
import { Departments } from '../views/departments'
import { Categories } from '../views/categories'
import { getAdmin } from '../common/sessions/common'
// import { ErrorPage } from '../views/error/404'

export default () => {
  const isAdmin = getAdmin()
  const navigate = useHistory()

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route>
          <Main>
            <Switch>
              {isAdmin === '1' ?
                <>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/assign-letter' exact component={CreateLetters} />
                  <Route path='/departments' exact component={Departments} />
                  <Route path='/categories' exact component={Categories} />
                  <Route path='/letters' exact component={Letters} />
                </>
                : <Route path='/letters' exact component={Letters} />
              }
              <Route path='*' exact={true} component={Letters} />


            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}

