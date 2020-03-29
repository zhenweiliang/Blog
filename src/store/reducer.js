import { combineReducers } from 'redux'
import * as headerReducer from '../common/header/store/reducer'
import * as detailReducer from '../pages/detail/store/reducer'
import * as homeReducer from '../pages/detail/store/reducer'
import * as loginReducer from '../pages/detail/store/reducer'
import * as writeReducer from '../pages/detail/store/reducer'

const reducer = combineReducers({
  Header: headerReducer,
  Detail: detailReducer,
  Home: homeReducer,
  Login: loginReducer,
  Write: writeReducer,
})

export default reducer
