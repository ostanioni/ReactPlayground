import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from "mobx-react"

import settingsStore from 'stores/settingsStore'
import themesStore   from 'stores/themesStore'

class Main extends React.Component {
    render() {
      return (
        <Provider settingsStore={settingsStore} themesStore={themesStore}>
          <App/>
        </Provider>
      )
    }
}

ReactDOM.render( <Main/>, document.getElementById('example') )
