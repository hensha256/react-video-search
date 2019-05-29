import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {

  render() {
      const renderedVideos = this.props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoClick={this.props.onVideoClick} video={video}/>
      })
      return <div className="ui divided items">{renderedVideos}</div>
  }
}

export default VideoList