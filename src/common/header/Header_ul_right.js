import React from 'react'


export default class Header_ul_right extends React.PureComponent{

  // eslint-disable-next-line react/require-render-return
  render () {
    return ( <ul className="ul_right">
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
    </ul>)

  }

}
