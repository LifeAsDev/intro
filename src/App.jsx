import './App.css';
import React, { Component } from 'react';

class App extends Component {
  toggleClass(menu, btn) {
    $(menu).toggleClass('none');
    $(btn).toggleClass('rotate');
  }
  menuMobile() {
    $('.overlay').toggleClass('none');
    $('.logo-ul').toggleClass('show');
  }
  render() {
    return (
      <div>
        <div className="overlay none"></div>

        <nav>
          <img className="logo" src="./src/assets/logo.svg"></img>
          <div className="logo-ul">
            <img
              onClick={() => this.menuMobile()}
              className="close"
              src="./src/assets/icon-close-menu.svg"
            ></img>
            <ul className="links1">
              <li
                onClick={() =>
                  this.toggleClass('.features-box', '.features-btn')
                }
              >
                <span>
                  Features
                  <svg
                    className="arrow features-btn"
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#686868"
                      strokeWidth="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
                <div id="menu-box" className="features-box none menu-box">
                  <ul className="features-menu">
                    <li>
                      <img
                        className="icons"
                        src="./src/assets/icon-todo.svg"
                      ></img>
                      Todo List
                    </li>
                    <li>
                      <img
                        className="icons"
                        src="./src/assets/icon-calendar.svg"
                      ></img>
                      Calendar
                    </li>
                    <li>
                      <img
                        className="icons"
                        src="./src/assets/icon-reminders.svg"
                      ></img>
                      Reminders
                    </li>
                    <li>
                      <img
                        className="icons"
                        src="./src/assets/icon-planning.svg"
                      ></img>
                      Planning
                    </li>
                  </ul>
                </div>
              </li>
              <li
                onClick={() => this.toggleClass('.company-box', '.company-btn')}
              >
                <span>
                  Company
                  <svg
                    className="arrow company-btn"
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#686868"
                      strokeWidth="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
                <div id="menu-box" className="company-box none menu-box">
                  <ul className="features-menu">
                    <li>History </li>
                    <li>Our Team </li>
                    <li>Reminders</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>Careers</span>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
            <ul className="login-menu">
              <li>Login</li>
              <li className="btn">Register</li>
            </ul>
          </div>
          <img
            onClick={() => this.menuMobile()}
            src="./src/assets/icon-menu.svg"
            className="burger"
          ></img>
        </nav>
        <img
          src="./src/assets/image-hero-mobile.png"
          className="hero-mobile"
        ></img>
        <div className="main">
          <div className="text-main">
            <h1>
              Make<br></br> remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="btn2">Learn more</button>
            <ul className="clients">
              <li>
                <img
                  className="client"
                  src="./src/assets/client-databiz.svg"
                ></img>
              </li>
              <li>
                <img
                  className="client"
                  src="./src/assets/client-audiophile.svg"
                ></img>
              </li>
              <li>
                <img
                  className="client"
                  src="./src/assets/client-meet.svg"
                ></img>
              </li>
              <li>
                <img
                  className="client"
                  src="./src/assets/client-maker.svg"
                ></img>
              </li>
            </ul>
          </div>

          <img className="hero" src="./src/assets/image-hero-desktop.png"></img>
        </div>
      </div>
    );
  }
}

export default App;
