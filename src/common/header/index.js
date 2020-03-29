import React from 'react'
import {connect} from 'react-redux'
import * as AC from './store/actioncreator'

import './index.css'

class Header extends React.Component{

  render () {
    return (<div className="header_wrapper">
      Header
    </div>)
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Header)


