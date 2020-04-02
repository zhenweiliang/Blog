import * as C from './constant'

const defaultState = {
  onFocus: false,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  console.log(state)
  if(action.type===C.ONFOCUS) {
    newState.onFocus = true
    return newState
  }
      return state
  }


