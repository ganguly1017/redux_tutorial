import React from 'react'
import LoginForm from './components/LoginForm'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ViewData from './components/ViewData'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/view" component={ViewData} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
