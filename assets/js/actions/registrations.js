import { push }   from 'connected-react-router';
import Constants          from '../constants';
import { httpPost }       from '../utils';

const Actions = {};

Actions.signUp = (data) => {
  return dispatch => {
    httpPost('/api/admin_new', { admin: data })
    .then((data) => {
      window.alert("User Created")

      dispatch(push('/'));
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        dispatch({
          type: Constants.REGISTRATIONS_ERROR,
          errors: errorJSON.errors,
        });
      });
    });
  };
};

export default Actions;
