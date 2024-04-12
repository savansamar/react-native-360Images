import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';

interface SwipeImageProps {
    index:number,
    ele:any,
    onSwipe:(index:number)=>void 
}

const SwipeImage = (Props: SwipeImageProps) => {
    let { ele } = Props;

    const [widthOfCard, setWidthOfCard] = React.useState<number>(0);
    const { width } = useWindowDimensions();
    let xAxis = useSharedValue(0);
    const CARD_WIDTH = width * 0.8;


    const onBegin = (
      event: GestureStateChangeEvent<PanGestureHandlerEventPayload>,
    ) => {
    };

    const onStart = (
      event: GestureStateChangeEvent<PanGestureHandlerEventPayload>,
    ) => {};

    const onUpdate = (
      event: GestureUpdateEvent<
        PanGestureHandlerEventPayload & PanGestureChangeEventPayload
      >,
    ) => {
        if (Math.abs(xAxis.value) >= Math.round(width - widthOfCard) * 0.5){
            xAxis.value = withTiming(xAxis.value<0 ? - width : width, {
              easing: Easing.inOut(Easing.quad),
              reduceMotion: ReduceMotion.System,
            });
            cancelAnimationFrame(xAxis.value)
            return;
        }
      xAxis.value = xAxis.value + event.changeX;
      Props.onSwipe(Props.index)
    };

    const onEnd = (
      event: GestureStateChangeEvent<PanGestureHandlerEventPayload>,
    ) => {
    };

    const gesture = Gesture.Pan()
      .onBegin(onBegin)
      .onStart(onStart)
      .onChange(onUpdate)
      .onEnd(onEnd);

   
      const animatedStyle = useAnimatedStyle(() => {
        return {
          width: CARD_WIDTH,
          transform: [
            {
              translateX: xAxis.value,
              //314
            },
          ],
        };
      });


  return (
    <GestureDetector gesture={gesture} >
    <Animated.Image
      key={ele?.id}
      onLayout={event =>setWidthOfCard(event.nativeEvent.layout.width)}
      source={ele.uri}
      style={[styles.image, animatedStyle]}
    />
    </GestureDetector>
  );
};

export default SwipeImage

const styles = StyleSheet.create({
  image: {
    aspectRatio: 7 / 4,
    height: undefined,
    position: 'absolute',
  },
});