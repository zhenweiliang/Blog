import React from 'react'
import { connect } from 'react-redux'
import * as AC from './store/actioncreator'

import './index.css'

class Header extends React.Component {

  render () {
    const onFocus = this.props.onFocus
    const searchOnFocus = this.props.searchOnFocus
    const searchOnBlur = this.props.searchOnBlur
    return (<div className="header_wrapper clearfix">
      <ul className="ul_left">
        <li><img className="logo" src={require('../../statics/images/logo.png')} alt=""/></li>
        <li><a href="#" className="download APP">Download</a></li>
        <li>
          <input type="text" className={onFocus ? 'search active' : 'search'}
                 onFocus={searchOnFocus}
                 onBlur={searchOnBlur}
                 placeholder="search"/>
          <span className="iconfont icon-sousuo"></span>
        </li>
      </ul>
      <ul className="ul_right">
        <li>
          <button className="write">
            <span className="iconfont icon-icon-checkin"></span>
            &nbsp;
            Write
          </button>
        </li>
        <li>
          <button className="register">Register</button>
        </li>
        <li className="login">Login</li>
      </ul>

    </div>)
  }

}

const mapState = (state) => {
  return {
    onFocus: state.header.onFocus,
  }
}

const mapDispatch = (dispatch) => ({
  searchOnFocus () {
    dispatch(AC.searchOnFocus())
  },
  searchOnBlur () {
    dispatch(AC.searchOnBlur())
  },

})

export default connect(mapState, mapDispatch)(Header)


