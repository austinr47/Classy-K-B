import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    }
    this.hideMenu = this.hideMenu.bind(this)
  }

  componentDidMount() {
    this.setState({
      visible: this.props.visible
    })
  }

  hideMenu() {
    this.props.hideMenu()
  }

  render() {
    return (
      <div className='menu-main'>
        <div className='menu-content'>
          <div onClick={this.hideMenu}>
            <i className="menu-arrow-color fa-2x fas fa-arrow-circle-right"></i>
          </div>
          <div className='menu-nav-links'>
            <NavLink className='menu-link' to='/'><span onClick={this.hideMenu}>Home</span></NavLink>
            <NavLink className='menu-link' to='/kitchens'><span onClick={this.hideMenu}>Kitchen</span></NavLink>
            <NavLink className='menu-link' to='/baths'><span onClick={this.hideMenu}>Baths</span></NavLink>
            <NavLink className='menu-link' to='/countertops'><span onClick={this.hideMenu}>Countertops</span></NavLink>
            <NavLink className='menu-link' to='/doors'><span onClick={this.hideMenu}>Doors</span></NavLink>
            <NavLink className='menu-link' to='/our-process'><span onClick={this.hideMenu}>Our Process</span></NavLink>
            <NavLink className='menu-link' to='/showrooms'><span onClick={this.hideMenu}> Showroom</span></NavLink>
            <NavLink className='menu-link' to='/appointment'><span onClick={this.hideMenu}> Make An Appointment</span></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu