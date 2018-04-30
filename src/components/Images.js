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
      this.setState({
        image: this.props.srcPreload,
      })
  };

  handleImageLoaded() {
    this.setState({ image: this.props.srcLoaded });
  }

  handleImageError() {
    this.setState({ image: this.props.srcPreload });
  }

  render() {
    return (
      <div>

        <img src={this.state.image} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt={this.props.name}/>
      
      </div>
    )
  }

}

export default IronImage;