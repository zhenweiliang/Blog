import React from 'react'
import Style from './topic.module.css'

export default class Topic extends React.PureComponent {

  render () {
    const topicList = this.props.topicList
    return (<div className={Style.topic_wrapper}>
      {topicList.map((item) => {
        return (<div key={item.id} className={Style.topic_item}>
          <img src={item.imgUrl} alt="" />
          {item.title}
        </div>)
      })}
    </div>)
  }
}
