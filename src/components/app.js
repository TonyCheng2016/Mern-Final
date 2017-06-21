import React, { Component } from 'react';
import HeaderInfo from '../containers/header';
import FooterInfo from '../containers/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderInfo />

        {this.props.children}
        
        <FooterInfo />
      </div>
    );
  }
}
