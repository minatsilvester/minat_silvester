import React from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDocumentTitle } from '../utils'
import Actions from '../actions/sessions'

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.renderSignOutButton = this.renderSignOutButton.bind(this)
    this.handleSingOutAction = this.handleSingOutAction.bind(this)
  }

  componentDidMount(){
    this.ensureAuthenticated()
    setDocumentTitle('Hello There, Minat Silvester Here')
  }

  ensureAuthenticated(){
    console.log("authenticated test")
    const { dispatch } = this.props;
    if(!this.props.currentAdmin && localStorage.getItem('phoenixAuthToken')){
      console.log("1st satisfied");
      console.log(this.props)
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
      <a href="#" onClick={this.handleSingOutAction}>Log Out</a>
    );
  }

  render(){
    return(
      <div>
          <div className="row">
            <div className="col-md-8">
              <div className="apply-margins">
                <h1 className="white-front-page-font"><span className="violet-front-page-font">Hello</span> There!!</h1>
                <h1 className="white-front-page-font">This is <span className="violet-front-page-font">Minat</span></h1>
                <h1 className="white-front-page-font">The First <span className="violet-front-page-font">Infinity Seeker</span></h1>
              </div>
            </div>
            <div className="col-md-4">
                <div>
                  <center>
                    <img src="images/minat.jpg" className="img-responsive"/>
                  </center>
                </div>
            </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <center>
                <Link to="/show-blogs" className="no-underline">
                  <div className="home-display-boxes">
                    <img src="images/medium.png" className="box-images" />
                    <h3>Medium</h3>
                    <h4>I Love sharing what I know</h4>
                  </div>
                </Link>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <a href="https://www.linkedin.com/in/minat-silvester-80a2a8148/" target="_blank" className="no-underline">
                  <div className="home-display-boxes">
                    <img src="images/linkedin.png" className="box-images" />
                    <h3>LinkedIn</h3>
                    <h4>Not a fan, but it exists</h4>
                  </div>
                </a>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <Link to="/open-source-contribution" className="no-underline">
                <div className="home-display-boxes">
                  <img src="images/fsftn.png"  className="box-images" />
                  <h3>FSFTN</h3>
                  <h4>Big Fan of contribution for open source</h4>
                </div>
              </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="container-fluid des-margin">
          <center>
            <h1 className="center-description-text-white">Just another <span className="center-description-text-violet">Geeky/9-5 Rejected</span> Guy</h1>
            <h1 className="center-description-text-white">Interested in <span className="center-description-text-violet">Computers</span> and <span className="center-description-text-violet">Physics</span></h1>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAdmin: state.session.currentAdmin,
})


export default connect(mapStateToProps)(HomePage);
// export default HomePage;
