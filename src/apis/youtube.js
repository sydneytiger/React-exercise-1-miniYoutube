import axios from 'axios';

const KEY = 'AIzaSyBoDS-oLRus7qiMEAXwK-VY1i3fgCYsEuQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});