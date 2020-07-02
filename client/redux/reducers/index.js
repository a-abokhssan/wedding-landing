import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import guests from './guests'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    guests
  })

export default createRootReducer
