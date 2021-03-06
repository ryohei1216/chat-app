import {React, useContext} from 'react'
import {Redirect, Route} from 'react-router-dom'
import Room from './pages/Room'
import {AuthContext} from './AuthService'

const LoggedInRoute = ({component: Component, rest}) => {
  const user = useContext(AuthContext)
  return (
    <Route render = {props => 
      user ? (
        <Component {...props} />
      ): (
        <Redirect to = '/login' />
      )
    } {...rest} />
  )
}

export default LoggedInRoute