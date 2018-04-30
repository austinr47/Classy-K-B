import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios'
import Footer from './Footer'
import PopSchedule from './PopSchedule'
import { NavLink } from 'react-router-dom'
import SchedContent from './SchedContent'
import pict4 from '../assets/homepage/Aviano and Volterra Vanity in Brown Pearwood (1)_preview.jpg'
import pict1 from '../assets/homepage/Gray-Milano-Door-Kitchen.jpg'
import pict5 from '../assets/homepage/Hi-gloss white cabinets with Cambrian Black granite_preview.jpg'
import pict6 from '../assets/homepage/Merano and Bergamo Cabinetry in White (1)_preview.jpg'
import pict2 from '../assets/homepage/Scottsdale Granite Vanity_preview.jpg'
import pict3 from '../assets/homepage/White with Bella Terra Kitchen_preview.jpg'
import Images from './Images'
import image from '../assets/Classy-K&B-image-placeholder.jpg'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      pict: [],
      sliderStart: 0,
      showSched: false,
    }
    this.showSched=this.showSched.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)  
    axios.get('/landing').then(response => {
      this.setState({
        pict: [pict1, pict2, pict3, pict4, pict5, pict6]
      })
    })
    this.interval = setInterval(() => {
      let state = this.state.sliderStart
      this.state.sliderStart <= this.state.pict.length - 2 ? this.setState({sliderStart: state + 1}) : this.setState({sliderStart: 0})
      this.state.animation ? this.setState({animationCSS: 'landing-img1', animation: false}) : this.setState({animationCSS: 'landing-img2', animation: true})
    }, 5000);
  }
  
  showSched() {
    this.setState({
      showSched: true
    })
  }
  
  render() {
      return (
      <div className='landing-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        <Header />
        <div className='landing-content'>
          <div className='landing-button'>
            <span onClick={this.showSched}>
              Start Your FREE CONSULTATION
            </span>
          </div>
          <div className='landing-slider'>
            <div >Life. Organized.<span>®</span></div>
            <img className={this.state.animationCSS} width="1000" height="664" alt='slider' src={this.state.pict[this.state.sliderStart]}/> 
            <span>Cut clutter and create beautiful, space-saving, custom storage solutions!</span>
          </div>
          <div className='landing-button-2'>
            <span onClick={this.showSched}>
              Start Your FREE CONSULTATION
            </span>
          </div>
          <div className='landing-info'>
            <div className='landing-section'>
              <h3>Welcome to Classy Kitchen & Bath®</h3>
              <p>&nbsp; &nbsp; The professional designers at Classy Kitchen and Bath understand that your home is unique and that kitchen and bath solutions aren’t one-size-fits-all. Schedule a free in-home consultation today and learn more about our custom kitchen and bath storage solutions. Let us help you create your dream storage solution!</p>
              <p>&nbsp; &nbsp; With Classy Kitchen and Bath storage systems, you don’t have to sacrifice form for practicality- you can have both! Choose between a number of styles, materials, finishes, hardware and accessories to create the perfect closet solution for you. </p>
              <h4>&nbsp; &nbsp; With a Classy Kitchen and Bath design you can look forward to many things:</h4>
              <p>&nbsp; &nbsp; <strong>Quality:</strong> Each of our designs are created using high quality materials and hardware. Whether you choose to execute your project in solid wood or laminate, you can be assured that you are receiving the best for your home. </p>
              <p>&nbsp; &nbsp; <strong>Proper Fit:</strong> Your home is unique and your storage solution needs to be as well - a Classy Closets storage solution isn't one size fits all. We make sure your built-in project fits tightly where it should, and that the right accessories and hardware are used to make it a perfect fit. </p>
              <p>&nbsp; &nbsp; <strong>Custom Designs:</strong> Choose from a selection of materials, finishes, designs, and accessories that fit your style and budget.</p>
              <p>&nbsp; &nbsp; <strong>Solutions that last:</strong> We don't design storage solutions that will year out in a few years. When you invest in Classy Closets, you can be sure that your storage solution will stand the test of time. </p>
              <p>&nbsp; &nbsp; At Classy Kitchen and Bath, our biggest priority is you. We want to make sure that you're happy with your custom storage solution. Once you schedule a free in-home consultation with one of our professional designers, you're sure to see the Classy Closets difference. </p>
              <p>We look forward to working with you and helping you to create your perfect storage solution!</p>
            </div>
            <div className='landing-sched'>
              <SchedContent />
            </div>
          </div>
          <h2>View Our Products</h2>
          <div className='landing-links'>
            <div className='link-details'>
            <NavLink to='/kitchens'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/yn8opdrg9hhhg06/Landing-kitchen-%281%29.jpg?raw=1' name='Kitchens' />
              </div></NavLink>
              Kitchens
              <p>At Classy Kitchen and Bath our professional designers create custom kitchens designed just for you. Create a custom kitchen that fits your style, budget and space by scheduling your free in-home consultation today!</p>
            </div>
            <div className='link-details'>
              <NavLink to='/countertops'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/fwqcxsaa36rq3m3/Cambria-Brittanica-%281%29.jpg?raw=1' name='Countertops' />
              </div></NavLink>
              Countertops
              <p>Choose from a selection of granite, marble or quartz to find the perfect countertop material for your new project. At Classy Kitchen and Bath, we can help you find the perfect countertop material for your kitchen and bathroom. Shop now!</p>
            </div>
            <div className='link-details'>
              <NavLink to='/baths'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/km1mv00swlpa2im/1-Classic-Tile-and-Glass-Bathroom-resized.jpg?raw=1' name='Bathrooms' />
              </div></NavLink>
              Baths
              <p>At Classy Kitchen and Bath, we create custom bathrooms designed especially for your home, style and budget. Choose from a large selection of styles, materials and hardware to create your dream bathroom! </p>
            </div>
            <div className='link-details'>
              <NavLink to='/doors'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/9gy2vt3jrd0f7h0/26-The-Highland-resized.jpg?raw=1' name='Cabinet Doors' />
              </div></NavLink>
              Cabinet Doors
              <p>At Classy Kitchen and Bath you can choose from a selection of different cabinet door styles for your custom kitchen or bath project. Whether you’re searching for modern cabinets or traditional cabinets, Classy Kitchen and Bath has it all. </p>
            </div>
            <div className='link-details'>
              <NavLink to='/our-process'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/j6z2zm5vwynxjha/Landing-Process-%281%29.jpg?raw=1' name='Our Process' />
              </div></NavLink>
              Our Process
              <p>At Classy Kitchen and Bath, the process of designing and building your new kitchen or bathroom is all about you. Our professional designers are passionate about creating a custom kitchen and/or bathroom that reflects your home, style and budget. </p>
            </div>
            <div className='link-details'>
              <NavLink to='/showroom'><div>
                <Images srcPreload={image} srcLoaded='https://www.dropbox.com/s/anscz4jg8sis97i/chandler-showroom.jpg?raw=1' name='Showroom' />
              </div></NavLink>
              Visit a Showroom
              <p>Come to a local showroom to meet with an expert designer, see our custom build displays, and see how we can create the custom kitchen or bath that fits your style perfectly.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;