
import React, {Component} from 'react';
import {View, Image, PanResponder, Dimensions} from 'react-native';
import styles from './styles';

const {width} = Dimensions.get('window');

export default class Move extends Component {
  static defaultProps = {
    width,
    height: 300,
    srcset: [],
    rotationRatio: 0.5,
  };

  constructor(props) {
    super(props);
    this.createPanResponder();

    this.state = {
      rotation: 0,
      rotatePeriod: 360 / props.srcset.length,
    };
  }

  createPanResponder = () => {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.startMoving(gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        this.moving(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.endMoving(gestureState);
      },
    });
  };

  startMoving = gestureState => {
    this.startX = gestureState.moveX;
    this.startY = gestureState.moveY;
    this.startRotation = this.state.rotation;
  };

  moving = gestureState => {
    const deltaX = gestureState.moveX - this.startX;
    const deltaY = gestureState.moveY - this.startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      this.updateRotation(deltaX);
    } else {
      this.updateRotation(deltaY);
    }
  };

  endMoving = gestureState => {
    const deltaX = gestureState.moveX - this.startX;
    const deltaY = gestureState.moveY - this.startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      this.updateRotation(deltaX);
    } else {
      // Implement any end moving logic for vertical scrolling here if needed
    }
  };

  updateRotation = deltaX => {
    const {rotationRatio} = this.props;
    console.log('rotationRatio', rotationRatio);
    const deltaRotation = (deltaX * 180) / (rotationRatio * this.props.width);
    this.setState({rotation: this.startRotation + deltaRotation});
  };

  getImage = () => {
    const {rotation, rotatePeriod} = this.state;
    const {srcset} = this.props;

//     console.log('rotation  value is = ', rotation);
//     console.log('rotatePeriod  value is = ', rotatePeriod);
//     console.log('moveX  value is = ', this.state.moveX);
// console.log(rotation - Math.floor(rotation / 360) * 360)

    const mRotation = rotation - Math.floor(rotation / 360) * 360;
    const index = Math.floor(mRotation / rotatePeriod);

    return srcset[index];
  };

  scrollView = scrollDistance => {
    // console.log('Vertical Scroll Distance:', scrollDistance);
  };

  render() {
    const {width, height} = this.props;
    return (
      <View {...this.panResponder.panHandlers}>
        <Image
          source={this.getImage()}
          style={[styles.image, {width, height}]}
        />
      </View>
    );
  }
}
