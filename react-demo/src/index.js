import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import './index.css'
import { MainRoutes } from './routes'
import App from './App'
import 'antd/dist/antd.css'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/admin" render={(routeProps) => <App {...routeProps} />} />
      {MainRoutes.map((route) => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to="/404" />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)
