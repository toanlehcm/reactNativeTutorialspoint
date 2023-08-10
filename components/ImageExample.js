import React, { Component } from 'react'
import { Image } from 'react-native'

var yourPictureRequireForderSame = require('./reactnative_tutoritalspoint.png');

var yourPictureRequireForderNoSame = require('../src/images/reactnative_tutoritalspoint.png');

var yourPictureUri = 'https://reactjs.org/logo-og.png';

const ImagesExample = () => (
  <>
    <Image id='img_1' source={require('./reactnative_tutoritalspoint.png')} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_2_1' source={yourPictureRequireForderSame} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_2_2' source={yourPictureRequireForderNoSame} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_3' source={{ uri: '../src/images/reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_4' source={{ uri: './reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_5' source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 40, height: 40 }} />
    ----
    <Image id='img_6' source={yourPictureUri} style={{ width: 40, height: 40 }} />
  </>
)

export default ImagesExample