import { push } from 'connected-react-router';
import Constants from '../constants';
import { httpPost, httpGet } from '../utils';


const Actions = {

  addBlog: (data) => {
    return dispatch => {
      httpPost('/api/blogs', { blog: data })
      .then((data) => {
        window.alert("Blog Created")
        dispatch(push('/'))
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
  },

  showBlog: () => {
    return dispatch => {
      httpGet('/api/blogs')
      .then(function(data){
        dispatch({
          type: Constants.SET_BLOG_LIST,
          bloglist: data.blogs,
        })
        console.log("success");
        // dispatch(push('/show-blogs'));
      })
      .catch(function(error){
        console.log(error)
        dispatch(push('/'))
      })
    }
  }
}
export default Actions;
