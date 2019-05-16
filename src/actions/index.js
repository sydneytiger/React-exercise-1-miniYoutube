import {ADD_VIDEOS, UPDATE_KEYWORD} from '../constaints';

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

export {
  addVideos,
  updateKeyword
}