import React from 'react';

import Header from './Components/Header/Header'
import Scheduler from './Components/Scheduler'
import AddUser from './Components/Users/AddUser'
import PAScreen from './Components/PA/PAScreen'

import { Provider } from 'react-redux';
import store from "./firebase_redux/store"
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <div className="App">
                  <Header />
                  <Switch>
                     <Route exact path='/' >
                       <Redirect to = '/scheduler' />
                       </Route>
                       
                      <Route exact path='/scheduler' component={ Scheduler } />
                      <Route path='/AddUser' component={AddUser} />
                      <Route path='/PAScreen' component={PAScreen} />
                      
	                </Switch>

         </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
