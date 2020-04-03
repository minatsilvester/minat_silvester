import React from 'react';
import Actions from '../actions/sessions'
import { connect } from 'react-redux';

class AuthenticatedContainer extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentDidMount(){
    this.ensureAuthenticated();
    console.log(this.props)
  }

  ensureAuthenticated(){
    const { dispatch } = this.props
    const jwt = localStorage.getItem('phoenixAuthToken')
    console.log(jwt)
    if(localStorage.getItem('phoenixAuthToken')){
      console.log("test")
      dispatch(Actions.currentUser())
    }
    else{
      window.location="/"
    }
  }

  render(){
    return(
      <div>
        <div>
        <h1>Hello World</h1>
        </div>
      </div>
    );

  }
}


const mapStateToProps = (state) => ({
  currentAdmin: state.session.currentAdmin,
})

export default connect(mapStateToProps)(AuthenticatedContainer);
