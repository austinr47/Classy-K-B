import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import SchedContent from './SchedContent'
import PopSchedule from './PopSchedule'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

export default class OurProcess extends Component {
  constructor() {
    super()
    this.state = {
      showSched: false,
    }
    this.showSched=this.showSched.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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

    let styleBold = {fontWeight:'bold'}

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
              <p>&nbsp; &nbsp; At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget.</p>
              <p>&nbsp; &nbsp; Learn more about our process below by reading these Frequently Asked Questions:</p>
              <p>&nbsp; &nbsp; I would love to see what Classy Closets can do for me. How do I get started? The quickest way to get started is to submit a "Start Your FREE CONSULTATION" form on our website and a member of our Classy Closets team will promptly respond to you. You can also call us at 480-731-1236 or visit the showroom nearest you.</p>
              <p>&nbsp; &nbsp; What is the process? After you contact Classy Kitchen and Bath, a typical job will include a free in-home consultation. Depending on the amount of time you have available and the complexity of the job, your designer may do a design and give you a price during the first appointment at your home, or schedule a secondary meeting in your home or at one of our showrooms to review your drawings. During this visit details will be finalized and decorative features and accessories selected. Upon receipt of an order your installation date is set and the job is moved on to engineering and production.</p>
              <p>&nbsp; &nbsp; What happens when my project is ready to be installed? We commit to a specific installation date(s) and have a 95% on time delivery record. Installation dates are confirmed via email text, or phone about 5 days prior to your installation. </p>
              <p>&nbsp; &nbsp; Do you manufacture your products? Yes, Classy Closets is a direct manufacturer and have full control of the quality of our product from start to finish. Unlike many others in our industry, we do not source pre-fabricated parts from large producers thousands of miles away. By controlling our manufacturing we also have great flexibility in design and can react quickly should any adjustments be needed. If you have any other questions concerning our process or what it’s like to work with Classy Kitchen and Bath, reach out to one of our professional designers today! We look forward to working with you.</p>
              <div className='process-picts'>
                <img id='first-pict' alt='process' src='https://www.dropbox.com/s/mzmpzvljytt1wh8/049A8385.Man-at-skill-saw-great.jpg?raw=1'/>
              </div>
            </div>
            <div id='desktop' className='info'>
              <h3>Our Process</h3>
              <div className='desktop-picts'>
                <div>
                  <img id='process-picts' alt='process' src='https://www.dropbox.com/s/mzmpzvljytt1wh8/049A8385.Man-at-skill-saw-great.jpg?raw=1'/>
                  <img id='process-picts' alt='process' src='https://www.dropbox.com/s/kz4xeghwhvn7lr2/049A8791.Classy-Closets-Granite.Edge-Polishing.jpg?raw=1'/>
                  <img id='process-picts' alt='process' src='https://www.dropbox.com/s/562h6caieusto3t/049A8880.Classy-Closets-Sanding-Good.jpg?raw=1'/>
                </div>
                <div>
                  <p>&nbsp; &nbsp; At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget.</p>
                  <p style={styleBold}>&nbsp; &nbsp; Learn more about our process below by reading these Frequently Asked Questions:</p>
                  <p>&nbsp; &nbsp; I would love to see what Classy Closets can do for me. How do I get started? The quickest way to get started is to submit a "Start Your FREE CONSULTATION" form on our website and a member of our Classy Closets team will promptly respond to you. You can also call us at 480-731-1236 or visit the showroom nearest you.</p>
                  <p>&nbsp; &nbsp; What is the process? After you contact Classy Kitchen and Bath, a typical job will include a free in-home consultation. Depending on the amount of time you have available and the complexity of the job, your designer may do a design and give you a price during the first appointment at your home, or schedule a secondary meeting in your home or at one of our showrooms to review your drawings. During this visit details will be finalized and decorative features and accessories selected. Upon receipt of an order your installation date is set and the job is moved on to engineering and production.</p>
                  <p>&nbsp; &nbsp; What happens when my project is ready to be installed? We commit to a specific installation date(s) and have a 95% on time delivery record. Installation dates are confirmed via email text, or phone about 5 days prior to your installation. </p>
                  <p>&nbsp; &nbsp; Do you manufacture your products? Yes, Classy Closets is a direct manufacturer and have full control of the quality of our product from start to finish. Unlike many others in our industry, we do not source pre-fabricated parts from large producers thousands of miles away. By controlling our manufacturing we also have great flexibility in design and can react quickly should any adjustments be needed. If you have any other questions concerning our process or what it’s like to work with Classy Kitchen and Bath, reach out to one of our professional designers today! We look forward to working with you.</p>
                </div>
              </div>
            </div>
            <div id='showroom' className='info'>
              <h3>Visit A Showroom</h3>
              <p>&nbsp; &nbsp; At Classy Kitchen & Bath®, the process of designing and building your new kitchen or bath is all about you. We strive for 100% customer satisfaction and go above and beyond to build you a custom kitchen or bath that reflects you, your needs and your budget.</p>
              <p>&nbsp; &nbsp; First, one of our professional designers will come to your home for your free in-home consultation. He or she will work directly with you to create designs that expand your existing space and transform it into something functional and beautiful.</p>
              <p>&nbsp; &nbsp; Once your kitchen or bath plans are approved, the design goes to the manufacturing facility where the building process begins. This is where raw lumber and materials are cut, sanded, stained and assembled specifically for you.</p>
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