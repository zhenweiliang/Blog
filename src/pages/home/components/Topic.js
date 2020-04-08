import React from 'react'

import './topic.css'

export default class Topic extends React.PureComponent {

  render () {
    const topicList = this.props.topicList
    return (<div className="topic_wrapper">
      {topicList.map((item) => {
        return (<div key={item.id} className="topic_item">
          <img src={item.imgUrl}/>
          {item.title}
        </div>)
      })}
    </div>)
  }

}
