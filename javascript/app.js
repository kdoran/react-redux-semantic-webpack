// starting point for the frontend

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'

import SiteHeader from 'site-header'

import HomePage from 'home-page'

require('./app.less')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <SiteHeader />
        <Route exact path='/' component={HomePage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
