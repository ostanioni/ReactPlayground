import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { Provider } from "mobx-react"

import settingsStore from 'stores/settingsStore'
import   themesStore from 'stores/themesStore'
import     langStore from 'stores/langStore'

import Layout from 'layouts/Layout'


class App extends React.Component {
  render() {
    return (
      <Provider settingsStore={settingsStore} langStore={langStore}>
        <ThemeProvider theme={themesStore[settingsStore.theme]}>
          <Router>
            <Layout/>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('example') )
