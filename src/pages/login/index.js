import React from 'react'
import { connect } from 'react-redux'
import Style from './index.module.css'
import { Redirect } from 'react-router-dom'
import * as AC from './store/actioncreator'

class Login extends React.Component {

  render () {
    return (<div className={Style.login_wrapper}>
      {/* display the login panel or redirect to main page up to login status  */}
      {this.props.loginStatus
        ? <Redirect to='/'/>
        : <div className={Style.login_box}>
          <input type="text" ref={id => {this.idRef = id }}
                 className={Style.input}
                 placeholder="please input your id"/>
          <input type="password" ref={password => {this.passwordRef = password }}
                 className={Style.input}
                 placeholder="please input your password"/>
          <button
            className={Style.button}
            onClick={() => {this.props.idVerify(this.idRef.value, this.passwordRef.value) }}>
            Submit
          </button>
        </div>}
    </div>)
  }

}

const mapState = (state) => ({
  loginStatus: state.login.loginStatus,
})

const mapDispatch = (dispatch) => ({
  idVerify (id, pw) {
    dispatch(AC.idVerify(id, pw))
  },
})

export default connect(mapState, mapDispatch)(Login)


