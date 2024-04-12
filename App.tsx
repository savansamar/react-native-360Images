import React from 'react';
import Image360View from './src/main/Image350View';
import Pinch from './src/main/Pinch';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const App = () => {
  // return <Image360View />;
  return (
    <GestureHandlerRootView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Pinch />
    </GestureHandlerRootView>
  );
};
export default App;

