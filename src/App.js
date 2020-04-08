import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Login from './pages/login'
import Detail from './pages/detail'
import Write from './pages/write'
import Home from './pages/home'
import './app.css'

class App extends React.Component {

  render () {
    return (<Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/write' exact component={Write}/>
            <Route path='/detail/:id' exact component={Detail}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
