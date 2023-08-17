import React, { Component } from 'react';
import { View, Text } from 'react-native';
import '@google/model-viewer';
import Styles from './public/style/style.js';

class App extends Component {
  render() {
    const MODEL_3D_TOWN_ON_CAPITAL_ISLE = require('./public/model3D/issum_the_town_on_capital_isle.glb');

    const ENVIRONMENT_TEST = require('./public/model3D/environment_test.hdr')

    return (
      <View style={Styles.model3DContainer}>
        <model-viewer
          id="model_3D_hero_title"
          src={MODEL_3D_TOWN_ON_CAPITAL_ISLE}
          style={Styles.model3DHeroTitle}
          alt="model 3D hero title"
          loading="lazy"
          auto-rotate
          reveal="auto"
          shadow-intensity="1"
          camera-controls
          touch-action="none"
          environment-image={ENVIRONMENT_TEST}

        // camera-orbit="-8.142746deg 68.967deg 0.6179899m" 
        // camera-target="-0.003m 0.0722m 0.0391m" 

        // field-of-view="45deg" 
        // min-field-of-view="25deg" 
        // max-field-of-view="45deg" 
        // min-camera-orbit="auto auto 5%"

        // interpolation-decay="200" 
        >
        </model-viewer>
      </View>
    )
  }
}

export default App
