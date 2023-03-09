import React from "react"
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { ICBack } from "../../../assets"

export default function BackFeatures ({onPress}) {
    return ( 
        <View style={Style.container} >
            <TouchableOpacity onPress={onPress}>
                <ICBack/>
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create ({
    container  : {
        marginLeft : 15
    }
})