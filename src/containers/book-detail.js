import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className=" col-md-8 text-primary text-center" id="bookdetail">Select a book to get started.</div>;
    }

    return (
      <div className=" col-md-8 bg-success text-white" id="bookdetail">
        <h3>Details for :</h3>
        <div>Title : {this.props.book.title}</div>
        <div>Pages : {this.props.book.pages}</div>
        <p>Contents : {this.props.book.contents}</p>
        <a href={this.props.book.url}>
          <img src={this.props.book.img} height="640" width="400"></img>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
