import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from "react-router"
import { createPost } from '../actions/index';

class PostsNew extends Component {


  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Book List</h3>
        <div className="form-group">
          <label>Book's Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Book's paragraph</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Book's Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputFile">Upload Book's Image</label>
          <input type="file" id="exampleInputFile" />

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Please give a book's name ";
  }
  if (!values.categories) {
    errors.categories = 'Write some paragraph';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}
PostsNew.contextTypes = {
  router: PropTypes.object
};
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
