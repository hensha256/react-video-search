import React from 'react'
import './VideoItem.css'

class VideoItem extends React.Component {
  render() {
    // description, id and urls are all first level json of the image in the list
    // i.e. image.description, image.id and image.urls
    const { snippet } = this.props.video;
    return(
      <div className="video-item item" onClick={() => this.props.onVideoClick(this.props.video)}>
        <div className="ui small image">
          <img
            alt={snippet.title}
            src={snippet.thumbnails.medium.url}
          />
        </div>
        <div className="middle aligned content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    )
  }
}

export default VideoItem