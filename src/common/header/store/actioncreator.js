import * as C from './constant'
import Axios from 'axios'

export const searchOnFocus = () => ({ type: C.ON_FOCUS })
export const searchOnBlur = () => ({ type: C.SEARCH_ON_BLUR })
export const changePageNumber = () => ({ type: C.CHANGE_PAGE_NUMBER })
export const searchMouseEnter = () => ({ type: C.SEARCH_MOUSE_ENTER })
export const searchMouseLeave = () => ({ type: C.SEARCH_MOUSE_LEAVE })





export const searchPanel = () => {
  return (dispatch) => {
    Axios.get('/api/headerList.json')
      .then((data) => {
        dispatch({
          type: C.SEARCH_PANEL_DATA,
          payload: data.data.data,
        })
      })
      .catch((err) => { throw err})
  }
}



