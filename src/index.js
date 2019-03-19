import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from "mobx-react"

import settingsStore from 'stores/settingsStore'
import   themesStore from 'stores/themesStore'
import     langStore from 'stores/langStore'
import     dataStore from 'stores/dataStore'

import Layout from 'layouts/Layout'


class App extends React.Component {
  render() {
    return (
      <Provider settingsStore={settingsStore} langStore={langStore} themesStore={themesStore} dataStore={dataStore}>
          <Router>
            <Layout/>
          </Router>
      </Provider>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('edf720cb-b61fe') )
