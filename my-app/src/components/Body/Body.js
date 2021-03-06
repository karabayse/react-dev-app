import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    // state
    this.state={
      currentUsername: 'NONE',
      usernames: []
    }; // end state
  } // end constructor method

  // addUsername arrow function expression which is a method
  // using the function expression auto-binds this method to this class
  addUsername = () => {
    const usernameIn = document.getElementById('usernameIn').value;
    if(usernameIn === '') {
      alert('Username required');
    } // end if
    else {
      console.log('in addUsername function:', usernameIn);
      // use setState instead of assigning values to state properties
      let usernames = this.state.usernames;
      usernames.push(usernameIn);
      // may also use {usernames}
      this.setState({usernames: usernames});
      // clear username input
      document.getElementById('usernameIn').value = '';
    } // end else
  } // end addUsername

  checkForDupe = (event) => {
    // capture current udernameIn
    const newUsername = document.getElementById('usernameIn').value;
    console.log('in checkforDupe', newUsername);
    // check if in this.state.usernames
    console.log(this.state.usernames.includes(newUsername));
    // disable 'addUsernameButton' if dupe is found
    document.getElementById('addUsernameButton').disabled = this.state.usernames.includes(newUsername)
  } // end checkForDupe

  selectUsername = (user) => {
    console.log('in usernameClick', user);
    this.setState({currentUsername: user});
    this.props.setHeaderUsername(user);
  } // end usernameClick

  // render method
  render() {
    // use map to map this.state.usernames to li elements
    const users = this.state.usernames.map(
      (user) =>
        <li key={user.toString()} onClick={() => this.selectUsername(user)}>
          {user}
        </li> // end user map
    ); // end map
    return(
      <div>
        <h2>Add Username</h2>
        <p>Current Username: {this.state.currentUsername}</p>
        <input type="text" placeholder="username" id="usernameIn"
          onChange={this.checkForDupe}>
        </input>
        <button onClick={ this.addUsername } id="addUsernameButton">Add Username</button>
        <ul>
          {users}
        </ul>
      </div> // end containing div
    ); // end JSX
  } // end render method
} // end Component

export default Body;
