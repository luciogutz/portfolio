import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'
import Portfolio from './Portfolio'
import Preview from './Preview'

render(
  (
    <Router history={ hashHistory }>
      <Route component={ Portfolio }>
        <Route path="/" component={ Home } />
        <Route path="/blog" component={ Blog } />
        <Route path="/Projects" component={ Projects } />
      </Route>
    </Router>
  ),
  document.getElementById('port')
)
