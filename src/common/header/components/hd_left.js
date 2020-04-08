import React from 'react'
import { Link } from 'react-router-dom'

export default class HeaderLeft extends React.PureComponent {
  /*Display search_list by paging
  * 1)get the data to be rendered by pageNum & list
  * 2)rendered the data
  * */
  renderList = () => {
    const { list, pageNumber } = this.props
    const data = [...list].splice(pageNumber * 10, 10) // 10 items per page
    return data.map((item, index) => {
      return <a href="#" key={index} className="search_info_item">{item}</a>
    })
  }

  render () {
    return (
      <ul className="ul_left">
        <li><Link to={'/'}>
          <img className="logo" src={require('../../../statics/images/logo.png')} alt=""/>
        </Link></li>
        <li><a href="#" className="download">Download</a></li>
        <li><input type="text" className={this.props.onFocus ? 'search active' : 'search'}
                   onFocus={() => {this.props.searchOnFocus(this.props.list) }}
                   onBlur={this.props.searchOnBlur}
                   placeholder="search"/>
          <span className="iconfont icon-sousuo"></span>
        </li>
        {this.display_search_panel(this.props.onFocus || this.props.mouseEnter)}
      </ul>
    )
  }

  // render the search panel, Mouse Lick || Mouse enter the panel will display
  display_search_panel = (boolean) => {
    if (boolean) {
      return (
        <div className='search_panel'
             onMouseEnter={this.props.searchMouseEnter}
             onMouseLeave={this.props.searchMouseLeave}>
          <span>Hot Search</span>
          <div className="search_refresh" onClick={() => {this.props.changePageNumber(this.spinRef) }}>
            <span className="iconfont icon-spin"
                  ref={ref => this.spinRef = ref}
            ></span>
            <span> Refresh</span>
          </div>
          <div className="search_list">
            {this.renderList()}
          </div>
        </div>)
    } else {
      return null
    }
  }
}
