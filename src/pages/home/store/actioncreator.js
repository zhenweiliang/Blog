import * as C from './constant'
import Axios from 'axios'

export const getTopicList = () => {
  return (dispatch) => {
    Axios.get('/api/home.json')
      .then((data) => {
        dispatch({ type: C.TOPIC_LIST, payload: data.data.data.topicList })
      })
      .catch((err) => {throw err})
  }
}

export const getBlogList = () => {
  return (dispatch) => {
    Axios.get('/api/home.json')
      .then((data) => {
        dispatch({ type: C.BLOG_LIST, payload: data.data.data.articleList })
      })
      .catch((err) => {throw err})

    Axios.get('/api/homeList.json')
      .then((data) => {
        dispatch({ type: C.BLOG_LIST_MORE, payload: data.data.data })
      })
      .catch((err) => {throw err})
  }
}

export const loadMore = () => {
  return { type: C.LOAD_MORE }
}
