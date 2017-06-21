import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Global from './global';
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  onDeleteClick() {

  }
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <li className="list-group-item" key={post.id}>
            <div>
              <Link to={"posts/" + post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
              </Link>
            </div>
          </li>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        
        <div className="text-xs-right row" >
          
          <h4 id="headtext">Add to your book list</h4>
          <Link to="/posts/new" className="btn btn-info btn-lg">
            
            <span className="glyphicon glyphicon-plus"></span> Plus
          </Link>
        </div>
        <div className="row">
          <BookList />
          <BookDetail />
          <Global />


        </div>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Book
        </button>
        <ul className="list-group col-sm-4 nav nav-pills nav-stacked">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
