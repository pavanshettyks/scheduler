import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import MainReducer from './MainReducer'
import SelectionViewReducer from './SelectionViewReducer'



export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  local:MainReducer,
  selectionView: SelectionViewReducer,
})
