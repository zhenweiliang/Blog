import React from 'react'
import Style from './index.module.css'
import { connect } from 'react-redux'
import $ from 'jquery'
import * as AC from './store/actioncreator'
import Topic from './components/Topic'
import BlogList from './components/BlogList'

class Home extends React.Component {

  componentDidMount () {
    this.props.getTopicList()
    this.props.getBlogList()
// Back to Top animation by jQuery
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 50) {
        $('#btn_top').fadeIn()
      } else {
        $('#btn_top').fadeOut()
      }
    })
    $('#btn_top').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 500)
    })
    //end of jquery
  }

  render () {
    return (<div className={Style.home_wrapper}>
      <div className={Style.home_left}>
        <img className={Style.banner_img} alt=''
             src="/images/tt.jpg"/>
        <Topic topicList={this.props.topicList}/>
        <BlogList
          blogList={this.props.blogList}
          loadMore={this.props.loadMore}
          noMore={this.props.noMore}
        />
      </div>
      <div className={Style.home_right}></div>
      <button id="btn_top" className={Style.btn_top}>
        To Top
      </button>
    </div>)
  }

  renderTopic = () => {
    console.log(this.props.topicList)
    if (this.props.topicList !== undefined) {
      return <Topic topicList={this.props.topicList}/>
    }
  }
}

const mapState = (state) => ({
  topicList: state.home.topicList,
  blogList: state.home.blogList,
  noMore: state.home.noMore,
  test: state.home.test,
})

const mapDispatch = (dispatch) => ({
  getTopicList () {
    dispatch(AC.getTopicList())
  },
  getBlogList () {
    dispatch(AC.getBlogList())
  },
  loadMore () {
    dispatch(AC.loadMore())
  },

})

export default connect(mapState, mapDispatch)(Home)
