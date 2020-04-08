import React from 'react'
import { Link } from 'react-router-dom'

export default class Header_ul_right extends React.PureComponent {

  // eslint-disable-next-line react/require-render-return
  render () {

    return (<ul className="ul_right">
      <li>
        <Link to={'/write'}>
          <button className="write">
            <span className="iconfont icon-icon-checkin"></span>
            &nbsp;
            Write
          </button>
        </Link>
      </li>
      <li>
        <button className="register">Register</button>
      </li>
      {this.props.loginStatus
        ? (<Link to={'/'}>
          <li className="logout" onClick={this.props.logout}>Logout</li>
        </Link>)
        : (<Link to={'/login'}>
          <li className="login">Login</li>
        </Link>)
      }

    </ul>)

  }

}
