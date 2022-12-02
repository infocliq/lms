import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Main from '../layouts/Main'

// views
import Login from '../authentication/login'
import { Dashboard } from '../views/dashboard'
import { Letters } from '../views/letters'
import { LetterUpdate } from '../views/letters/update'
import { CreateLetters } from '../views/letters/create'
import { Users } from '../views/users'
import { Categories } from '../views/categories'
import { Departments } from '../views/departments'
import { getIsAdmin } from '../common/sessions/common'
import { ErrorPage } from '../views/error/404'
import { UserSettings } from '../views/settings'
export default () => {
  const isAdmin = getIsAdmin()
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
                  <Route path='/users' exact component={Users} />
                  <Route path='/categories' exact component={Categories} />
                  <Route path='/departments' exact component={Departments} />
                  <Route path='/letters' exact component={Letters} />
                  <Route path='/reply' exact component={LetterUpdate} />
                  <Route path='/settings' exact component={UserSettings} />
                </>
                :
                <>
                  <Route path='/letters' exact component={Letters} />
                  <Route path='/reply' exact component={LetterUpdate} />
                  <Route path='/settings' exact component={UserSettings} />
                </>
              }
              <Route path='*' exact={true} component={ErrorPage} />


            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}

