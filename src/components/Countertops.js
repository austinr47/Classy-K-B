import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import PopSchedule from './PopSchedule'
import SchedContent from './SchedContent'


class Countertops extends Component {
  constructor() {
    super()
    this.state = {
      showSched: false,
      pict: [],
      info: [],
      details: [],
      category: [],
      categories: [],
      granite: [],
      quartz: [],
      marble: [],
    }
    this.showSched=this.showSched.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)   
    axios.get(`/api/countertops/`).then(response => {
      this.setState({
        granite: response.data.categories[0],
        quartz: response.data.categories[1],
        marble: response.data.categories[2],
        info: response.data.info,
        details: response.data.details,
        category: response.data.category,
        categories: response.data.categories,
      })
    }) 
  }

  showSched() {
    this.setState({
      showSched: true
    })
  }

  render() {

    return (
      <div className='countertops-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        <Header /> 
        <div className='content'>
          <div className='info'>
            <div className='button'>
              <span onClick={this.showSched}>
                Start Your FREE CONSULTATION
              </span>
            </div>
            <div className='types'>
              <h3>What COUNTERTOP is right for you?</h3>
              <p>When it comes to kitchen and bath remodeling in Arizona, Classy Kitchen & Bath® offers the top of the line countertops to transform your home.</p>
              <p>There are many things to consider when choosing a countertop and in order to choose the one that is right for you and your lifestyle, it is important to know about all of your options. </p>
              <p>The more information you know, the better off you will be in making the right choice.</p>
              <div className='sched'>
                <SchedContent />
              </div>
            </div>
          </div>
          <div className='samples'>
            <h2>{this.state.category}</h2>
              <div id='countertop-picts'>
                <h2>{this.state.granite.name}</h2>
                <div className='counter-name'>
                  <div><NavLink to={'/countertops'}>
                    <img alt={this.state.granite.name} src={this.state.granite.photo} />
                    </NavLink>
                  </div>
                  <p id='parag'>&nbsp; &nbsp; {this.state.granite.description1}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description2}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description3}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description4}</p>
                </div>
                {/* <div id='desktop-p' className='counter-name'>
                  <p>&nbsp; &nbsp; {this.state.granite.description2}</p>
                  <p>&nbsp; &nbsp; {this.state.granite.description3}</p>
                  <p>&nbsp; &nbsp; {this.state.granite.description4}</p>
                </div> */}
              </div>


              <div id='countertop-picts'>
                <h2>{this.state.quartz.name}</h2>
                <div className='counter-name'>
                  <div><NavLink to={`/quartz`}>
                    <img alt={this.state.quartz.name} src={this.state.quartz.photo} /></NavLink>
                  </div>
                  <p id='parag'>&nbsp; &nbsp; {this.state.quartz.description1}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.quartz.description2}</p>
                  <ul id='mobile-p'>
                    <li>{this.state.quartz.description3}</li>
                    <li>{this.state.quartz.description4}</li>
                    <li>{this.state.quartz.description5}</li>
                    <li>{this.state.quartz.description6}</li>
                    <li>{this.state.quartz.description7}</li>
                  </ul>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.quartz.description8}</p>
                  <button id='quartz-button'><NavLink className='link' to={`/quartz`}>View Our Quartz Products!</NavLink></button>
                </div>
                {/* <div id='desktop-p' className='counter-name'>
                  <p>{this.state.quartz.description2}</p>
                  <ul>
                    <li>{this.state.quartz.description3}</li>
                    <li>{this.state.quartz.description4}</li>
                    <li>{this.state.quartz.description5}</li>
                    <li>{this.state.quartz.description6}</li>
                    <li>{this.state.quartz.description7}</li>
                  </ul>
                  <p>&nbsp; &nbsp; {this.state.quartz.description8}</p>
                  <p><NavLink to={`/quartz`}>View Our Quartz Products!</NavLink></p>
                </div> */}
              </div>


              <div id='countertop-picts'>
                <h2>{this.state.marble.name}</h2>
                <div className='counter-name'>
                  <div><NavLink to={`/countertops`}>
                    <img alt={this.state.marble.name} src={this.state.marble.photo} /></NavLink>
                  </div>
                  <p id='parag'>&nbsp; &nbsp; {this.state.marble.description1}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description2}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description3}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description4}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description5}</p>
                </div>
                {/* <div id='desktop-p' className='counter-name'>
                  <p>&nbsp; &nbsp; {this.state.marble.description2}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description3}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description4}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description5}</p>
                </div> */}
              </div>
          </div>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Countertops