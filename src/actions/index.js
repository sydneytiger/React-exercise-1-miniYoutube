import { ADD_VIDEOS, UPDATE_KEYWORD, SELECT_VIDEO, CALL_ERROR } from '../constaints';
import youtube from '../apis/youtube';

const searchVideos = keyword => async dispatch => {
  try {
    const response = await youtube.get('/search', {
      params: { q: keyword }
    });
  
    const result = response.data.items.filter(f => f.id.videoId);
  
    dispatch({
      type: ADD_VIDEOS,
      payload: result
    });
  
    dispatch({
      type: SELECT_VIDEO,
      payload: result[0]
    });
  } catch(error){
    dispatch({
      type: CALL_ERROR,
      payload: error.message
    });
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
  searchVideos,
  updateKeyword,
  selectVideo
}