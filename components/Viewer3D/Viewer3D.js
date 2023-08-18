import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Row, Col, Button } from 'reactstrap';
import {
  TITLE_PAGE,
  DIAMOND_SHAPE,
  IMG_DIAMOND_SHAPE,
  CARAT_SIZE,
  IMG_CARAT_SIZE,
  TOP_RECOMMENDATION,
  SOLITAIRE_RINGS,
  ROMANCE_RINGS,
  PENDANTS,
  EARRINGS,
  IMG_SOLITAIRE_RINGS,
  IMG_ROMANCE_RINGS,
  IMG_PENDANTS,
  IMG_EARRINGS,
  BUTTON_SELECT
} from '../../src/constants/Viewer3D';
import Viewer3DStyle from './Viewer3DStyle';

const Viewer3D = () => (
  <>
    <Container style={Viewer3DStyle.containerPage}>
      <Row>
        <Col style={Viewer3DStyle.titlePage}>{TITLE_PAGE}</Col>
      </Row>

      {/* --- Diamond Shape. --- */}
      <Row className='text-center'>
        <Col xs="12" style={Viewer3DStyle.titleDiamondShape}>{DIAMOND_SHAPE.title}</Col>

        <Col xs="4">
          <img id='img_diamond_shape_marquise' src={IMG_DIAMOND_SHAPE.marquise} style={Viewer3DStyle.imgDiamondShape} />
          <p>{DIAMOND_SHAPE.marquise}</p>
        </Col>

        <Col xs="4">
          <img id='img_diamond_shape_round' src={IMG_DIAMOND_SHAPE.marquise} style={Viewer3DStyle.imgDiamondShape} />
          <p>{DIAMOND_SHAPE.round}</p>
        </Col>

        <Col xs="4">
          <img id='img_diamond_shape_emerald' src={IMG_DIAMOND_SHAPE.emerald} style={Viewer3DStyle.imgDiamondShape} />
          <p>{DIAMOND_SHAPE.emerald}</p>
        </Col>

        <Col xs="12"><Text>{TOP_RECOMMENDATION}</Text></Col>
      </Row>

      {/* --- Carat Size. --- */}
      <Row className='text-center'>
        <Col xs="12" style={Viewer3DStyle.titleCaratSize}>{CARAT_SIZE.title}</Col>

        <Col xs="4">
          <img id='img_carat_size_0_5' src={IMG_CARAT_SIZE.carat0_5} style={Viewer3DStyle.imgDiamondShape} />
          <p>{CARAT_SIZE.carat0_5}</p>
        </Col>

        <Col xs="4">
          <img id='img_carat_size_0_75' src={IMG_CARAT_SIZE.carat0_75} style={Viewer3DStyle.imgDiamondShape} />
          <p>{CARAT_SIZE.carat0_75}</p>
        </Col>

        <Col xs="4">
          <img id='img_carat_size_1_5' src={IMG_CARAT_SIZE.carat1_5} style={Viewer3DStyle.imgDiamondShape} />
          <p>{CARAT_SIZE.carat1_5}</p>
        </Col>

        <Col xs="12"><Text>{TOP_RECOMMENDATION}</Text></Col>
      </Row>

      {/* --- Category diamond. --- */}
      <Row className='text-center' style={Viewer3DStyle.containerCategoryDiamond}>
        <Col xs="7">

          {/* --- Solitaire Rings --- */}
          <Row>
            <Col xs="12" style={Viewer3DStyle.titleCategory}>{SOLITAIRE_RINGS.title}</Col>

            <Col xs="3" >
              <img id='img_sr_1' src={IMG_SOLITAIRE_RINGS.sr_1} style={Viewer3DStyle.imgDiamondShape} />
              <p>{SOLITAIRE_RINGS.sr_1}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_2' src={IMG_SOLITAIRE_RINGS.sr_2} style={Viewer3DStyle.imgDiamondShape} />
              <p>{SOLITAIRE_RINGS.sr_2}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_3' src={IMG_SOLITAIRE_RINGS.sr_3} style={Viewer3DStyle.imgDiamondShape} />
              <p>{SOLITAIRE_RINGS.sr_3}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_4' src={IMG_SOLITAIRE_RINGS.sr_4} style={Viewer3DStyle.imgDiamondShape} />
              <p>{SOLITAIRE_RINGS.sr_4}</p>
            </Col>
          </Row>

          {/* --- Romance Rings --- */}
          <Row>
            <Col xs="12" style={Viewer3DStyle.titleCategory}>{ROMANCE_RINGS.title}</Col>

            <Col xs="3" >
              <img id='img_sr_1' src={IMG_ROMANCE_RINGS.rr_1} style={Viewer3DStyle.imgDiamondShape} />
              <p>{ROMANCE_RINGS.rr_1}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_2' src={IMG_ROMANCE_RINGS.rr_2} style={Viewer3DStyle.imgDiamondShape} />
              <p>{ROMANCE_RINGS.rr_2}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_3' src={IMG_ROMANCE_RINGS.rr_3} style={Viewer3DStyle.imgDiamondShape} />
              <p>{ROMANCE_RINGS.rr_3}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_4' src={IMG_ROMANCE_RINGS.rr_4} style={Viewer3DStyle.imgDiamondShape} />
              <p>{ROMANCE_RINGS.rr_4}</p>
            </Col>
          </Row>

          {/* --- Pendants --- */}
          <Row>
            <Col xs="12" style={Viewer3DStyle.titleCategory}>{PENDANTS.title}</Col>

            <Col xs="3" >
              <img id='img_sr_1' src={IMG_PENDANTS.pd_1} style={Viewer3DStyle.imgDiamondShape} />
              <p>{PENDANTS.pd_1}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_2' src={IMG_PENDANTS.pd_2} style={Viewer3DStyle.imgDiamondShape} />
              <p>{PENDANTS.pd_2}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_3' src={IMG_PENDANTS.pd_3} style={Viewer3DStyle.imgDiamondShape} />
              <p>{PENDANTS.pd_3}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_4' src={IMG_PENDANTS.pd_4} style={Viewer3DStyle.imgDiamondShape} />
              <p>{PENDANTS.pd_4}</p>
            </Col>
          </Row>

          {/* --- Earrings --- */}
          <Row>
            <Col xs="12" style={Viewer3DStyle.titleCategory}>{EARRINGS.title}</Col>

            <Col xs="3" >
              <img id='img_sr_1' src={IMG_EARRINGS.ea_1} style={Viewer3DStyle.imgDiamondShape} />
              <p>{EARRINGS.ea_1}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_2' src={IMG_EARRINGS.ea_2} style={Viewer3DStyle.imgDiamondShape} />
              <p>{EARRINGS.ea_2}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_3' src={IMG_EARRINGS.ea_3} style={Viewer3DStyle.imgDiamondShape} />
              <p>{EARRINGS.ea_3}</p>
            </Col>

            <Col xs="3">
              <img id='img_sr_4' src={IMG_EARRINGS.ea_4} style={Viewer3DStyle.imgDiamondShape} />
              <p>{EARRINGS.ea_4}</p>
            </Col>
          </Row>

          {/* --- Button select. --- */}
          <Col xs="12" style={Viewer3DStyle.containerButtonSelect}>
            <Button style={Viewer3DStyle.textButtonSelect}>{BUTTON_SELECT.offTheShelf}</Button>
            <Button style={Viewer3DStyle.textButtonSelect}>{BUTTON_SELECT.retakeTest}</Button>
          </Col>
        </Col>

        <Col xs="5">
        </Col>
      </Row>
    </Container>
  </>
)

export default Viewer3D