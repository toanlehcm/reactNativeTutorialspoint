import React, { Component } from 'react';
import { View, Text } from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'reactstrap';

import Styles from './public/style/style.js';

import HeroTitle from './components/HeroTitle.js';
import Viewer3D from './components/Viewer3D/Viewer3D.js';

class App extends Component {
  render() {
    return (
      <div style={Styles.body}>
        <Viewer3D></Viewer3D>
      </div>

      // <View style={Styles.body}>
      //   <div>
      //     {/* <div style={Styles.model3DContainer}>
      //       <HeroTitle></HeroTitle>
      //     </div> */}
      //   </div>
      // </View>
    )
  }
}

export default App
