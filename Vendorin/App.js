import React from "react"
import {
  NavigationContainer
} from "@react-navigation/native"
import Router from "./src/router"
import { StatusBar } from "react-native"



export default function App () {
  
  return (
    <>
    <StatusBar translucent backgroundColor="transparent"/>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    </>
  )
}

