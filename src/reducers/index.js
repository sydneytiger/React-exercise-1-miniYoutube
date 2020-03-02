import { ADD_VIDEOS, UPDATE_KEYWORD, SELECT_VIDEO,CALL_ERROR } from '../constaints';
import { combineReducers } from 'redux';

const searchResultReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return [...action.payload];
    default:
      return state;
  }
};

const keywordReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return action.payload;
    default:
      return state;
  }
};

const selectedVideoReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case CALL_ERROR:
      return action.payload
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchResult: searchResultReducer,
  selectedVideo: selectedVideoReducer,
  keyword: keywordReducer,
  error: errorReducer
});

export default rootReducer;