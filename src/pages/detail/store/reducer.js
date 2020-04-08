import * as C from './constant'

const defaultState = {
  title: '',
  content: '',
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case  C.GET_ARTICLE:
          console.log(action.payload)
      newState.title = action.payload.title
      newState.content = action.payload.content
      return newState
    default:
      return state
  }

}
