import React, { Component } from 'react'
import axios from 'axios'
// import ReactLoading from 'react-loading'
import SchedContent from './SchedContent'
// var Recaptcha = require('react-recaptcha')

class PopSchedule extends Component {
  constructor() {
    super()
    this.hideSched=this.hideSched.bind(this)
    this.updateState=this.updateState.bind(this)
    this.update=this.update.bind(this)
    this.sendEmail=this.sendEmail.bind(this)
    this.close=this.close.bind(this)
  }

  hideSched() {
    this.props.hideSched()
  }

  updateState(event) {
    this.setState({
      state: event.target.value
    })
  }

  update(key, value) {
    this.setState({
      [key]: value
    })
  }

  sendEmail() {
    this.setState({
      form: false,
      sending: true,
    })
    axios.post('/api/send', {
      name: this.state.name, 
      email: this.state.email, 
      phone: this.state.phone, 
      city: this.state.city, 
      comments: this.state.comments
    }).then(response => {
      this.setState({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        comments: '',
        sending: false,
        sent: true,
        verified: false,
      })
    })
  }

  close() {
    setTimeout(() => {
      this.props.hideSched()
    }, 3000)
  }

  render() {

    return (
      <div onClick={this.hideSched} className='popSched-main'>
        <SchedContent close={() => this.hideSched()}/>
        <span onClick={this.hideSched}><i className="fas fa-angle-double-left"></i>Close</span>
      </div>
    );
  }
}

export default PopSchedule