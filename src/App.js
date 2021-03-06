import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <>
        <AuthProvider>
          <h1>Chat</h1>
          <Router>
            <Switch>
              <LoggedInRoute path = "/" exact component={Room}/>
              <Route path = "/login" exact component={Login}/>
              <Route path="/signup/" exact component={SignUp}/>
            </Switch>
          </Router>
        </AuthProvider>
        </>
    )
}

export default App