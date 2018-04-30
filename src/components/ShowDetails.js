import React, { Component } from 'react'

export default class ShowDetails extends Component {
  constructor() {
    super()
    this.state = {
      picts: [],
      df: [],
      slab: [],
      italy: [],
      index: 0,
      name: [],
      description: [],
    }
    this.close=this.close.bind(this)
    this.next=this.next.bind(this)
  }

  componentDidMount() {
    let pictsState = []
    let dfPicts = []
    let slabPicts = []
    let italyPicts = []
    let description = []
    let name = []
    if(this.props.category === 'doors') {
      this.props.picts.map((item, index) => {
        pictsState.push(item.photo)
        dfPicts.push(item.DF)
        slabPicts.push(item.Slab)
        italyPicts.push(item.Italy)
        description.push(item.description)
        name.push(item.displayName)
        return null
      })
      this.setState({
        picts: pictsState,
        df: dfPicts,
        slab: slabPicts,
        italy: italyPicts,
        index: this.props.index,
        description: description,
        name: name,
      })
    } else this.props.picts.map((item, index) => {
        pictsState.push(item.photo)
        description.push(item.description)
        name.push(item.displayName)
        return null
      })
      this.setState({
        picts: pictsState,
        index: this.props.index,
        description: description,
        name: name,
      })
  }

  close() {
    this.props.hideDetails()
  }

  next(sign) {
    let next = () => {
      if(sign === '+') {
        return this.state.index === this.state.picts.length -1 ? 0 : this.state.index + 1
      } else if(sign === '-') {
        return this.state.index === 0 ? this.state.picts.length - 1 : this.state.index - 1
      }
    }
    this.setState({
      index: next(),
    })
  }

  render() {
    let pict = () => {
      if(this.props.category === 'doors') {
        return <span className='all-picts'>
                  <img id='pictures' src={this.state.picts[this.state.index]} alt='alt1'/>
                  <span className='other-picts'>
                    <span className='item-name'>{this.state.name[this.state.index]}</span>
                    <img id='pictures-italy' src={this.state.italy[this.state.index]} alt='alt1'/>
                  </span>
                </span>
      } else return <img id='pictures' src={this.state.picts[this.state.index]} alt='alt2'/>
    }

    let name = () => {
      if(this.props.category === 'doors') {
        return null
      } else return <h2 className='pict-name'>{this.state.name[this.state.index]}</h2>
    }

    return (
      <div onClick={this.close} className='showDetails-main'>
        <div onClick={event => event.stopPropagation()} className='content'>
          <div className='close' onClick={this.close}>X</div>
          <div className='info'>
            <span className='desktop' onClick={() => this.next('-')}>&nbsp;<i className='fa fa-angle-double-left'/></span>
            <div className='details'>
              {pict()}
              <div>
                <span className='mobile' onClick={() => this.next('-')}>&nbsp;<i className='fa fa-angle-double-left'/>&nbsp;Prev</span>
                <span className='mobile' onClick={() => this.next('+')}>Next&nbsp;<i className='mobile fa fa-angle-double-right'/>&nbsp;</span>
              </div>
                {name()}
              <p className='pict-description'>
                {this.state.description[this.state.index]}
              </p>
            </div>
            <span className='desktop' onClick={() => this.next('+')}><i className='fa fa-angle-double-right'/>&nbsp;</span>
          </div>
        </div>
      </div>
    )
  }
}