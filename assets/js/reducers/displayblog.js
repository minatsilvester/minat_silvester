import Constants from '../constants'

const initialState = {
  bloglist: null,
}

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case Constants.SET_BLOG_LIST:
      return {...state, bloglist: action.bloglist};

    default:
      return initialState;
  }
}
