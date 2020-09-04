import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import StudentHub from './Components/StudentHub'
import AdminHub from './Components/AdminHub'


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/student/' component={StudentHub} />
        <Route path='/root' component={AdminHub} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
