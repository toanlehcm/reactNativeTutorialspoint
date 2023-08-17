import React, { Component } from 'react';
import { View, Text } from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from './public/style/style.js';
import HeroTitle from './components/HeroTitle.js';
import Viewer3D from './components/Viewer3D.js';

class App extends Component {
  render() {
    return (
      <View className="container m-0 w-100">
        <div className='row'>
          <div className='col-12 m-0 p-0' style={Styles.model3DContainer}>
            {/* <HeroTitle></HeroTitle> */}
          </div>

          <div className='col-12 m-0 p-0'>
            <Viewer3D></Viewer3D>
          </div>
        </div>
      </View>
    )
  }
}

export default App
