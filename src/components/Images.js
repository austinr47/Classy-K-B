import React, { Component } from 'react';

class IronImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.ironImageHd.classList.add('iron-image-fade-in');
    }

  };

  render() {
    return (
      <div className="iron-image-container">
      
        <img className="iron-image-loaded" ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}/>
        <img className="iron-image-preload" src={this.props.srcPreload} style={{ backgroundImage: `url('${this.props.srcPreload}')` }}/>
      
      </div>
    )
  }

}

export default IronImage;