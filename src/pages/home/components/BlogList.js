import React from 'react'
import { Link } from 'react-router-dom'
import style from './bloglist.module.css'

export default class BlogList extends React.PureComponent {

  render () {
    const blogList = this.props.blogList
    const loadMore = this.props.loadMore
    const noMore = this.props.noMore
    return (<React.Fragment>
        {blogList.map((item, index) => {
          return (
            <Link key={index} to={`/detail/${item.id}`}>
              <div className={style.home_bloglist_wrapper}>
                <img alt='' className={style.pic} src={item.imgUrl}/>
                <div className={style.list_info}>
                  <h3 className={style.title}>{item.title}</h3>
                  <p className={style.desc}>{item.desc}</p>
                </div>
              </div>
            </Link>
          )
        })}

        {noMore
          ? <div className={style.loadMore}>No More...</div>
          : <div className={style.loadMore} onClick={loadMore}>loadMore</div>}

      </React.Fragment>
    )
  }

}
