import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Move from '../componenet/Move';
//@ts-ignorets-ignore

const {width, height} = Dimensions.get('window');
const images = [
  require(`../../images/iris-1.jpg`),
  require(`../../images/iris-2.jpg`),
  require(`../../images/iris-3.jpg`),
  require(`../../images/iris-4.jpg`),
  require(`../../images/iris-5.jpg`),
  require(`../../images/iris-6.jpg`),
  require(`../../images/iris-7.jpg`),
  require(`../../images/iris-8.jpg`),
  require(`../../images/iris-9.jpg`),
  require(`../../images/iris-10.jpg`),
  require(`../../images/iris-11.jpg`),
  require(`../../images/iris-12.jpg`),
  require(`../../images/iris-13.jpg`),
  require(`../../images/iris-14.jpg`),
  require(`../../images/iris-15.jpg`),
  require(`../../images/iris-16.jpg`),
  require(`../../images/iris-17.jpg`),
  require(`../../images/iris-18.jpg`),
  require(`../../images/iris-19.jpg`),
  require(`../../images/iris-20.jpg`),
  require(`../../images/iris-21.jpg`),
  require(`../../images/iris-22.jpg`),
  require(`../../images/iris-23.jpg`),
  require(`../../images/iris-24.jpg`),
  require(`../../images/iris-25.jpg`),
  require(`../../images/iris-26.jpg`),
  require(`../../images/iris-27.jpg`),
  require(`../../images/iris-28.jpg`),
  require(`../../images/iris-29.jpg`),
  require(`../../images/iris-30.jpg`),
  require(`../../images/iris-31.jpg`),
  require(`../../images/iris-32.jpg`),
  require(`../../images/iris-33.jpg`),
  require(`../../images/iris-34.jpg`),
  require(`../../images/iris-35.jpg`),
  require(`../../images/iris-36.jpg`),
].reverse();

const Image360View = () => {
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Move srcset={images} width={width} height={height / 2} />
    </View>
  );
};

export default Image360View;

const styles = StyleSheet.create({});
