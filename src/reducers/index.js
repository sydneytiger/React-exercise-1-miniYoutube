import { ADD_VIDEOS, UPDATE_KEYWORD} from '../constaints';
import { combineReducers } from 'redux';
import store from '../store';

const initialState = {
  searchResult: [],
  selectedVideo: null,
  keyword: ''
}

const videoReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_VIDEOS:
      return {searchResult: [...action.payload]}
    default:
      return state;
  }
};

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_KEYWORD:
      return Object.assign(state, {keyword: action.payload});
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  videoReducer,
  searchReducer
});

export default rootReducer;