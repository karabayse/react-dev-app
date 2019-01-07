import React, { Component } from 'react';

class Header extends Component {
  constructor(props) { // must inject props to receive data from App
    super(props); // add props to component
  } // end constructor
  render() {
    return(
      <div className="App-header">
        <h1>Username Application</h1>
      </div> // end containing div
    ); // end JSX
  } // end render
} // end class Header

export default Header;
