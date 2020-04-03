import { push }                           from 'connected-react-router';
import Constants                          from '../constants';
import { Socket }                         from 'phoenix';
import { httpGet, httpPost, httpDelete }  from '../utils';

const Actions = {
  signIn: (email, password) => {
    return dispatch => {
      const data = {
        session: {
          email: email,
          password: password
        },
      };

      httpPost('/api/sessions', data)
      .then((data) => {
        console.log(data)
        localStorage.setItem('phoenixAuthToken', data.jwt);
        dispatch({
          type: Constants.CURRENT_USER,
          currentAdmin: data.admin
        })
        dispatch(push('/authenticated'))
      })
      .catch((error) => {
        console.log(error)
        error.response.json()
        .then((errorJSON) => {
            dispatch({
              type: Constants.SESSION_ERROR,
              error: errorJSON.error,
          });
        });
      });
    };
  },

  currentUser: () => {
    return dispatch => {
      const authToken = localStorage.getItem('phoenixAuthToken');
      httpGet('/api/current_user')
      .then(function(data) {
        console.log(data)
        dispatch({
          type: Constants.CURRENT_USER,
          currentAdmin: data.admin,
        })
      })
      .catch(function(error) {
        console.log(error);
        dispatch(push('/signin'))
      });
    };
  },

  signOut: () => {
    return dispatch => {
      httpDelete('/api/sessions')
      .then((data) => {
        localStorage.removeItem('phoenixAuthToken');
        const state = dispatch({type: Constants.USER_SIGNED_OUT});
        dispatch(push('/'))
      })
      .catch(function (error) {
        console.log(error)
      });
    };
  },
}

export default Actions;
