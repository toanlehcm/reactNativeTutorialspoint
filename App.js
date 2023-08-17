import React, { Component } from 'react';
import { View, Text } from 'react-native';
import '@google/model-viewer';
import Styles from './public/style/style.js';

class App extends Component {
  render() {
    const MODEL_3D_TOWN_ON_CAPITAL_ISLE = require('./public/model3D/issum_the_town_on_capital_isle.glb');

    const ENVIRONMENT_TEST = require('./public/model3D/environment_test.hdr')

    const MODEL_3D_HOUSE = require('./public/model3D/little_tokyo.glb');

    return (
      <View style={Styles.model3DContainer}>
        {/* <Text>App</Text> */}

        {/* <model-viewer alt="Neil Arms" src="https://diorama-3d.vercel.app/little_tokyo.glb" ar
          environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1" camera-controls touch-action="pan-y">
        </model-viewer> */}

        {/* <model-viewer alt="Neil Arms" src={MODEL_3D_HOUSE} ar
          environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1" camera-controls touch-action="pan-y">
        </model-viewer> */}

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
          touch-action="pan-y"
          environment-image={ENVIRONMENT_TEST}
        // skybox-image={ENVIRONMENT_TEST}
        >
        </model-viewer>
      </View>
    )
  }
}

export default App
