import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/sessions';
import { Navbar, Nav, Link, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.renderSignOutButton = this.renderSignOutButton.bind(this)
    this.handleSingOutAction = this.handleSingOutAction.bind(this)
  }

  componentDidMount(){
    this.ensureAuthenticated()
  }

  ensureAuthenticated(){
    console.log("authenticated test")
    const { dispatch } = this.props;
    if(!this.props.currentAdmin && localStorage.getItem('phoenixAuthToken')){
      dispatch(Actions.currentUser())
    }
    else{
      console.log("Not Logged in")
    }
  }

  handleSingOutAction(e){
    const { dispatch } = this.props
    dispatch(Actions.signOut());
  }

  renderSignOutButton(){
    if(!this.props.currentAdmin){
      return false;
    }
    return(
      <Nav.Link href="#" onClick={this.handleSingOutAction}><h2 className="nav-text-color">Log Out</h2></Nav.Link>
    );
  }


  render(){
    return(
      <Navbar className='navbar-style'>
         <Navbar.Brand href="/"><h2 className="nav-text-color">Infinity_Seeker</h2></Navbar.Brand>
         <Nav className="ml-auto">
           <Nav.Link href="/open-source-contributions"><h2 className="nav-text-color">FSFTN</h2></Nav.Link>
           <Nav.Link href="/show-blogs"><h2 className="nav-text-color">Blogs</h2></Nav.Link>
         </Nav>
       </Navbar>
    );
  }
};

const mapStateToProps = (state) => ({
  currentAdmin: state.session.currentAdmin,
})


export default connect(mapStateToProps)(NavigationBar);
