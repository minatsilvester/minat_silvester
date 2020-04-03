import React from 'react';
import Actions from '../actions/blog';
import SessionActions from '../actions/sessions'
import { connect } from 'react-redux';
import {setDocumentTitle, renderErrorsFor} from '../utils';

class BlogNew extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.ensureAuthenticated();
    setDocumentTitle('Add blog')
  }

  ensureAuthenticated(){
    const { dispatch } = this.props;
    if(!this.props.currentAdmin && localStorage.getItem('phoenixAuthToken')){
      dispatch(SessionActions.currentUser())
    }
    else if(!localStorage.getItem('phoenixAuthToken')){
      window.location='/signin'
    }
  }


  handleSubmit(e){
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      genre: this.refs.genre.value,
      link: this.refs.link.value,
    }
    console.log(data)
    dispatch(Actions.addBlog(data))

  }

  render(){
    const {errors} = this.props;

    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input ref="title" type="text" placeholder="Title" required={true} /><br/><br/>
          {renderErrorsFor(errors, 'title')}
          <textarea ref="description" rows="5" cols="100" placeholder="Description" required={true} /><br/><br/>
          {renderErrorsFor(errors, 'title')}
          <input ref="genre" type="text" placeholder="Genre" required={true} /><br/><br/>
          {renderErrorsFor(errors, 'title')}
          <input ref="link" type="text" placeholder="Link" required={true} /><br/><br/>
          {renderErrorsFor(errors, 'title')}
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAdmin: state.session.currentAdmin,
  errors: state.blog.errors,
});

export default connect(mapStateToProps)(BlogNew);
