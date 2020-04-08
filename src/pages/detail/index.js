import React from 'react'
import { connect } from 'react-redux'
import Style from './index.module.css'
import * as AC from './store/actioncreator'

class Detail extends React.Component {

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getArticle(id)
  }

  render () {
    return (<div className={Style.detail_wrapper}>
      <div className={Style.header}>{this.props.title}</div>
      <div className={Style.content} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    </div>)
  }

}

const mapState = (state) => ({
  title: state.detail.title,
  content: state.detail.content,
})

const mapDispatch = (dispatch) => ({
  getArticle (id) {
    dispatch(AC.getArticle(id))
  },
})

export default connect(mapState, mapDispatch)(Detail)


