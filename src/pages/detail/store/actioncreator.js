import axios from 'axios'
import * as C from './constant'

export const getArticle = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((data) => {
      console.log(data.data.data)
      return dispatch({
        type: C.GET_ARTICLE,
        payload: data.data.data,
      })
    })
  }

}
