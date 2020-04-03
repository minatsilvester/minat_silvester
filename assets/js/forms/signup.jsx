import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setDocumentTitle, renderErrorsFor} from '../utils';
import Actions from '../actions/registrations'

class RegistrationNew extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    setDocumentTitle('Sign Up')
  }

  handleSubmit(e){
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    }


    dispatch(Actions.signUp(data));
  }

  render(){

    const { errors } = this.props;

    return(
      <div className="container">
        <center>
          <h1>Sign UP</h1>
          <form onSubmit = {this.handleSubmit}>
            <input ref="name" type="text" placeholder="Name" required={true} />
            {renderErrorsFor(errors, 'name')}
            <input ref="email" type="text" placeholder="email" required={true} />
            {renderErrorsFor(errors, 'email')}
            <input ref="password" type="password" placeholder="password" required={true} />
            {renderErrorsFor(errors, 'password')}
            <button type="submit">Sign up</button>
          </form>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors,
});


export default connect(mapStateToProps)(RegistrationNew);
