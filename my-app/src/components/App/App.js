import React, { Component } from 'react';
import logo from '../../logo.svg';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'
import './App.css';

class App extends Component {
  constructor(props) { // inject props to send data to App for header 
    super(props); // must use props for proper functionality
  } // end constructor method
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );  // end JSX  ->  what gets rendered to DOM in this component, and is returned
  }  //  end render  ->  necessary method to render onto DOM
}  //  end class

export default App;
