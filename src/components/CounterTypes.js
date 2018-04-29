import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import PopSchedule from './PopSchedule'
import { NavLink } from 'react-router-dom'
import SchedContent from './SchedContent'

class CounterTypes extends Component {
  constructor() {
    super() 
    this.state = {
      showSched: false,
      picts: [],
      details: [],
    }
    this.showSched=this.showSched.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)

  }

  showSched() {
    this.setState({
      showSched: true,
    })
  }

  render() {
    return (
      <div className='countertypes-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        <Header /> 
        <div className='countertypes-back'>
          <span><NavLink to='/'>Home</NavLink> / <NavLink to='/countertops'>Countertops</NavLink> / {this.props.match.params.types}</span>
        </div>
        <div className='countertypes-content'>
          <div className='countertypes-info'>
            <div className='countertypes-button'>
              <span onClick={this.showSched}>
                Start Your FREE CONSULTATION
              </span>
            </div>
            <h1>{this.props.match.params.types}</h1>
            <h4>Why Choose Granite?</h4>
            <p>&nbsp; &nbsp; Granite has become one of the top choices for countertops because it is both durable and beautiful.</p>
            <p>&nbsp; &nbsp; Granite is appreciated because of its durability, ability to hold up to heat, beauty, and ability to transform the look of your kitchen or bath into a room of luxury.</p>
            <div className='countertypes-sched'>
              <SchedContent />
            </div>
          </div>
          <div className='countertypes-pictures'>
            <h2>{this.props.match.params.types}</h2>
            <div>
              <NavLink className='link' to={`/countertops/granite/${this.props.match.params.types}`}><img alt='pict' src={this.state.picts[0]}/></NavLink>
              <span>Alaska</span>
              <span>Small Description</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CounterTypes