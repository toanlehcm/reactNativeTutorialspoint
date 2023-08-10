import React, { Component } from 'react'
import { View, Image } from 'react-native'

var yourPictureRequireForderSame = require('./reactnative_tutoritalspoint.png');

var yourPictureRequireForderNoSame = require('../src/images/reactnative_tutoritalspoint.png');

var yourPictureUri = 'https://reactjs.org/logo-og.png';

var text = {
  case_1: "<Image id='img_1' source={require('./reactnative_tutoritalspoint.png')} style={{ width: 40, height: 40 }} />",
  case_2_1: "<Image id='img_2_1' source={yourPictureRequireForderSame} style={{ width: 40, height: 40 }} />",
  case_2_2: "<Image id='img_2_2' source={yourPictureRequireForderNoSame} style={{ width: 40, height: 40 }} />",
  case_3: "<Image id='img_3' source={{ uri: '../src/images/reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />",
  case_4: "<Image id='img_4' source={{ uri: './reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />",
  case_5: "<Image id='img_5' source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 40, height: 40 }} />",
  case_6: "<Image id='img_6' source={yourPictureUri} style={{ width: 40, height: 40 }} />",
}

const ImagesExample = () => (
  <View>
    <p>{text.case_1}</p>
    <Image id='img_1' source={require('./reactnative_tutoritalspoint.png')} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_2_1}</p>
    <Image id='img_2_1' source={yourPictureRequireForderSame} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_2_2}</p>
    <Image id='img_2_2' source={yourPictureRequireForderNoSame} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_3}</p>
    <Image id='img_3' source={{ uri: '../src/images/reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_4}</p>
    <Image id='img_4' source={{ uri: './reactnative_tutoritalspoint.png' }} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_5}</p>
    <Image id='img_5' source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 40, height: 40 }} />
    <p>----</p>

    <p>{text.case_6}</p>
    <Image id='img_6' source={yourPictureUri} style={{ width: 40, height: 40 }} />
  </View>
)

export default ImagesExample