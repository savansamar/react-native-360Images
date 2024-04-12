// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//@ts-ignorets-ignore
import Move from './componenet/Move';

const {width, height} = Dimensions.get('window');
const images =[
  require(`./images/iris-1.jpg`),
  require(`./images/iris-2.jpg`),
  require(`./images/iris-3.jpg`),
  require(`./images/iris-4.jpg`),
  require(`./images/iris-5.jpg`),
  require(`./images/iris-6.jpg`),
  require(`./images/iris-7.jpg`),
  require(`./images/iris-8.jpg`),
  require(`./images/iris-9.jpg`),
  require(`./images/iris-10.jpg`),
  require(`./images/iris-11.jpg`),
  require(`./images/iris-12.jpg`),
  require(`./images/iris-13.jpg`),
  require(`./images/iris-14.jpg`),
  require(`./images/iris-15.jpg`),
  require(`./images/iris-16.jpg`),
  require(`./images/iris-17.jpg`),
  require(`./images/iris-18.jpg`),
  require(`./images/iris-19.jpg`),
  require(`./images/iris-20.jpg`),
  require(`./images/iris-21.jpg`),
  require(`./images/iris-22.jpg`),
  require(`./images/iris-23.jpg`),
  require(`./images/iris-24.jpg`),
  require(`./images/iris-25.jpg`),
  require(`./images/iris-26.jpg`),
  require(`./images/iris-27.jpg`),
  require(`./images/iris-28.jpg`),
  require(`./images/iris-29.jpg`),
  require(`./images/iris-30.jpg`),
  require(`./images/iris-31.jpg`),
  require(`./images/iris-32.jpg`),
  require(`./images/iris-33.jpg`),
  require(`./images/iris-34.jpg`),
  require(`./images/iris-35.jpg`),
  require(`./images/iris-36.jpg`),
].reverse()

const App = () => {
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Move srcset={images} width={width} height={height / 2} />
    </View>
  );
}

export default App

const styles = StyleSheet.create({})