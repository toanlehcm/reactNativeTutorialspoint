import { StyleSheet } from 'react-native'
import { IMG_DIAMOND_SHAPE } from '../../src/constants/Viewer3D';

export default StyleSheet.create({

  containerPage: {
    width: "100%",
    margin: "auto",
  },

  titlePage: {
    marginTop: 168,
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "50px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },

  titleDiamondShape: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "center",
    marginTop: 39,
    marginBottom: 50,
  },

  imgDiamondShape: {
    width: 152,
    height: 128,
    flexShrink: 0,
  },

  titleCaratSize: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 67,
    marginBottom: 48,
  },

  containerCategoryDiamond: {
    margin: 108,
  },

  titleCategory: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "left",
    marginTop: 53
  },

  labelProduct: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  }

});