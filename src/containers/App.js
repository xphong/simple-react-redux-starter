import React, { Component, PropTypes } from 'react';

import Navbar from '../components/Navbar';

export default class App extends Component {

  render() {
    const {children} = this.props;
    
    return (
      <div>
        <Navbar />
        <div className="mainContainer container">
          {children}
        </div>
      </div>
    );
  }
}
