import React, { Component } from 'react';

class Body extends Component {
  constructor() {
    super();
    // state
    this.state={
      usernames: []
    }; // end state
  } // end constructor method

  // addUsername arrow function expression which is a method
  // using the function expression auto-binds this method to this class
  addUsername = () => {
    const usernameIn = document.getElementById('usernameIn').value;
    console.log('in addUsername function:', usernameIn);
    // use setState instead of assigning values to state properties
    let usernames = this.state.usernames;
    usernames.push(usernameIn);
    this.setState({usernames: usernames});
  } // end addUsername

  // render method
  render() {
    // use map to map this.state.usernames to li elements
    const users = this.state.usernames.map(
      (user) =>
        <li key={user.toString()}>
          {user}
        </li> // end user map
    ); // end map
    return(
      <div>
        <h1>Add Username</h1>
        <input type="text" placeholder="username" id="usernameIn"></input>
        <button onClick={ this.addUsername }>Add Username</button>
        <ul>
          {users}
        </ul>
      </div> // end containing div
    ); // end JSX
  } // end render method
} // end Component

export default Body;
