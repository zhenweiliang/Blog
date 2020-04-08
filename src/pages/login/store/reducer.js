import * as C from './constant'

const defaultState = {
  loginStatus: false,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case C.LOGIN:
      newState.loginStatus = action.payload
      return newState
    case C.LOGOUT:
      newState.loginStatus = false
      return newState

    default:
      return state
  }

}
