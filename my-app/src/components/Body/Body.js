import React, { Component } from 'react';

class Body extends Component {
  constructor() {
    super();
    // state
    this.state={
      testTest: 'Test'
    }; // end state
  } // end constructor method

  // addUsername arrow function expression which is a method
  // using the function expression auto-binds this method to this class
  addUsername = () => {
    console.log('in addUsername function');
  } // end addUsername

  // render method
  render() {
    return(
      <div>
        <h1>Add Username</h1>
        <input type="text" placeholder="username"></input>
        <button onClick={ this.addUsername }>Add Username</button>
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
