import React from "react"
import {
    createStackNavigator
} from "@react-navigation/stack"
import {
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs"
import {    
    MainChatPage,
    MainEventPlannerPage,
    MainHomePage,
    MainProfilePage,
    NotificationPage
} from "../pages"
import { 
    ICTabChat, 
    ICTabHome, 
    ICTabPlanner, 
    ICTabProfile
} from "../assets"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import { 
    CompBackFeatures,
    CompHomeHeaderFeatures
} from "../components"


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabNavigator () {
const fillSecondary = (color) => (color === "white") ?  "#C4C4C4" : "white"
const fillTertiary = (color) => (color === "white") ?  "#C4C4C4" : "#51BAC8"
 return(
    <Tab.Navigator 
     initialRouteName="Home"
     backBehavior="order"
     tabBarOptions={{
         activeTintColor:"#51BAC8",
         inactiveTintColor:"white",
         keyboardHidesTabBar : true
     }}
     >
        <Tab.Screen 
         name="Home" 
         component={MainHomePage}
         options={{
             tabBarIcon : ({color}) => (
                 <ICTabHome 
                  fill={color} 
                  fillTertiary={fillTertiary(color)}/>
             )
         }}
         />
        <Tab.Screen 
         name="Chat"
         component={MainChatPage}
         options={{
             tabBarIcon : ({color}) => (
                 <ICTabChat 
                  fill={color} 
                  fillSecondary={fillSecondary(color)} 
                  fillTertiary={fillTertiary(color)}/>
             )
         }} />
        <Tab.Screen 
         name="EventPlanner" 
         component={MainEventPlannerPage}
         options={{
             tabBarIcon : ({color}) => (
                 <ICTabPlanner 
                  fill={color} 
                  fillSecondary={fillSecondary(color)} 
                  fillTertiary={fillTertiary(color)} />
             )
         }} />
        <Tab.Screen 
         name="Profile" 
         component={MainProfilePage}
         options={{
             tabBarIcon : ({color}) => (
                 <ICTabProfile 
                  fill={color} 
                  fillTertiary={fillTertiary(color)}/>
             )
         }} />
    </Tab.Navigator>
 )
}

export default function Router () {

 function getHeader(route){
    let routeName = getFocusedRouteNameFromRoute(route)
    console.log(routeName)
    if(typeof routeName === "undefined" || routeName === "Home"){
        return ({
            headerTitle : null,
            headerStyle : {
                backgroundColor :"transparent",
                height : hp("15%")
            },
            header : () => <CompHomeHeaderFeatures/>
        })
    }
    if(routeName === "Chat"){
        return ({
            headerTitle : "Chat",
            headerStyle : {
                backgroundColor : "#43C4D1"
            },
            headerTitleStyle : {
                fontFamily : "Poppins-Medium"
            }
        })
    }
    if(routeName === "Profile" || routeName === "EventPlanner" ){
        return ({
            headerShown : false
        })
    }
 }

 return(
    <Stack.Navigator initialRouteName="Homee">
        <Stack.Screen 
         name="Homee" 
         component={BottomTabNavigator}
         options={({route}) => (
             getHeader(route)
         )} />
        <Stack.Screen 
          name="Notification"
          component={NotificationPage}
          options={{
              headerTitleStyle : {
                  fontFamily : "Poppins-Medium",
                  marginLeft : -30
              },
              headerLeft : () => <CompBackFeatures/>
          }}
        />
    </Stack.Navigator>
 )
}
