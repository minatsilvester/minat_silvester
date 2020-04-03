import Constants from '../constants';

const initialState = {
  currentAdmin: null,
  errors: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return { ...state, currentAdmin: action.currentAdmin, errors: null };

    case Constants.USER_SIGNED_OUT:
        return initialState

    case Constants.SESSION_ERROR:
        return {...state, error: action.error}

    default:
      return state;
  }
}
