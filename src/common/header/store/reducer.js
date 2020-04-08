import * as C from './constant'

const defaultState = {
  onFocus: false,
  list: [],
  pageNumber: 0,
  mouseEnter: false,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case C.ON_FOCUS:
      newState.onFocus = true
      return newState
    case C.SEARCH_ON_BLUR:
      newState.onFocus = false
      return newState
    case C.SEARCH_PANEL_DATA:
      newState.list = action.payload
      return newState
    case C.CHANGE_PAGE_NUMBER:
      const len = newState.list.length
      const maxPage = Math.ceil(len / 10)
      newState.pageNumber < maxPage - 1
        ? newState.pageNumber++
        : newState.pageNumber = 0
      return newState
    case C.SEARCH_MOUSE_ENTER:
      newState.mouseEnter = true
      return newState
    case C.SEARCH_MOUSE_LEAVE:
      newState.mouseEnter = false
      return newState

    default:
      return state
  }
}





