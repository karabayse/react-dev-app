import React, { Component } from 'react';
import logo from '../../logo.svg';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'
import './App.css';

class App extends Component {
  constructor(props) { // inject props to send data to App for header
    super(props); // must use props for proper functionality
    // state for App component
    this.state = {
      username: 'AppUsername'
    } // end state
  } // end constructor method

setHeaderUsername = () => {
  console.log('setHeaderUsername');
} // end setHeaderUsername

  render() {
    return (
      <div className="App">
        <Header selectedUsername = {this.state.username}/>
        <Body setHeaderUsername = {this.setHeaderUsername}/>
        <Footer />
      </div>
    );  // end JSX  ->  what gets rendered to DOM in this component, and is returned
  }  //  end render  ->  necessary method to render onto DOM
}  //  end class

export default App;
