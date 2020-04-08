import * as C from './constant'

const defaultState = {
  topicList: [],
  blogList: [],
  blogListMore: [],
  noMore: false,
  test:'test'
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case C.TOPIC_LIST:
      newState.topicList = action.payload
      return newState
    case C.BLOG_LIST:
      newState.blogList = action.payload
      return newState
    case C.BLOG_LIST_MORE:
      newState.blogListMore = action.payload
      return newState
    case C.LOAD_MORE:
      const list = newState.blogListMore.splice(0, 3)
      newState.blogList = [...newState.blogList, ...list]
      if (newState.blogListMore.length === 0) newState.noMore = true
      return newState


    default:
      return state
  }

}
