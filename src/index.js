import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import StudentHub from './Components/StudentHub'
import AdminHub from './Components/AdminHub'
import Dev from './Components/Dev'


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/student/' component={StudentHub} />
        <Route path='/root' component={AdminHub} />
        <Route path='/dev' component={Dev} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
