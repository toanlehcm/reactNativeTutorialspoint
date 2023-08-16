import React from 'react';
import { View, Text } from 'react-native';
import { ModelViewer } from 'react-3d-model-viewer';

const ModelViewerComponent = () => {
  // var model3D = require('../public/model3D/issum_the_town_on_capital_isle.glb');

  // var yourPictureRequireForderSame = require('./reactnative_tutoritalspoint.png');

  return (
    <View>
      <Text>3D Model Viewer</Text>
      <ModelViewer
        // src="../public/model3D/issum_the_town_on_capital_isle.glb"
        // url="https://sketchfab.com/models/e433923a64d549fabb2d30635d643ab6/embed"
        src="https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf"
        alt="3D Model"
        width={400}
        height={300}
      />
    </View>
  );
};

export default ModelViewerComponent;
<div class="sketchfab-embed-wrapper">
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
</div>