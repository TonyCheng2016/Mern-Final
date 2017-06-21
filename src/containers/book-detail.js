import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className=" col-sm-5 text-primary text-center" id="bookdetail">Choose your book to read</div>;
    }

    return (
      <div className=" col-sm-5 bg-success text-white" id="bookdetail">
        <h3>Details for :</h3>
        <div>Title : {this.props.book.title}</div>
        <div>Pages : {this.props.book.pages}</div>
        <p>Contents : {this.props.book.contents}</p>
        <a href={this.props.book.url} target= "_blank">
          <img src={this.props.book.img} height="512" width="320"></img>
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
