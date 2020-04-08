import React from 'react'
import { connect } from 'react-redux'
import * as AC from './store/actioncreator'
import Header_ul_left from './Header_ul_left'
import Header_ul_right from './Header_ul_right'
import * as AC_login from '../../pages/login/store/actioncreator'

import './index.css'

class Header extends React.Component {

  componentDidMount () {

  }

  render () {
    const onFocus = this.props.onFocus
    const searchOnFocus = this.props.searchOnFocus
    const searchOnBlur = this.props.searchOnBlur
    const list = this.props.list
    const pageNumber = this.props.pageNumber
    const changePageNumber = this.props.changePageNumber
    const searchMouseEnter = this.props.searchMouseEnter
    const mouseEnter = this.props.mouseEnter
    const searchMouseLeave = this.props.searchMouseLeave
    const loginStatus = this.props.loginStatus
    const logout = this.props.logout
    return (<div className="header_wrapper clearfix">
      <Header_ul_left onFocus={onFocus}
                      searchOnFocus={searchOnFocus}
                      searchOnBlur={searchOnBlur}
                      list={list}
                      pageNumber={pageNumber}
                      changePageNumber={changePageNumber}
                      searchMouseEnter={searchMouseEnter}
                      mouseEnter={mouseEnter}
                      searchMouseLeave={searchMouseLeave}
      />
      <Header_ul_right loginStatus={loginStatus}
                       logout={logout}/>

    </div>)
  }

}

const mapState = (state) => {
  return {
    onFocus: state.header.onFocus,
    list: state.header.list,
    pageNumber: state.header.pageNumber,
    mouseEnter: state.header.mouseEnter,
    loginStatus: state.login.loginStatus,
  }
}

const mapDispatch = (dispatch) => ({
  searchOnFocus (list) {
    if (list.length == 0) {dispatch(AC.searchPanel())}
    dispatch(AC.searchOnFocus())
  },
  searchOnBlur () {
    dispatch(AC.searchOnBlur())
  },
  changePageNumber (spin) {
    //todo : make the spin Icon rotate
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
    dispatch(AC.changePageNumber())
  },
  searchMouseEnter () {
    dispatch(AC.searchMouseEnter())
  },
  searchMouseLeave () {
    dispatch(AC.searchMouseLeave())
  },
  logout () {
    dispatch(AC_login.logout())
  },

})

export default connect(mapState, mapDispatch)(Header)


