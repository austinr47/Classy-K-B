import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import PopSchedule from './PopSchedule'
// import SlideShow from 'react-image-show';
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
    axios.get(`/countertops/`).then(response => {
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
    // let countertops = () => {
    //     return this.state.categories.map((item, index) => {
    //     // let category = this.props.match.params.section === 'countertops' ? 'countertops-types' : this.props.match.params.section
    //     return <div key={item.name} className='counter-name'>
    //               <div><NavLink to={`/countertops-types/${item.name}`}>
    //                 <img alt={item.name} src={item.photo} /></NavLink>
    //               </div>
    //               <h2>{item.name}</h2>
    //             </div>
    //   })
    // }

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
              <p>&nbsp; &nbsp; When it comes to kitchen and bath remodeling in Arizona, Classy Kitchen & Bath® offers the top of the line countertops to transform your home.</p>
              <p>&nbsp; &nbsp; There are many things to consider when choosing a countertop and in order to choose the one that is right for you and your lifestyle, it is important to know about all of your options. </p>
              <p>&nbsp; &nbsp; The more information you know, the better off you will be in making the right choice.</p>
              <div className='sched'>
                <SchedContent />
              </div>
            </div>
          </div>
          <div className='samples'>
            <h2>{this.state.category}</h2>
              <div id='countertop-picts'>
                {/* {countertops()} */}
                <h2>{this.state.granite.name}</h2>
                <div className='counter-name'>
                  <div><NavLink to={`/countertops-types/${this.state.granite.name}`}>
                    <img alt={this.state.granite.name} src={this.state.granite.photo} /></NavLink>
                  </div>
                  <p id='parag'>&nbsp; &nbsp; {this.state.granite.description1}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description2}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description3}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.granite.description4}</p>
                </div>
                <div id='desktop-p' className='counter-name'>
                  <p>&nbsp; &nbsp; {this.state.granite.description2}</p>
                  <p>&nbsp; &nbsp; {this.state.granite.description3}</p>
                  <p>&nbsp; &nbsp; {this.state.granite.description4}</p>
                </div>
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
                </div>
                <div id='desktop-p' className='counter-name'>
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
                </div>
              </div>


              <div id='countertop-picts'>
                <h2>{this.state.marble.name}</h2>
                <div className='counter-name'>
                  <div><NavLink to={`/quartz`}>
                    <img alt={this.state.marble.name} src={this.state.marble.photo} /></NavLink>
                  </div>
                  <p id='parag'>&nbsp; &nbsp; {this.state.marble.description1}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description2}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description3}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description4}</p>
                  <p id='mobile-p'>&nbsp; &nbsp; {this.state.marble.description5}</p>
                </div>
                <div id='desktop-p' className='counter-name'>
                  <p>&nbsp; &nbsp; {this.state.marble.description2}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description3}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description4}</p>
                  <p>&nbsp; &nbsp; {this.state.marble.description5}</p>
                </div>
              </div>
          </div>
        </div>
        <Footer />  
      </div>
    );
  }
}

//     return (
//       <div className='countertops-main'>
//         {this.state.showSched &&
//           <PopSchedule hideSched={() => this.setState({showSched: false})}/>
//         }
//         <Header /> 
//         {/* <div className='desktop-title'>
//           <h1>What COUNTERTOP is right for you?</h1>
//         </div> */}
//         <div className='countertops-content'>
//           {/* <div className='countertops-main-img'> */}
//             {/* <img alt='main' src={pict7}/> */}
//             {/* <SlideShow 
//               images={this.state.pict}
//               width="100%"
//               imagesWidth="800px"
//               imagesHeight="450px"
//               imagesHeightMobile="56vw"
//               thumbnailsWidth="920px"
//               thumbnailsHeight="12vw"
//               indicators='true'
//               fixedImagesHeight
//             /> */}
//           {/* </div> */}
//           <div className='countertops-button'>
//             <span onClick={this.showSched}>
//               Start Your FREE CONSULTATION
//             </span>
//           </div>
//           <div className='countertops-types'>
//             <h3>What COUNTERTOP is right for you?</h3>
//             <p>&nbsp; &nbsp; When it comes to kitchen and bath remodeling in Arizona, Classy Kitchen & Bath® offers the top of the line countertops to transform your home.</p>
//             <p>&nbsp; &nbsp; There are many things to consider when choosing a countertop and in order to choose the one that is right for you and your lifestyle, it is important to know about all of your options. </p>
//             <p>&nbsp; &nbsp; The more information you know, the better off you will be in making the right choice.</p>
//             <div className='countertops-sched'>
//               <SchedContent />
//             </div>
//           </div>
//           <div className='countertops-samples'>
//             <h2>COUNTERTOPS</h2>
//             <div>
//               {countertops()}
//               <div>
//               <NavLink to='/countertops-types'><img alt='Doors' src={this.state.pict[0]} /></NavLink>
//                 Granite
//               </div>
//               <div>
//               <NavLink to='/countertops-types'><img alt='Doors' src={this.state.pict[1]} /></NavLink>
//                 Marble
//               </div>
//               <div>
//               <NavLink to='/countertops-types'><img alt='Doors' src={this.state.pict[2]} /></NavLink>
//                 Quartz
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />  
//       </div>
//     );
//   }
// }

export default Countertops