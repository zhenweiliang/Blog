import { combineReducers } from 'redux'
import * as headerReducer from '../common/header/store/reducer'
import * as detailReducer from '../pages/detail/store/reducer'
import * as homeReducer from '../pages/home/store/reducer'
import * as loginReducer from '../pages/login/store/reducer'
import * as writeReducer from '../pages/write/store/reducer'

const reducer = combineReducers({
  header: headerReducer,
  // detail: detailReducer,
  // home: homeReducer,
  // login: loginReducer,
  // write: writeReducer,
})

export default reducer
