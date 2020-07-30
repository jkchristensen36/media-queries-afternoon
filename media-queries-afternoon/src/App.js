import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      menuVisible: false
    }
  }

  menuToggle = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }



 render() { 
  return(
    <div>
      <nav className="navbar fixed-top">
        <div className="container">
          <div className="logo">Start Bootstrap</div>
          <div className="menu-items">
            <p className="nav-item">SERVICES</p>
            <p className="nav-item">PORTFOLIO</p>
            <p className="nav-item">ABOUT</p>
            <p className="nav-item">TEAM</p>
            <p className="nav-item">CONTACT</p>
          </div>  
        </div>
      </nav>
      <nav className="navbar-mobile fixed-top">
        <div className="container-mobile">
          <div className="logo-mobile">Start Bootstrap</div>
          <div className="menu-mobile" onClick={this.menuToggle}>MENU ☰</div>
          { this.state.menuVisible ? (
            <nav className="dropdown">
              <div className="dropdown-cont">
                <span className="nav-item">SERVICES</span>
                <span className="nav-item">PORTFOLIO</span>
                <span className="nav-item">ABOUT</span>
                <span className="nav-item">TEAM</span>
                <span className="nav-item">CONTACT</span>
              </div>
            </nav>
          ) : null}  
        </div>
      </nav>
      

      <header className="masthead">
        <div className="masthead-container">
          <div className="mast1">Welcome To Our Studio!</div>
          <div className="mast2">IT'S NICE TO MEET YOU</div>
          <a className="mast3">TELL ME MORE</a>
        </div>
      </header>
      <section></section>
      <section></section>
    </div>
  );
}

}

export default App;
