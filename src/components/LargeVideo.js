import React from 'react'

class LargeVideo extends React.Component {

  render() {
    const video= this.props.video
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
      <div>
        <div className="ui embed">
          <iframe
            title="video player"
            width="560"
            height="315"
            src={videoSrc}
            allowfullscreen>
          </iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }

}

export default LargeVideo