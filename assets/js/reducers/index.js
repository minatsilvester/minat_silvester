import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import {routerReducer} from 'react-router-redux'
import registration         from './registration';
import displayBlog from './displayblog'
import blog from './blog'
import session from './session'
import createHistory from 'history/createBrowserHistory';
import { history } from '../store'

// const history = createHistory();

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  session: session,
  registration: registration,
  blog: blog,
})

export default rootReducer;
