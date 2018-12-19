import React, { Component } from 'react';

class Body extends Component {
  render() {
    return(
      <div>
        <h1>Add Username</h1>
        <input type="text" placeholder="username"></input>
        <button>Add Username</button>
        <ul>
          <li>un00</li>
          <li>un01</li>
          <li>un02</li>
          <li>un03</li>
        </ul>
      </div> // end containing div
    ); // end JSX
  } // end render method
} // end Component

export default Body;
