import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Comments.css'
import Comment from './Comment'

const Comments = (props) => {
  return (
    <div className="Comments">
      {props.comments.map(comment => {
        return (
          <Comment 
            className="Comment"
            key={comment.text}
            comment={comment} 
          />
        )
      })}

      <p className="timeFromNow">{moment().startOf('hour').fromNow()}</p>
      
      <input placeholder="Add a comment" />
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default Comments
