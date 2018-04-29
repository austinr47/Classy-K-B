import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
var Recaptcha = require('react-recaptcha');

class Appointment extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      startTime: '',
      endTime: '',
      day: '',
      doors: false,
      kitchens: false,
      countertops: false,
      bathrooms: false,
      interestedIn: [],
      comments: '',
      verified: false,
      sent: false,
    }
    this.input=this.input.bind(this)
    this.reset=this.reset.bind(this)
    this.sendEmail=this.sendEmail.bind(this)
    this.interestedIn=this.interestedIn.bind(this)
    this.baseState = this.state
  }

  componentDidMount() {
    window.scrollTo(0, 0) 
  }

  input(field, value) {
    this.setState({
      [field]: value
    })
  }

  reset(i) {
    this.setState(
      this.baseState
    )
  }

  sendEmail() {
    window.scrollTo(0, 0)  
    this.setState({
      sent: true,
    })
    axios.post('/api/send-appointment', {
      first: this.state.first, 
      last: this.state.last, 
      email: this.state.email, 
      phone: this.state.phone, 
      address: this.state.address, 
      city: this.state.city, 
      state: this.state.state,
      zip: this.state.zip,
      day: this.state.day,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      interestedIn: this.state.interestedIn,
      comments: this.state.comments
    })
  }

  interestedIn(value) {
    let newArr = [...this.state.interestedIn]
    if(newArr.includes(value)){
      let index = newArr.indexOf(value)
      newArr.splice(index, 1)
    } else {
      newArr.push(value)
    }
    this.setState({
      interestedIn: newArr
    })
  }

  render() {
    let recaptchaInstance;
    const resetRecaptcha = () => {recaptchaInstance.reset()}
    let disabled = !this.state.first || !this.state.last || !this.state.email || !this.state.phone || !this.state.address || !this.state.city || !this.state.state || !this.state.zip || !this.state.verified
    let buttonCss = disabled ? 'button-disabled' : ''

    return (
      <div className='appointment-main'>
        <Header />
        {/* <iframe src="https://www.cambriausa.com/v6/Syndication/Designs" width="100%" height="800px" frameborder="0"></iframe> */}
        {/* <iframe src="https://www.cambriausa.com/syndicated-content/inspiration-gallery/" width="100%" height="800px" frameborder="0"></iframe> */}
        {/* <iframe src="https://www.cambriausa.com/v6/Syndication/Edges" width="100% " height="800px" frameborder="0"></iframe> */}
        {!this.state.sent &&
          <div className='content'>
            <div className='header'>
              <h3>Make an Appointment</h3>
              <p>Request a free estimate from an expert design professional. For more information about our organization solutions, contact us by completing the form below.</p>
              <p>We will contact you to discuss your needs and confirm a time that is convenient for you to have a design professional meet with you for a FREE, in-home custom estimate. </p>
            </div>
            <form>
              <p>* Required</p>
              <div>
                First Name*
                <input value={this.state.first} onChange={event => this.input('first', event.target.value)}/>
              </div>
              <div>
                Last Name*
                <input value={this.state.last} onChange={event => this.input('last', event.target.value)}/>
              </div>
              <div>
                Email Address*
                <input value={this.state.email} onChange={event => this.input('email', event.target.value)}/>
              </div>
              <div>
                Phone*
                <input value={this.state.phone} onChange={event => this.input('phone', event.target.value)}/>
              </div>
              <div>
                Address*
                <input value={this.state.address} onChange={event => this.input('address', event.target.value)}/>
              </div>
              <div>
                City*
                <input value={this.state.city} onChange={event => this.input('city', event.target.value)}/>
              </div>
              <div>
                State*
                <input value={this.state.state} onChange={event => this.input('state', event.target.value)}/>
              </div>
              <div>
                Zip*
                <input value={this.state.zip} onChange={event => this.input('zip', event.target.value)}/>
              </div>
              <div className='day'>
                Best Day to Contact
                <select value={this.state.day} onChange={event => this.input('day', event.target.value)}>
                  <option value='select'>- Select a Day -</option>
                  <option value='Monday'>Monday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                  <option value='Friday'>Friday</option>
                  <option value='Saturday'>Saturday</option>
                  <option value='Sunday'>Sunday</option>
                </select>
              </div>
              <div>
                Best Time to Contact
                <div className='time'>
                  From:
                  <select value={this.state.startTime} onChange={event => this.input('startTime', event.target.value)}>
                    <option value='select'>- Select a Time -</option>
                    <option value='6:00AM'>6:00AM</option>
                    <option value='6:30AM'>6:30AM</option>
                    <option value='7:00AM'>7:00AM</option>
                    <option value='7:30AM'>7:30AM</option>
                    <option value='8:00AM'>8:00AM</option>
                    <option value='8:30AM'>8:30AM</option>
                    <option value='9:00AM'>9:00AM</option>
                    <option value='9:30AM'>9:30AM</option>
                    <option value='10:00AM'>10:00AM</option>
                    <option value='10:30AM'>10:30AM</option>
                    <option value='11:00AM'>11:00AM</option>
                    <option value='11:30AM'>11:30AM</option>
                    <option value='12:00PM'>12:00PM</option>
                    <option value='12:30PM'>12:30PM</option>
                    <option value='1:00PM'>1:00PM</option>
                    <option value='1:30PM'>1:30PM</option>
                    <option value='2:00PM'>2:00PM</option>
                    <option value='2:30PM'>2:30PM</option>
                    <option value='3:00PM'>3:00PM</option>
                    <option value='3:30PM'>3:30PM</option>
                    <option value='4:00PM'>4:00PM</option>
                    <option value='4:30PM'>4:30PM</option>
                    <option value='5:00PM'>5:00PM</option>
                    <option value='5:30PM'>5:30PM</option>
                    <option value='6:00PM'>6:00PM</option>
                    <option value='6:30PM'>6:30PM</option>
                  </select>
                  To:
                  <select value={this.state.endTime} onChange={event => this.input('endTime', event.target.value)}>
                    <option value='select'>- Select a Time -</option>
                    <option value='6:00AM'>6:00AM</option>
                    <option value='6:30AM'>6:30AM</option>
                    <option value='7:00AM'>7:00AM</option>
                    <option value='7:30AM'>7:30AM</option>
                    <option value='8:00AM'>8:00AM</option>
                    <option value='8:30AM'>8:30AM</option>
                    <option value='9:00AM'>9:00AM</option>
                    <option value='9:30AM'>9:30AM</option>
                    <option value='10:00AM'>10:00AM</option>
                    <option value='10:30AM'>10:30AM</option>
                    <option value='11:00AM'>11:00AM</option>
                    <option value='11:30AM'>11:30AM</option>
                    <option value='12:00PM'>12:00PM</option>
                    <option value='12:30PM'>12:30PM</option>
                    <option value='1:00PM'>1:00PM</option>
                    <option value='1:30PM'>1:30PM</option>
                    <option value='2:00PM'>2:00PM</option>
                    <option value='2:30PM'>2:30PM</option>
                    <option value='3:00PM'>3:00PM</option>
                    <option value='3:30PM'>3:30PM</option>
                    <option value='4:00PM'>4:00PM</option>
                    <option value='4:30PM'>4:30PM</option>
                    <option value='5:00PM'>5:00PM</option>
                    <option value='5:30PM'>5:30PM</option>
                    <option value='6:00PM'>6:00PM</option>
                    <option value='6:30PM'>6:30PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className='interested'>What are you Interested In?</label>
                <div className='checkbox'>
                  <span>
                    <input onChange={() => {this.interestedIn('kitchens'); this.input('kitchens', !this.state.kitchens)}} checked={this.state.kitchens} type='checkbox' value='Kitchens' id='Kitchens' name='Kitchens'/>
                    <label htmlFor="Kitchens">Kitchens</label>
                  </span>
                  <span>
                    <input onChange={() => {this.interestedIn('bathrooms'); this.input('bathrooms', !this.state.bathrooms)}} checked={this.state.bathrooms} type='checkbox' value='Bathrooms' id='Bathrooms' name='Bathrooms'/>
                    <label htmlFor="Bathrooms">Bathrooms</label>
                  </span>
                  <span>
                    <input onChange={() => {this.interestedIn('doors'); this.input('doors', !this.state.doors)}} checked={this.state.doors} type='checkbox' value='Doors' id='Doors' name='Doors'/>
                    <label htmlFor="Doors">Doors</label>
                  </span>
                  <span>
                    <input onChange={() => {this.interestedIn('countertops'); this.input('countertops', !this.state.countertops)}} checked={this.state.countertops} type='checkbox' value='Countertops' id='Countertops' name='Countertops'/>
                    <label htmlFor="Countertops">Countertops</label>
                  </span>
                </div>
              </div>
              <div>
                Comments
                <textarea value={this.state.comments} onChange={event => this.input('comments', event.target.value)}/>
              </div>
            </form>
            <div className='recatcha'>
              <Recaptcha sitekey="6LelIk8UAAAAAD13pWzlk4uYENqwyV-QRVSecFOB" render="explicit" ref={e => recaptchaInstance = e} verifyCallback={() => this.setState({verified:  true})}/>
            </div>
            <div className='buttons'>
              <button onClick={this.reset} >Clear Field</button>
              <button className={buttonCss} disabled={disabled} onClick={() => {this.sendEmail(); resetRecaptcha()}}>Submit Request</button>
            </div>
          </div>
        }
        {this.state.sent &&
          <div className='content' id='content-sent'>
            <div className='header'>
              <h3>Success!!!</h3>
              <p>THank you for contacting us!</p>
              <p>You should hear back from our representative shortly. In the meantime, browse our products and see why our customers speak so highly of our work!</p>
            </div>
            <div className='pict-links'>
              <div className='link-details'>
              <NavLink to='/kitchens'><div><img alt='Kitchens' src='https://www.dropbox.com/s/yn8opdrg9hhhg06/Landing-kitchen-%281%29.jpg?raw=1' /></div></NavLink>
                Kitchens
                <p>At Classy Kitchen and Bath our professional designers create custom kitchens designed just for you. Create a custom kitchen that fits your style, budget and space by scheduling your free in-home consultation today!</p>
              </div>
              <div className='link-details'>
                <NavLink to='/countertops'><div><img alt='Countertops' src='https://www.dropbox.com/s/fwqcxsaa36rq3m3/Cambria-Brittanica-%281%29.jpg?raw=1' /></div></NavLink>
                Countertops
                <p>Choose from a selection of granite, marble or quartz to find the perfect countertop material for your new project. At Classy Kitchen and Bath, we can help you find the perfect countertop material for your kitchen and bathroom. Shop now!</p>
              </div>
              <div className='link-details'>
                <NavLink to='/baths'><div><img alt='Baths' src='https://www.dropbox.com/s/km1mv00swlpa2im/1-Classic-Tile-and-Glass-Bathroom-resized.jpg?raw=1' /></div></NavLink>
                Baths
                <p>At Classy Kitchen and Bath, we create custom bathrooms designed especially for your home, style and budget. Choose from a large selection of styles, materials and hardware to create your dream bathroom! </p>
              </div>
              <div className='link-details'>
                <NavLink to='/doors'><div><img alt='Doors' src='https://www.dropbox.com/s/9gy2vt3jrd0f7h0/26-The-Highland-resized.jpg?raw=1' /></div></NavLink>
                Cabinet Doors
                <p>At Classy Kitchen and Bath you can choose from a selection of different cabinet door styles for your custom kitchen or bath project. Whether you’re searching for modern cabinets or traditional cabinets, Classy Kitchen and Bath has it all. </p>
              </div>
              <div className='link-details'>
                <NavLink to='/our-process'><div><img alt='Our Process' src='https://www.dropbox.com/s/j6z2zm5vwynxjha/Landing-Process-%281%29.jpg?raw=1' /></div></NavLink>
                Our Process
                <p>At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget. </p>
              </div>
              <div className='link-details'>
                <NavLink to='/showroom'><div><img alt='Our Process' src='https://www.dropbox.com/s/anscz4jg8sis97i/chandler-showroom.jpg?raw=1' /></div></NavLink>
                Visit a Showroom
                <p>Come to a local showroom to meet with an expert designer, see our custom build displays, and see how we can create the custom kitchen or bath that fits your style perfectly.</p>
              </div>
            </div>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default Appointment