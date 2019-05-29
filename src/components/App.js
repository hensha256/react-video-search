import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import LargeVideo from './LargeVideo'
import youtube from '../api/youtube'

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null,
    videoSelected: false,
  }

  onSearchSubmit = (searchTerm) => {
    youtube.get(`/search`, {
      params: { q: searchTerm},
    })
    .then(response => {
      this.setState({
        videos: response.data.items,
        selectedVideo: null,
        videoSelected: false,
      })
    })
  }

  onVideoClick = (video) => {
    this.setState({
      selectedVideo: video,
      videoSelected: true,
    })
  }

  render() {
    var videoDisplay = <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos}/>
    if (this.state.videoSelected) {
       videoDisplay = (
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <LargeVideo video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      )
    } else {

    }

    return (
      // adding ui container here styles the search bar to not span the entire page
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        {videoDisplay}
      </div>
    )
  }
}

export default App;