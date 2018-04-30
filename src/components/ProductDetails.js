import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import PopSchedule from './PopSchedule'
import { NavLink } from 'react-router-dom'
import SchedContent from './SchedContent'

class ProductDetails extends Component {
  constructor() {
    super()
    this.state = {
      showSched: false,
      pict: '',
      showDetails: true,
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

  toggleDetail(value) {
    this.setState({
      showDetails: value
    })
  }

  render() {
    const section = (params) => {
      let newArr = []
      let split = params.split('')
      newArr.push(split[0].toUpperCase())
      for(let i = 1; i < split.length; i++) {
        newArr.push(split[i])
      }
      return newArr
    }
    const detailClass = this.state.showDetails ? 'productdetails-showDetail' : ''
    const infoClass = !this.state.showDetails ? 'productdetails-showInfo' : ''
    const detailContent = !this.state.showDetails ? 'productdetails-detailContent' : ''
    const infoContent = this.state.showDetails ? 'productdetails-infoContent' : ''
    const link = this.props.match.params.section === 'countertops' ? <NavLink to={`/countertops-types/${this.props.match.params.types}`}>{section(this.props.match.params.types)}</NavLink> : ''
    const slash = this.props.match.params.section === 'countertops' ? '/' : ''

    return (
      <div className='productdetails-main'>
        {this.state.showSched &&
          <PopSchedule hideSched={() => this.setState({showSched: false})}/>
        }
        <Header /> 
        <div className='productdetails-content'>
          <div className='productdetails-button'>
            <span onClick={this.showSched}>
              Start Your FREE CONSULTATION
            </span>
          </div>
          <div className='productdetails-back'>
            <span><NavLink to='/'>Home</NavLink> / <NavLink to={`/${this.props.match.params.section}`}>{section(this.props.match.params.section)}</NavLink> {slash} {link} / {this.props.match.params.details}</span>
          </div>
          <div className='productdetails-pict1'>
            <h1>{this.props.match.params.details}</h1>
            <div className='productdetails-pict'>
              <img alt='main pict' src={this.state.pict}/>
            </div>
            <div className='productdetails-slider'>
              <div className='productdetails-arrow-left'>
              <i className="fas fa-angle-double-left"></i>
              </div>
              <div className='productdetails-slide-pict'>
                <img alt='main pict' src={this.state.pict}/>
                <img alt='main pict' src={this.state.pict}/>
                <img alt='main pict' src={this.state.pict}/>
              </div>
              <div className='productdetails-arrow-right'>
              <i className="fas fa-angle-double-right"></i>
              </div>
            </div>
          </div>
          <div className='productdetails-info'>
            <div className='productdetails-sched'>
              <SchedContent />
            </div>
            <div className='productdetails-par'>
              <p>&nbsp; &nbsp; Granite is a natural stone found within the Earth's crust. Its natural beauty, color variation and durability make it an excellent option for any countertop. </p>
              <p>&nbsp; &nbsp; Granite is a non-porous stone which makes it easy to clean and less susceptible to residual bacteria, mold and mildew. </p>
              <p>&nbsp; &nbsp; Granite resists heat, scratches and stains and offers an endless variety of color options due to different patterns of veins, specks and swirls found within each individual slab.</p>
              <div className='productdetails-details'>
                <span>
                  <h4 className={detailClass} onClick={() => this.toggleDetail(true)}>Details</h4>
                  <h4 className={infoClass} onClick={() => this.toggleDetail(false)}>Information</h4>
                </span>
                <div className={detailContent}>
                  <p>&nbsp; &nbsp; Alaska granite is made up of mostly feldspar and quartz. Rust-colored veins will appear on some of the granite slabs due to oxidation over millions of years. During the polishing process, an epoxy resin is applied to the surface of the stone to fill in any natural pits, cracks or fissures that may exist. This does not affect the durability, maintenance, or beauty of the natural stone.</p>
                  <p>&nbsp; &nbsp; It is possible for some of the more minute pits that are too small to effectively hold the resin, to reopen during other finishing stages. However, this will not detract from the overall quality or appearance of the granite. Due to the qualities of the natural stone, the granite slabs are book-matched; meaning slab one and slab two will be cut and polished to create a mirror image of each other. These are then kept in sequence, which allows for a consistent flow in pattern. As a natural stone product, it is recommended that this be sealed to extend its longevity.</p>
                </div>
                <div className={infoContent}>
                  <p>Stone Type: <br/>Granite</p>
                  <p>Sizes/Thickness: <br/>3/4" (2cm slab) <br/>1-1/4" (3cm slab)</p>
                  <p>Origin: <br/>Brazil</p>
                  <p>Finish: <br/>Polished</p>
                  <p>Recommended Uses: <br/>Commercial & Residential <br/>Interior <br/>Floor & Wall <br/>Backsplashes <br/>Countertops <br/>Fireplaces <br/>Tub Surrounds & Showers <br/>Vanities </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetails