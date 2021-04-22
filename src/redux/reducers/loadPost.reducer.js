import {LoadPost, ItemPost} from '../types/loadPost.types';

const INITIAL_DATA = {
  dataRespones: [],
  PostResponse: [],
};

const loadPostReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LoadPost.LOADPOST_SUCCESS:
      return {
        ...state,
        dataRespones: action.payload,
      };
    case ItemPost.ITEMPOST_SUCCESS:
      return {
        ...state,
        PostResponse: [...state.PostResponse, action.payload],
      };

    default:
      return state;
  }
};
export default loadPostReducer;
