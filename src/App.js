import React from 'react'
import Home from './home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        </Switch>
     </BrowserRouter>   
    </div>
  )
}

export default App

