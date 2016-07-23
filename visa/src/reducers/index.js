import { combineReducers } from 'redux'
import todos from './todos'
import admin from './admin'
import counter from './counter'
import emails from './emails'

export default combineReducers({
  todos,
  admin,
  emails,
  counter
})
