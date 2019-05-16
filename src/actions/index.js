import { ADD_VIDEOS, UPDATE_KEYWORD, SELECT_VIDEO } from '../constaints';

const addVideos = videos => {
  return {
    type: ADD_VIDEOS,
    payload: videos
  }
};

const updateKeyword = val => {
  return {
    type: UPDATE_KEYWORD,
    payload: val
  }
};

const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}

export {
  addVideos,
  updateKeyword,
  selectVideo
}