import React, { Component } from 'react';
import logo from '../assets/logos/header-logo.png'

class Footer extends Component {
  render() {
    return (
      <div className='footer-main'>
        <div className='footer-left'>
          <img src={logo} alt='logo'/>
          <span>
            Copyright © 2018 Classy Closets
          </span>
        </div>
        <div className='footer-social'>
          <a href='https://www.facebook.com/ClassyClosetsUS'><i className="social fab fa-2x fa-facebook-square"></i></a>
          <a href='http://youtube.com/classyclosets/'><i className="social fab fa-2x fa-youtube"></i></a>
          <a href='http://www.instagram.com/classyclosetsus'><i className="social fab fa-2x fa-instagram"></i></a>
          <a href='https://twitter.com/ClassyClosetsUS'><i className="social fab fa-2x fa-twitter"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer