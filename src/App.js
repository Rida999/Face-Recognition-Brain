import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';
import React, { Component } from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';


const particlesOptions= {
  particles: {
            color: {
              value: "#5C6B73",
            },
            links: {
              color: "#5C6B73",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
        };
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       imgURL:'',
       route:'signin',
    }
  }

  onInputChange=(e)=>{
    this.setState({input:e.target.value});
  }

  onSubmit=()=>{
    this.setState({imgURL:this.state.input});
  }

  onRouteChange=(route)=>{
    setTimeout(()=>this.setState({route:route}),500)
  }
  
  render() {
    return (
      <div className="App">
      <Particles
      className='particles'
    params={particlesOptions} />
      {this.state.route==='signin'?<Signin onRouteChange={this.onRouteChange}/>:
      (this.state.route==='home'?
      <div>
        <Navigation onRouteChange={this.onRouteChange} />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imgURL={this.state.imgURL} />
      </div>:
      <Register onRouteChange={this.onRouteChange}/>)
      }
    </div>
    )
  }
}

