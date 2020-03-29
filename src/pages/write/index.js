import React from 'react'
import {connect} from 'react-redux'
import * as AC from './store/actioncreator'

import './index.css'

class Write extends React.Component{

  render () {
    return (<div className="write_wrapper">
      Write
    </div>)
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Write)


