import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'

import Component from './components/component'

const render = () => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render()
