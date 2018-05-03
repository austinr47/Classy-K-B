import React, { Component } from 'react';
import logo from '../assets/logos/header-logo.png'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuVisible: 'initial'
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu() {
    this.setState({
      menuVisible: 'sliding'
    })
  }

  render() {
    return (
      <div className='header-main'>
        <div className='header-logo-social'>
          <NavLink to='/'><img src={logo} alt='logo'/></NavLink>
          <div className='desktop-number'>
          <a href="tel:+4807311236">
            480-731-1236
          </a>
          <div className='header-social'>
            <a href='https://www.facebook.com/classykitchenandbath/'><i className="social fab fa-2x fa-facebook-square"></i></a>
            <a href='http://youtube.com/classyclosets/'><i className="social fab fa-2x fa-youtube"></i></a>
            <a href='http://www.instagram.com/classyclosetsus'><i className="social fab fa-2x fa-instagram"></i></a>
            <a href='https://twitter.com/ClassyClosetsUS'><i className="social fab fa-2x fa-twitter"></i></a>
          </div>
          </div>
        </div>
        <div className='mobile-menu'>
          <a href="tel:+4807311236">
            480-731-1236
          </a>
          <span><NavLink to='/our-process' className='link'>Visit a Showroom</NavLink></span>
          <span onClick={() => this.showMenu()}>
            <i className="menu-color fas fa-2x fa-bars"></i>
          </span>
        </div>
        <div className='desktop-menu'>
          <div className='nav-links'>
            <NavLink className='link' to='/'><span>
              Home 
            </span></NavLink>
            <NavLink className='link' to='/kitchens'><span>
              &nbsp;Kitchens
            </span></NavLink>
            <NavLink className='link' to='/baths'><span>
              &nbsp;Baths
            </span></NavLink>
            <NavLink className='link' to='/countertops'><span>
              &nbsp;Countertops
            </span></NavLink>
            <NavLink className='link' to='/doors'><span>
              &nbsp;Doors
            </span></NavLink>
            <NavLink className='link' to='/our-process'><span>
              &nbsp;Our Process
            </span></NavLink>
            <NavLink className='link' to='/showroom'><span>
              &nbsp;Showroom
            </span></NavLink>
            <NavLink className='link' to='/appointment'><span>
              &nbsp;Make An Appointment
            </span></NavLink>
          </div>
        </div>
        {/* {this.state.menuVisible1 && */}
          <div className={this.state.menuVisible}>
            <Menu hideMenu={() => this.setState({menuVisible: 'slidingClose'})}/>
          </div>
        {/* } */}
      </div>
    );
  }
}

export default Header;