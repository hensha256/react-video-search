import React from 'react'

class SearchBar extends React.Component {

  state= {
    searchTerm: ''
  }

  onInputChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  onFormSubmit = event => {
    // preventDefault prevents the app from refreshing when the search is submimtted
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm)
  }

  render() {
    return (
      //search-bar is our name so we can add css styling later
      //ui segment uses semantic-ui to add a nice box around it
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar