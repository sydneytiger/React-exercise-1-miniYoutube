import { ADD_VIDEOS, UPDATE_KEYWORD, SELECT_VIDEO } from '../constaints';
import { combineReducers } from 'redux';

const searchResult = (state = [], action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return [...action.payload];
    default:
      return state;
  }
};

const keyword = (state = '', action) => {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return action.payload;
    default:
      return state;
  }
};

const selectedVideo = (state = null, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchResult,
  selectedVideo,
  keyword
});

export default rootReducer;