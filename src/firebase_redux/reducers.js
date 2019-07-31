import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import MainReducer from './MainReducer'
import SelectionViewReducer from './SelectionViewReducer'
import PAReducer from './PAReducer'
import UIReducer from './UIReducer'



export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  local:MainReducer,
  selectionView: SelectionViewReducer,
  PA:PAReducer,
  UI: UIReducer,
})
