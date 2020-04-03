import React from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';

import { setDocumentTitle } from '../utils';
import Actions              from '../actions/sessions';

import { withRouter } from 'connected-react-router';

class SessionsNew extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setDocumentTitle('Sign in');
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(email.value, password.value));
  }

  _renderError() {
    const { error } = this.props;

    if (!error) return false;

    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    return (
      <div className='view-container sessions new'>
        <main>
          <header>
            <div className="logo" />
          </header>
          <form onSubmit={this.handleSubmit}>
            {this._renderError()}
            <div className="field">
              <input ref="email" type="Email" placeholder="Email" required={true}/>
            </div>
            <div className="field">
              <input ref="password" type="password" placeholder="Password" required={true}/>
            </div>
            <button type="submit">Sign in</button>
          </form>
          <Link to="/signup">Create new account</Link>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(SessionsNew)
