import * as C from './constant'

const defaultState = {
  onFocus: false,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case C.ON_FOCUS:
      newState.onFocus = true
      return newState;
    case C.SEARCH_ON_BLUR:
      newState.onFocus = false
      return newState




    default: return state
  }
}





