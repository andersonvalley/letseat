import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './page/AboutPage'
import DeliveryPage from './page/DeliveryPage'
import MainPage from './page/MainPage'
import RestoransPage from './page/RestoransPage'
import SupportPage from './page/SupportPage'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/support" exact>
        <SupportPage />
      </Route>
      <Route path="/delivery" exact>
        <DeliveryPage />
      </Route>
      <Route path="/restorans" exact>
        <RestoransPage />
      </Route>
    </Switch>
  )
}

export default App
