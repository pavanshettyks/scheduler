import React from 'react';

import Header from './Components/Header'
import Day from './Components/Day'
import Selection from './Components/Selection'
import { Provider } from 'react-redux';
import store from "./firebase_redux/store"

import './App.css';

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <Header />
          <Selection />

          <Day day={'Monday'} />
          <Day day={'Tuesday'} />
          <Day day={'Wednesday'} />
          <Day day={'Thursday'} />
          <Day day={'Friday'} />
        </div>
    </Provider>
  );
}

export default App;
