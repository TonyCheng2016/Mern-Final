import React, { Component } from 'react';
import HeaderInfo from '../containers/header';
import FooterInfo from '../containers/footer';
import Global from './global';
export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderInfo />
        {this.props.children}
        <Global />
        <FooterInfo />
      </div>
    );
  }
}
