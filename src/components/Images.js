import React, { Component } from 'react';

class IronImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
    this.state = {
      image: '',
    }
  }

  componentDidMount() {
    // this.setState({
    //   image: this.props.srcPreload
    // })
        
    // const hdLoaderImg = new Image();

    // hdLoaderImg.src = this.props.srcLoaded;

    // this.props.srcPreload.onload = () => {
      // this.ironImageHd.setAttribute(
      //   'style',
      //   `background-image: url('${this.props.srcLoaded}')`
      // );
      // this.ironImageHd.classList.add('iron-image-fade-in');

      this.setState({
        image: this.props.srcPreload,
      })
    // }

  };

  handleImageLoaded() {
    this.setState({ image: this.props.srcLoaded });
  }

  handleImageError() {
    this.setState({ image: this.props.srcPreload });
  }

  render() {
    // let image = this.props.srcLoaded
    // image.onLoad = () => {
    //   this.setState({
    //     image: image
    //   })
    // }
    return (
      // <div className="iron-image-container">
      <div>

        <img src={this.state.image} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt={this.props.name}/>
      
        {/* <img className="iron-image-loaded" ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}/>
        <img className="iron-image-preload" src={this.props.srcPreload} style={{ backgroundImage: `url('${this.props.srcPreload}')` }}/> */}
      
      </div>
    )
  }

}

export default IronImage;