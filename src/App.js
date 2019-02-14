import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 600,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log('clicked');

   app.models
.predict(
Clarifai.COLOR_MODEL,
    // URL
    "https://samples.clarifai.com/metro-north.jpg"
)
.then(function(response) {
    // do something with responseconsole.log(response);
    },
    function(err) {// there was an error}
);

  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
