import React from 'react';
import { connect } from 'react-redux';
import { setDocumentTitle } from '../utils';

class Fsftn extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  componentDidMount(){
    setDocumentTitle('FSFTN Contributions')
  }
  render()
  {
    return(
      <>
        <div className="fsf-top-margin">
          <center>
            <h1 className="center-description-text-white"><span className="center-description-text-violet">"Giving back </span>
              to where You <span className="center-description-text-violet">take from</span></h1>
            <h1 className="center-description-text-white">is the <span className="center-description-text-violet">purpose of living"</span></h1>
          </center>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <img src="images/fsftncover.jpeg" alt="" className="cover-image" />
          </center>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white">I participate and also conduct events in <span className="center-description-text-violet">FSFTN,</span> an <span className="center-description-text-violet">volunteer organization</span></h1>
            <h1 className="center-description-text-violet">for open source awareness. You should too...</h1>
          </center>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white"><span className="center-description-text-violet">Tech Synergy</span> - Anuual FSFTN Camp</h1>
          </center>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/camp1.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/camp2.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/camp3.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white"><span className="center-description-text-violet">Software Freedom Day</span> - Celebrate Freedom to learn</h1>
          </center>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/sfd1.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/sfd2.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/sfd3.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/sfd4.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/sfd5.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/sfd6.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white"><span className="center-description-text-violet">Regional GLUG Meets</span> - Unlimited Learning</h1>
          </center>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/glug1.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/glug2.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/glug3.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/glug4.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/glug5.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/glug6.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white"><span className="center-description-text-violet">Regional GLUG Meets</span> - Unlimited Learning</h1>
          </center>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/clg1.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/clg2.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/clg3.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
          <div className="row fsf-img-top-margin">
            <div className="col-md-4">
              <center>
                <img src="images/clg4.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/clg5.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
            <div className="col-md-4">
              <center>
                <img src="images/clg6.jpg" alt="" className="fsf-images"/>
              </center>
            </div>
          </div>
        </div>
        <div className="fsf-img-top-margin">
          <center>
            <h1 className="center-description-text-white">Intreseted in FSFTN?<span className="center-description-text-violet"> Visit <a href="https://www.fsftn.org"> fsftn.org</a></span></h1>
          </center>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => ({
  currentUser: state.session.currentUser,
})

export default connect(mapStatetoProps)(Fsftn);
