// transitioning to use sched content


import React, { Component } from 'react'
import axios from 'axios'
// import ReactLoading from 'react-loading'
import SchedContent from './SchedContent'
// var Recaptcha = require('react-recaptcha')

class PopSchedule extends Component {
  constructor() {
    super()
    // this.state = {
    //   name: '',
    //   email: '',
    //   phone: '',
    //   city: '',
    //   state: '',
    //   comments: '',
    //   form: true,
    //   sending: false,
    //   sent: false,
    // }
    this.hideSched=this.hideSched.bind(this)
    this.updateState=this.updateState.bind(this)
    this.update=this.update.bind(this)
    this.sendEmail=this.sendEmail.bind(this)
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
    // let recaptchaInstance;
    // const resetRecaptcha = () => {recaptchaInstance.reset()}
    // var buttonCSS = !this.state.name || !this.state.email || !this.state.phone || !this.state.city || !this.state.state ? 'popSched-submit-disabled' : 'popSched-submit-active'
    // const sending = <ReactLoading type='bars' color='#AD4747' height='667' width='375' />

    return (
      <div className='popSched-main'>
        {/* <div className='popSched-content'> */}
        <SchedContent />
        <span onClick={this.hideSched}><i className="fas fa-angle-double-left"></i>Hide</span>
        {/* {this.state.form &&
          <div>
            <span>Start Your Free Consultation!</span>
            <div className='popSched-info'>
              <input placeholder='Full Name' value={this.state.name} name='name' onChange={(e) => this.update('name', e.target.value)}/>
              <input placeholder='Email Address' value={this.state.email} name='email' onChange={(e) => this.update('email', e.target.value)}/>
              <input placeholder='Phone Number' value={this.state.phone} name='phone' onChange={(e) => this.update('phone', e.target.value)}/>
            </div>
            <div className='popSched-location'>
              <input placeholder='City' value={this.state.city} name='city' onChange={(e) => this.update('city', e.target.value)}/>
              <select name="state" id='state' onChange={this.updateState}>
                <option value="select">- Select a State -</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
            <div className='popSched-comments'>
              <textarea placeholder='How can we help?' value={this.state.comments} onChange={(e) => this.update('comments', e.target.value)}/>
            </div>
            <div><Recaptcha sitekey="6LelIk8UAAAAAD13pWzlk4uYENqwyV-QRVSecFOB" render="explicit" verifyCallback={this.verifyCallback}/></div>
            <div className='popSched-submit'>
              <span onClick={this.hideSched}><i className="fas fa-angle-double-left"></i>Hide</span>
              <button className={buttonCSS} disabled={!this.state.name || !this.state.email || !this.state.phone || !this.state.city || !this.state.state} onClick={this.sendEmail}>GET ORGANIZED <i className="fas fa-angle-double-right"></i></button>
            </div>
          </div>
          }
          {this.state.sending &&
            <div className='popSched-sending'>
              {sending}
            </div>
          }
          {this.state.sent &&
            <div className='sent'>
              <h2>Thank you for your interest!</h2>
              <p>You should hear back from our representative shortly.</p>
              <h4>Visit a showroom or schedule a free-in-home-appointment today and let us show you why our customers keep coming back! </h4>
              <div>
                <div className='close-sent' onClick={this.hideSched}>
                  Close
                </div>
              </div>
            </div>
          } */}
          {/* </div> */}
      </div>
    );
  }
}

export default PopSchedule