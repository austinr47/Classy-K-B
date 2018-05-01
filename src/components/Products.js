import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import PopSchedule from './PopSchedule'
import SchedContent from './SchedContent'
import ShowDetails from './ShowDetails'
import Images from './Images'
// import image from '../assets/Classy-K&B-image-placeholder.jpg'
import image from '../assets/Spinner-1.1s-139px.gif'


class Products extends Component {
  constructor() {
    super()
    this.state = {
      showSched: false,
      category: '',
      info: [],
      details: [],
      pictDetails: false,
    }

    this.showSched=this.showSched.bind(this)
    this.getData=this.getData.bind(this)
    this.showDetail=this.showDetail.bind(this)

  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getData(this.props.match.params.section)
  }
  
  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0)
    this.getData(nextProps.match.params.section)
  }

  getData(pathname) {
    axios.get(`/api/${pathname}/`).then(response => {
      this.setState({
        info: response.data.info,
        details: response.data.details,
        category: response.data.category,
      })
    })
  }
  
  showSched() {
    this.setState({
      showSched: true
    })
  }

  showDetail(index) {
    this.setState({
      pictDetails: true,
      index: index
    })
  }
  
  render() {
    let doorCSS = this.props.match.params.section === 'doors' ? 'doors-pictures' : ''
    let title = this.state.info[0]
    let info = () => {
      let arr = []
      for(let i = 1; i < this.state.info.length; i++) {
        arr.push(<p key={i}> &nbsp; &nbsp; {this.state.info[i]}</p>)
      }
      return arr
    }

    let picts = this.state.details.map((item, index) => {
      let category = this.props.match.params.section === 'countertops' ? 'countertops-types' : this.props.match.params.section
      
      if(this.props.match.params.section === 'kitchens'){
        return <div key={item.displayName} onClick={() => this.showDetail(index)}>
                <Images srcPreload={image} srcLoaded={item.photo} name={item.displayName} />
              </div>
      
      }  else if(this.props.match.params.section === 'baths'){
        return <div key={item.displayName} onClick={() => this.showDetail(index)}>
                  <Images srcPreload={image} srcLoaded={item.photo} name={item.name} />
                </div>
      
      }  else if(this.props.match.params.section === 'doors'){
        return <div key={item.displayName} onClick={() => this.showDetail(index)}>
                <Images srcPreload={image} srcLoaded={item.photo} name={item.name} />
                <span>{item.displayName}</span>
                <img id='picture-hidden' alt={item.name} src={item.Italy} />
              </div>
      } else if(this.props.match.params.section === 'quartz'){
        return <div id='quartz-picts' key={item.displayName}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Images srcPreload={image} srcLoaded={item.photo} name={item.name} />
                </a>
                <span id='quartz-name'>{item.displayName}</span>
                <span>{item.description}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">View more from our vendor!</a>
              </div>
      } else return <div key={item.displayName}><NavLink to={`/${category}/${item.displayName}`}><img alt={item.name} src={item.photo} /></NavLink>{item.name}</div>
    })

    return (
      <div className='products-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        {this.state.pictDetails && 
            <ShowDetails index={this.state.index} category={this.props.match.params.section} picts={this.state.details} hideDetails={() => this.setState({pictDetails: false})}/>
        }
        <Header /> 
        <div className='products-content'>
          <div className='info'>
            <div className='products-button'>
              <span onClick={this.showSched}>
                Start Your FREE CONSULTATION
              </span>
            </div>
            <div className='products-types'>
              <h3>{title}</h3>
              {info()}
              <div className='products-sched'>
                <SchedContent />
              </div>
            </div>
          </div>
          <div className='products-samples'>
            <h2>{this.state.category}</h2>
              <div id={doorCSS}>
                {picts}
              </div>
          </div>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Products