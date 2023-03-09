import React from "react"
import {
    View,
    Text,
    StyleSheet
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from "react-native-responsive-screen"
import { Square } from "../../../GeneralComponent"

export default function CategoryCard ({image,categoryName}) {
    return (
        <TouchableOpacity style={Style.categoryBox}>
            <Square source={image} style={Style.iconImage} />
            <Text style={Style.categoryName}>{categoryName}</Text>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create ({
    iconImage : {
        height : wp("20%"),
        width : wp("20%"),
        borderRadius : 5
    },
    categoryName : {
        textAlign :"center",
        fontFamily : "Poppins-Regular"
    },
    categoryBox : {
        height : wp("25%"),
        width : wp("20%"),
        marginHorizontal : 5
    }
})