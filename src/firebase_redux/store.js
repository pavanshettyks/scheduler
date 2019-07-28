import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './firebaseConfig'
import {  rootReducer } from './reducers'
//import initialState from './initialState'

const initialState ={

}
firebase.initializeApp(firebaseConfig)
//firebase.firestore().settings({ timestampsInSnapshots: true })

const enhancers = [
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      userProfile: 'count-signs',
      useFirestoreForProfile: true,
    }),
  ]


  const composedEnhancers = compose(
    ...enhancers
  )
  
  const store = createStore(rootReducer, initialState, composedEnhancers)
  
  
  export default store