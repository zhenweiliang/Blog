import React from 'react'
import {connect} from 'react-redux'
import * as AC from './store/actioncreator'

import './index.css'

class Home extends React.Component{

  render () {
    return (<div className="home_wrapper">
      Home
    </div>)
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Home)


