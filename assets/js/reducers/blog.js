import Constants from '../constants';

const initialState = {
  errors: null,
  bloglist: null
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.BLOG_REGISTRATION_ERROR:
      return {...state, errors: action.errors}

    case Constants.SET_BLOG_LIST:
      return {...state, bloglist: action.bloglist};


    default:
      return state;
  }
}
