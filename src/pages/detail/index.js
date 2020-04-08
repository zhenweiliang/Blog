import React from 'react'
import {connect} from 'react-redux'
import * as AC from './store/actioncreator'

import "./detail.module.css"

class Detail extends React.Component{

  render () {
    return (<div className="detail_wrapper">
      Detail
    </div>)
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Detail)


