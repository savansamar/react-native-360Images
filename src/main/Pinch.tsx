import {StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const image = require('../../images/cards/Card1.png');



export default function Pinch() {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <GestureDetector gesture={pinchGesture}>
      <Animated.Image source={image} style={[styles.box, animatedStyle]} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
  },
});

// import React from 'react';
// import {Button, View, StyleSheet, Text} from 'react-native';
// import Animated, {
//   useSharedValue,
//   withSpring,
//   runOnJS,
// } from 'react-native-reanimated';
// import {useAnimatedStyle} from 'react-native-reanimated';

// export default function App() {
//   const scale = useSharedValue(1);
//   const [finished, setFinished] = React.useState(false);

//   const handlePress = () => {
//     scale.value = withSpring(2, {}, () => {
//       // setFinished(true)
//       // highlight-next-line
//       // setFinished(true)
//       runOnJS(setFinished)(true);
//     });
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{scale: scale.value}],
//   }));

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedStyle]} />
//       <Button onPress={handlePress} title="Click me" disabled={finished} />
//       {finished && <Text>Finished! 🎉</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   box: {
//     height: 100,
//     width: 100,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 64,
//     alignSelf: 'center',
//   },
// });

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import SwipeImage from './SwipeImage';
// const static_cards = [
//   {uri: require('../../images/cards/Card1.png'), id: '123'},
//   {uri: require('../../images/cards/Card2.png'), id: '234'},
//   {uri: require('../../images/cards/Card3.png'), id: '345'},
//   {uri: require('../../images/cards/Card4.png'), id: '534'},
//   {uri: require('../../images/cards/Card5.png'), id: '734'},
//   {uri: require('../../images/cards/Card6.png'), id: '834'},
//   {uri: require('../../images/cards/Card7.png'), id: '034'},
//   {uri: require('../../images/cards/Card8.png'), id: '244'},
//   {uri: require('../../images/cards/Card9.png'), id: '934'},
// ];

// const Pinch = () => {

//   const [cards, setCards] = React.useState<any[]>(static_cards);

//  const onSwipe = React.useCallback((e:number)=>{
//   console.log('e === (cards.length - 1)', e,(cards.length - 1))
//   if(e === 0){
//     setCards([])
//     setTimeout(()=>{
//       setCards([...static_cards])
//     },500)
//   }
//  },[])

//   return (
//       <View style={styles.container}>
//         {cards.map((ele: any, index: number) => {
//           return (
//             <SwipeImage
//               key={ele?.id}
//               ele={ele}
//               index={index}
//               onSwipe={onSwipe}
//             />
//           );
//         })}
//       </View>
//   );
// }

// export default Pinch

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:"center",
//     alignItems:"center",
//     width:"100%"
//   }
// });