// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import "phoenix_html"


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NavigationBar from './components/navbar';
import HomePage from './components/mainpage';
import Footer from './components/footer';
import RegistrationNew from './forms/signup';
import SessionsNew from './forms/signin';
import MainLayout from './layout/main';
import Fsftn from './components/fsftn';
import ScrollToTop from './restoration'
import BlogNew from './forms/blogadd';
import ShowBlogs from './components/showblogs'
import AuthenticatedContainer from './containers/authenticated'
import configureStore, {history} from './store';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Mainapp extends React.Component{
  ensureAuthenticated(nextState, replace, callback){
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;

    if (!currentUser && localStorage.getItem('phoenixAuthToken')) {
      dispatch(Actions.currentUser());
    } else if (!localStorage.getItem('phoenixAuthToken')) {
      replace('/sign_in');
    }

    callback();
  };
  render(){
    return(
      <>
          <Provider store={configureStore()} >
          <ConnectedRouter history={history}>
            <ScrollToTop />
            <NavigationBar />
            <div className="container-fluid">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/open-source-contribution" component={Fsftn} />
            <Route exact path="/signup" component={RegistrationNew} />
            <Route exact path="/signin" component={SessionsNew} />
            <Route exact path="/show-blogs" component={ShowBlogs} />
            <Route exact path="/add-blog" component={BlogNew} onEnter={this.ensureAuthenticated} />
            <Route exact path="/authenticated" component = {AuthenticatedContainer} />
          </div>
          <Footer />
          </ConnectedRouter>
        </Provider>
        </>
    );
  }
}

ReactDOM.render(<Mainapp />, document.getElementById('react-app'))
