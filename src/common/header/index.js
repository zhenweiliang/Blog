import React from 'react'
import { connect } from 'react-redux'
import * as AC from './store/actioncreator'
import HeaderLeft from './components/hd_left'
import HeaderRight from './components/hd_right'
import * as AC_login from '../../pages/login/store/actioncreator'
import './index.css'

class Header extends React.Component {

  render () {
    const {
      onFocus, searchOnFocus, searchOnBlur, list, pageNumber, changePageNumber,
      searchMouseEnter, mouseEnter, searchMouseLeave, loginStatus, logout,
    } = this.props
    return (<div className="header_wrapper clearfix">
      <HeaderLeft onFocus={onFocus}
               searchOnFocus={searchOnFocus}
               searchOnBlur={searchOnBlur}
               list={list}
               pageNumber={pageNumber}
               changePageNumber={changePageNumber}
               searchMouseEnter={searchMouseEnter}
               mouseEnter={mouseEnter}
               searchMouseLeave={searchMouseLeave}
      />
      <HeaderRight loginStatus={loginStatus}
                logout={logout}
      />
    </div>)
  }
}

const mapState = (state) => ({
  onFocus: state.header.onFocus,
  list: state.header.list,
  pageNumber: state.header.pageNumber,
  mouseEnter: state.header.mouseEnter,
  loginStatus: state.login.loginStatus,
})

const mapDispatch = (dispatch) => ({
  searchOnFocus (list) {
    if (list.length === 0) {dispatch(AC.searchPanel())}
    dispatch(AC.searchOnFocus())
  },
  searchOnBlur () {
    dispatch(AC.searchOnBlur())
  },
  changePageNumber (spin) {
    //todo make the icon spin
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


