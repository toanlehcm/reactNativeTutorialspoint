import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import '@google/model-viewer';
import Styles from '../public/style/style.js';

const HeroTitle = () => {
  const MODEL_3D_TOWN_ON_CAPITAL_ISLE = require('../public/model3D/issum_the_town_on_capital_isle.glb');

  const ENVIRONMENT_TEST = require('../public/model3D/environment_test.hdr')

  return (
    <View style={Styles.container}>
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
  );
};

export default HeroTitle;

{/* <div class="sketchfab-embed-wrapper">
  <iframe title="Issum, The town on Capital Isle"
    frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
    src="https://sketchfab.com/models/e433923a64d549fabb2d30635d643ab6/embed"> </iframe>
  <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
    <a href="https://sketchfab.com/3d-models/issum-the-town-on-capital-isle-e433923a64d549fabb2d30635d643ab6?utm_medium=embed&utm_campaign=share-popup&utm_content=e433923a64d549fabb2d30635d643ab6"
      target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Issum, The town on Capital Isle </a> by
    <a href="https://sketchfab.com/Olee?utm_medium=embed&utm_campaign=share-popup&utm_content=e433923a64d549fabb2d30635d643ab6"
      target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Olee </a> on
    <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e433923a64d549fabb2d30635d643ab6"
      target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
  </p>
</div> */}