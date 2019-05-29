import axios from 'axios'

const KEY = 'AIzaSyDFvcnC9un6AQhC46y4JAV4wKb7qNC9m0o';

// creates an instance of the axios client
// with customised properties
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});