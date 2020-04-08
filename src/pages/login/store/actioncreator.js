import * as C from './constant'

export const idVerify = (id, pw) => {
  const result = true // axios.post to very id&pw from server
  return ({ type: C.LOGIN, payload: result })
}

export const logout = () => {
  return ({ type: C.LOGOUT })
}
