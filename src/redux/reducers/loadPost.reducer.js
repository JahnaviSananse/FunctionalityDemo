import {LoadPost} from '../types/loadPost.types';

const INITIAL_DATA = {
  dataRespones: [],
};

const loadPostReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LoadPost.LOADPOST_SUCCESS:
      return {
        ...state,
        dataRespones: action.payload,
      };

    default:
      return state;
  }
};
export default loadPostReducer;
