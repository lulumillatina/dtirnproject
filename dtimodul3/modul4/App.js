import React, {
    Component,
  useEffect,
    useState
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput,
  Button,
  Image,
  FlatList,
  Alert, alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { STATUS_CODES } from 'http';

// const Cat = (props) => {
//     return(
//         <View>
//             <Text> Hello I am {props.name}, my color is {props.color}</Text>
//         </View>
//     );
// };

// const Cafe = ()=>{
//     return(
//         <View>
//             <Cat name="Maru" color="blue"/>
//         </View>
//     );
// };
// export default Cafe;

//Class Component
// class App extends React.Component {
// //const [toDoList,setText]
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama : "Andi",
//     };
//   }
//   render(){
//     return(
//       <View>
//         <Text style={{
//           marginBottom: 10
//         }}>Nama : {this.state.nama}</Text>
//         <Button onPress={()=> { 
//           this.setState({nama : "Rogers"}) }} title="Add" ></Button>
//       </View>
//     )
//   }
// }

//function component
// export default function Example (){
//   //Deklarasi state  variabel baru
//   const [count, setCount] = useState(0); //Hook
//   const [nama, setNama] = useState("Lulu")
//   const [tampilan, setTampilan] = useState(false)

//   useEffect (() => {
//     console.log("Eksekusi useEffect")
//   }, [nama,count]);  //tidak ditampilkan pada layar android

//   return(
//     <View>
//       <Text> You clicked {count} times</Text>
//       <Button title="Press" onPress={() => setCount(count + 1)}/>
//       <Button title="Tampilkan Nama" onPress={() => {setTampilan(true)}}/>
//       {
//         tampilan == true &&
//         <>
//       <Text style={{
//           marginBottom: 10
//         }}>Nama : {nama}</Text>
//         <Button onPress={()=> { 
//           {
//             setNama("Rogers")
//             setTampilan(false)
//           }}} title="Add"></Button>

//         </>
//       }
//     </View>
//   );
// }

// class Cat extends Component {
//   state = { isHungry: true };

//   render(props) {
//     return (
//       <View>
//         <Text>
//           I am {this.props.name}, and I am
//           {this.state.isHungry ? " hungry" : " full"}!
//         </Text>
//         <Button
//           onPress={() => {
//             this.setState({ isHungry: false });
//           }}
//           disabled={!this.state.isHungry}
//           title={
//             this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
//           }
//         />
//       </View>
//     );
//   }
// }

// class Cafe extends Component {
//   render() {
//     return (
//       <>
//         <Cat name="Munkustrap" />
//         <Cat name="Spot" />
//       </>
//     );
//   }
// }

// export default  Cafe;

// const _onPressButton = () => {

//   console.log("hello")
// }
// export default function FlatListBasic(){
//   const [ToDoList, setToDoList] = useState([]); //menginiasi keadaan awal, array kosonh
//   const [TextToDo, setTextToDo] = useState(''); //text kosong

//   return(
//         <View 
//         style ={{
//           flex:1
//         }}>
//           <Text> To Do List</Text>
//           <TextInput placeholder="Write your to do list" onChangeText={text => setTextToDo(text)}/>
//           <Button title="Add To Do List" onPress={() => {setToDoList([...ToDoList,TextToDo])  //saat dipencet  add teks input dimasukkan ke array pake spread supaya engga ketimpa gitu(?)
//           }}/>
//           <FlatList 
//            data={ToDoList}
//            renderItem={({item})=><TouchableOpacity onPress={console.log("hello")}>
//              <View><Text style={{fontSize:30}}>{item}</Text>
//              </View></TouchableOpacity>}
//            keyExtractor={item => item}
//            />
//         </View>
//       );
//       }

// const App = () => (
//   <View style={styles.container}>
//     <View style={styles.saldo}/>  
//     <View style={styles.saldo1}>
//       <View style={styles.topup1}/>
//       <View style={styles.master}>
//       <View style={styles.topup2}/>
//       <View style={styles.topup2}/>
//       <View style={styles.topup2}/>
//     </View>
//     </View>
//     </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: "#909090" ,
//   },
//   saldo:{
//     flex:1,
//     backgroundColor: "white"
//   },
//   saldo1:{
//     flex:5,
//     backgroundColor: "#C0C0C0"
//   },
//   topup1: {
//     flex : 1,
//     backgroundColor: "#4982C1",
//     marginHorizontal: 25,
//     marginVertical : 50
//   },
//   master: {
//     flex : 5,
//     backgroundColor: "#C0C0C0"
//   },
//   topup2: {
//     flex : 1,
//     backgroundColor: "white",
//     marginHorizontal: 25,
//     marginVertical : 10
//   }
// });

// export default App

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <NavigationContainer>{<Text>Halo</Text>}</NavigationContainer>
//   );
// }

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }



// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


//Tab Navigation
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function AccountsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }


// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Accounts" component={AccountsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// import * as React from 'react';
// import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const AuthContext = React.createContext();

// function SplashScreen() {
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   const { signOut } = React.useContext(AuthContext);

//   return (
//     <View>
//       <Text>Signed in!</Text>
//       <Button title="Sign out" onPress={signOut} />
//     </View>
//   );
// }

// function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const { signIn } = React.useContext(AuthContext);

//   return (
//     <View>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Sign in" onPress={() => signIn({ username, password })} />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function App({ navigation }) {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await AsyncStorage.getItem('userToken');
//       } catch (e) {
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//       signOut: () => dispatch({ type: 'SIGN_OUT' }),
//       signUp: async data => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//     }),
//     []
//   );

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.isLoading ? (
//             // We haven't finished checking for the token yet
//             <Stack.Screen name="Splash" component={SplashScreen} />
//           ) : state.userToken == null ? (
//             // No token found, user isn't signed in
//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 title: 'Sign in',
//             // When logging out, a pop animation feels intuitive
//                 animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//               }}
//             />
//           ) : (
//             // User is signed in
//             <Stack.Screen name="Home" component={HomeScreen} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }
export default App=()=> {
  const [title, setTitle]=useState('')
  const [desc, setDesc]=useState('')
  const [movies, setMovies]= useState([]);
  const [names, setNames]=useState('');
  const [jobs, setJobs]=useState('');
  const [data, setData]=useState([]);
// const getMoviesFromApi = () => {
//   return fetch('https://reactnative.dev/movies.json')
//   .then((response) => response.json())
//   .then((json) =>{
//     console.log(json.title);
//     setTitle(json.title)
//     setDesc(json.description)
//     setMovies(json.movies)
//     console.log(json.movies);
//     return json.movies;
//   })
//   .catch((error) => {
//     console.error(log);
//   })
// }
// const getMoviesFromAxios = () => {
// axios.get('https://reactnative.dev/movies.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// }

const postUsers = () => {
axios.post('https://reqres.in/api/users', {
  first_name : names
})
.then(function (response) {
  // console.log(name);
  console.log(res.status);
  // console.log(job);
})
.catch(function (error) {
  console.log(error);

});
}

  // useEffect(() =>{
  //   getMoviesFromApi();
  // }, [])
  return (
    <View>
      <TextInput placeholder="Name" onChangeText={textNames => setNames(textNames)}/>
      <TextInput placeholder="Job" onChangeText={textJobs => setJobs(textJobs)}/>
      <Button title='Submit'onPress={() => {
      postUsers()
      }}/>
      <View>
      <Text> Name: {names}
      </Text>
      <Text> Job : {jobs}</Text>
      </View>
      {/* <FlatList
           data={movies}
           renderItem={({item})=>
             <View>
               <Text> 
               ID= {item.id} , title = {item.title} , release year = {item.releaseYear}
               </Text>
             </View>
             }
             keyExtractor={item=>item.id}
      /> */}
    </View>
  )
}
