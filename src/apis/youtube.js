import axios from 'axios';

const KEY = 'AIzaSyCH9jaMnrb-RN1YdfOoK6TV2tSruImGC70';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});