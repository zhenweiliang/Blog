import React from 'react'
import {connect} from 'react-redux'
import * as AC from './store/actioncreator'

import './index.css'

class Login extends React.Component{

  render () {
    return (<div className="login_wrapper">
      Login
    </div>)
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Login)


