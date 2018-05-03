import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import SchedContent from './SchedContent'
import PopSchedule from './PopSchedule'
// import scrollToComponent from 'react-scroll-to-component'
import { goToAnchor } from 'react-scrollable-anchor'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import image from '../assets/Spinner-1.1s-139px.gif'
import Images from './Images'

export default class OurProcess extends Component {
  constructor() {
    super()
    this.state = {
      showSched: false,
    }
    this.showSched=this.showSched.bind(this)
    this.scroll=this.scroll.bind(this)
  }

  componentDidMount() {
    // window.scrollTo(0, 0)
    // console.log(1, this.props.match.path)
    this.scroll(this.props.match.path)
  }

  componentWillReceiveProps(nextProps) {
    // console.log(2, nextProps.match.path)
    if(this.props.match.path === nextProps.match.path) {
      return null
    } else this.scroll(nextProps.match.path)
  }

  scroll(value) {
    // console.log(3, value)
    if(value === '/showroom') {
      goToAnchor('scroll')
    } else window.scrollTo(0, 0)
  }


  showSched() {
    console.log(process.env.REACT_APP_GMAIL_SEND_TO)
    this.setState({
      showSched: true
    })
  }
  render() {
    const ChandlerMapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 33.305960, lng: -111.917883}}
      >
        <Marker
          position={{ lat: 33.305960, lng: -111.917883}}
        />
      </GoogleMap>
    ));
    const ScottsdaleMapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 33.628306, lng: -111.924870}}
      >
        <Marker
          position={{ lat: 33.628306, lng: -111.924870}}
        />
      </GoogleMap>
    ));

    let styleBold = {fontWeight:'bold', textAlign: 'center'}

    return (
      <div className='process-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        <Header />
          <div className='content'>
            <div className='button'>
              <span onClick={this.showSched}>
                Start Your FREE CONSULTATION
              </span>
            </div>
            <div id='mobile' className='info'>
              <h3>Our Process</h3>
                  <p>At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget. </p>
                  <p style={styleBold}>Learn more about our process below by reading these Frequently Asked Questions:</p>
                  <h5><i>I would love to see what Classy Closets can do for me. How do I get started?</i></h5>
                  <p>The quickest way to get started is to submit a "Start Your FREE CONSULTATION" form on our website and a member of our Classy Closets team will promptly respond to you. You can also call us at <a id='navlink' href="tel:+4807311236">480-731-1236</a> or visit the showroom nearest you.</p>
                  <h5><i>What is the process?</i></h5>
                  <p>After you contact Classy Kitchen and Bath, a typical job will include a free in-home consultation. Depending on the amount of time you have available and the complexity of the job, your designer may do a design and give you a price during the first appointment at your home, or schedule a secondary meeting in your home or at one of our showrooms to review your drawings. During this visit details will be finalized and decorative features and accessories selected. Upon receipt of an order your installation date is set and the job is moved on to engineering and production.</p>
                  <h5><i>What happens when my project is ready to be installed?</i></h5>
                  <p>We commit to a specific installation date(s) and have a 95% on time delivery record. Installation dates are confirmed via email text, or phone about 5 days prior to your installation. </p>
                  <h5><i>Do you manufacture your products?</i></h5>
                  <p>Yes, Classy Closets is a direct manufacturer and have full control of the quality of our product from start to finish. Unlike many others in our industry, we do not source pre-fabricated parts from large producers thousands of miles away. By controlling our manufacturing we also have great flexibility in design and can react quickly should any adjustments be needed. If you have any other questions concerning our process or what it’s like to work with Classy Kitchen and Bath, reach out to one of our professional designers today! We look forward to working with you.</p>
              <div id='scroll' className='process-picts'>
                <img id='first-pict' alt='process' src='https://www.dropbox.com/s/mzmpzvljytt1wh8/049A8385.Man-at-skill-saw-great.jpg?raw=1'/>
              </div>
            </div>
            <div id='desktop' className='info'>
              <h3>Our Process</h3>
              <div className='desktop-picts'>
                <div>
                  <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/mzmpzvljytt1wh8/049A8385.Man-at-skill-saw-great.jpg?raw=1' name='process' />
                  <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/kz4xeghwhvn7lr2/049A8791.Classy-Closets-Granite.Edge-Polishing.jpg?raw=1' name='process' />
                  <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/562h6caieusto3t/049A8880.Classy-Closets-Sanding-Good.jpg?raw=1' name='process' />
                </div>
                <div>
                  <p>At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget. </p>
                  <p style={styleBold}>Learn more about our process below by reading these Frequently Asked Questions:</p>
                  <h5><i>I would love to see what Classy Closets can do for me. How do I get started?</i></h5>
                  <p>The quickest way to get started is to submit a "Start Your FREE CONSULTATION" form on our website and a member of our Classy Closets team will promptly respond to you. You can also call us at <a id='navlink' href="tel:+4807311236">480-731-1236</a> or visit the showroom nearest you.</p>
                  <h5><i>What is the process?</i></h5>
                  <p>After you contact Classy Kitchen and Bath, a typical job will include a free in-home consultation. Depending on the amount of time you have available and the complexity of the job, your designer may do a design and give you a price during the first appointment at your home, or schedule a secondary meeting in your home or at one of our showrooms to review your drawings. During this visit details will be finalized and decorative features and accessories selected. Upon receipt of an order your installation date is set and the job is moved on to engineering and production.</p>
                  <h5><i>What happens when my project is ready to be installed?</i></h5>
                  <p>We commit to a specific installation date(s) and have a 95% on time delivery record. Installation dates are confirmed via email text, or phone about 5 days prior to your installation. </p>
                  <h5><i>Do you manufacture your products?</i></h5>
                  <p id='scroll'>Yes, Classy Closets is a direct manufacturer and have full control of the quality of our product from start to finish. Unlike many others in our industry, we do not source pre-fabricated parts from large producers thousands of miles away. By controlling our manufacturing we also have great flexibility in design and can react quickly should any adjustments be needed. If you have any other questions concerning our process or what it’s like to work with Classy Kitchen and Bath, reach out to one of our professional designers today! We look forward to working with you.</p>
                </div>
              </div>
            </div>
            <div id='showroom' className='info'>
              <h3>Visit A Showroom</h3>
              <p>After you’ve browsed through our online gallery, come visit one of our showrooms for more inspiration and design ideas</p>
              <p>In our showroom, you will have the opportunity to talk with one of our professional Classy Kitchen and Bath designers more about your future project. </p>
              <p>We look forward to your visit!</p>
            </div>
            <div className='sched-map'>
            <div className='sched'>
              <SchedContent />
            </div>
            <div className='maps'>
              <span style={styleBold}>Chandler Location</span>
              <div>
                <p>4320 W Chandler Blvd Suite 7</p>
                <p>Chandler, AZ 85226</p>
                <p>Phone: 480-731-1236</p>
                <p>Store Hours:</p>
                <p>&nbsp; &nbsp; Mon-Fri: 10AM to 6PM;</p>
                <p>&nbsp; &nbsp; Sat: &nbsp; &nbsp; &nbsp; &nbsp;10AM to 2PM;</p>
                <p>&nbsp; &nbsp; Closed Sunday</p>
              </div>
              <div className='google-map'>
                <ChandlerMapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmVFI7hRjYlQ37A3rbd1eDOsOLw23LWE0&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `70px` }} />}
                  containerElement={<div style={{ height: `300px`, width: '100%', padding: '0', margin: '0' }} />}
                  mapElement={<div style={{ height: `100%`, width: '100%', border: '1px rgba(66, 66, 66, 0.589) solid' }} />}
                />
              </div>
            </div>
            <div className='maps'>
            <span style={styleBold}>Scottsdale Location</span>
              <div>
                <p>15507 N Scottsdale Road Suite 110</p>
                <p>Scottsdale, AZ 85254</p>
                <p>Phone: 480-731-1236</p>
                <p>Store Hours:</p>
                <p>&nbsp; &nbsp; Mon-Fri: 10AM to 6PM;</p>
                <p>&nbsp; &nbsp; Sat: &nbsp; &nbsp; &nbsp; &nbsp;10AM to 2PM;</p>
                <p>&nbsp; &nbsp; Closed Sunday</p>
              </div>
              <div className='google-map'>
                <ScottsdaleMapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmVFI7hRjYlQ37A3rbd1eDOsOLw23LWE0&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `70px` }} />}
                  containerElement={<div style={{ height: `300px`, width: '100%', padding: '0', margin: '0' }} />}
                  mapElement={<div style={{ height: `100%`, width: '100%', border: '1px rgba(66, 66, 66, 0.589) solid' }} />}
                />
              </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}