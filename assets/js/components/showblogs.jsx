import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { httpGet } from '../utils';
import SessionAction from '../actions/sessions';
import BlogActions from '../actions/blog';



class ShowBlogs extends React.Component{
  constructor(props){
    super(props);
    this.getBlog = this.getBlog.bind(this)
    this.getBlog();
  }

  ensureAuthenticated(){
    const { dispatch } = this.props;
    if(!this.props.currentAdmin && localStorage.getItem('phoenixAuthToken')){
      dispatch(SessionAction.currentUser())
    }
    else if(!localStorage.getItem('phoenixAuthToken')){
      console.log("Not logged in")
    }
  }

  getBlog(){
    const { dispatch } = this.props;
    dispatch(BlogActions.showBlog())
  }


  render(){
    if(!this.props.bloglist){
      return(<h1>Loading...</h1>);
    }
    else{
      const renderList = (
        <ul>
        {this.props.bloglist.map((blog) =>
        <li key={blog.id}>
          <h2 className="blog-heading">{blog.title}</h2>
          <h5>{blog.description}</h5>
          <h4><a href={blog.link}>Read Now</a></h4>
        </li>
      )}
    </ul>
    );
    return(
      <div className="container no-dots">
        {renderList}
      </div>
    )
    }
  }
}

const mapStateToProps = (state) => ({
  currentAdmin: state.session.currentAdmin,
  bloglist: state.blog.bloglist
})

export default connect(mapStateToProps)(ShowBlogs);
