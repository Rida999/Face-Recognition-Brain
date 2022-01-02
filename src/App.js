import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import React, { Component } from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       imgURL:'',
    }
  }

  onInputChange=(e)=>{
    this.setState({input:e.target.value});
  }

  onSubmit=()=>{
    this.setState({imgURL:this.state.input})
  }
  
  render() {
    return (
      <div className="App">
      <Particles
      className='particles'
    params={{
      particles: {
        number: {
          value: 50
        },
        size: {
          value: 3
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    }} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecognition imgURL={this.state.imgURL} />
    </div>
    )
  }
}

