import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import loginReducer from '../pages/login/store/reducer'
import writeReducer from '../pages/write/store/reducer'

const reducer = combineReducers({
  header: headerReducer,
  detail: detailReducer,
  home: homeReducer,
  login: loginReducer,
  write: writeReducer,
})

export default reducer
