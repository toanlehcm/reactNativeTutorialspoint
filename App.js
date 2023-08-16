import React, { Component } from 'react'
import { View, Text } from 'react-native'
import '@google/model-viewer';

class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>

        <model-viewer alt="Neil Arms" src="https://diorama-3d.vercel.app/little_tokyo.glb" ar
          environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1" camera-controls touch-action="pan-y">
        </model-viewer>
      </View>
    )
  }
}
export default App
