import React from 'react'
import ReactDOM from 'react-dom'
import './shared/styles/eui-global.css'
import App from './App'

import './index.css'

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderApp()