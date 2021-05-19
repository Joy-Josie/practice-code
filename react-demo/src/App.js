import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AdminRoutes } from './routes'
import Frame from './components/Frame'

import './App.css'

function App() {
  return (
    <Frame className="App">
      <h1>app</h1>
      <Switch>
        {AdminRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(routeProps) => {
              return <route.component {...routeProps} />
            }}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    </Frame>
  )
}

export default App
