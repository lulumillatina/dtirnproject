import React from "react"
import {
    View,
    Text,
    StyleSheet
} from "react-native"

export default function MainChatPage () {
 return(
    <View style={Style.container}>
        <Text>This is ChatScreen</Text>
    </View>
 )
}
const Style = StyleSheet.create({
    container :{
        backgroundColor : "#51BAC8"
    }
})