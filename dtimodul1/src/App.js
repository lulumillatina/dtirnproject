import React, {useState} from 'react';
import { Calculation } from './pages';
import Store from './pages/store';
import {
  Provider
} from 'react-redux'

export default MainApp = () => {
  return (
    <Provider store={Store}>
      <Calculation/>
    </Provider>
  );
}

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   Button,
//   Image
// } from 'react-native';

// export default function App(){
//   return (
//     <View
//     style={{
//       flex: 1,
//     }}
//     >
//       <View
//       style={{
//         flex: 1,
//         justifyContent: "flex-end",
//         alignItems: "center"
//       }}
//       >
//         <Image
//           style={{
//             width: 250,
//             height: 150,
//             marginBottom: 8, //kalau di css margin-bottom -> jsx marginBottom
//           }}
//           source={require('./logo.png')} // pastikan di foldernya ada file logo.png 1 level dengan file App.js
//         />
//         <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 8 }}>Login</Text>
//       </View>
//       <View
//       style={{
//         flex: 1,
//         marginHorizontal: 8
//       }}
//       >
//         <TextInput
//       placeholder="Username"
//       style={{
//         borderBottomWidth: 1,
//         marginBottom: 8
//       }}
//       />
//       <TextInput
//       placeholder="Password"
//       style={{
//         borderBottomWidth: 1,
//         marginBottom: 8
//       }}
//       />
//       <Button
//       title="LOGIN"
//       />
//       <Text style={{ textAlign: "center", marginTop: 8 }}>Telkom Digital Talent 2020</Text>
//       </View>
//     </View>
//   );
// }
