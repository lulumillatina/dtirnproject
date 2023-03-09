import React from "react"
import {
    View,
    TextInput,
    StyleSheet
} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ICSearch } from "../../../assets";


export default function SearchBar () {
 return(
    <View style={Style.container}>
        <View style={Style.content}>
            <ICSearch width={wp("10%")}/>
            <SearchBar
                placeholder="Search Vendor"
                style={Style.input}/>
         </View>
    </View>
 )
}

const Style = StyleSheet.create ({
    container : {
        flexDirection : "row",
        backgroundColor : "white",
        borderRadius : 10,
        height : hp("6%"),
        width : wp("75%"),
        marginLeft : 10
        
    },
    input : {
        width : wp("65%"),
        fontSize : 16,
        fontFamily : "Poppins-Regular",
        paddingVertical : hp("1%")
    },
    content : {
        flexDirection : "row",
        alignItems  : "center"
    }
})

