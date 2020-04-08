import React from 'react'
import { connect } from 'react-redux'
import Style from './index.module.css'

class Write extends React.Component {

  render () {
    return (<div className={Style.write_wrapper}>
      <textarea name="myBlog" id="" cols="30" rows="10"
                className={Style.textArea}>
      </textarea>
      <button className={Style.button}>submit</button>
    </div>)
  }
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(Write)


