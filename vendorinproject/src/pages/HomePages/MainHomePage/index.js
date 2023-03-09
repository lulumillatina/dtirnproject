import React from "react"
import {
    View,
    StyleSheet,
    ImageBackground
} from "react-native"
import { ScrollView} from "react-native-gesture-handler"
import { IMHeaderHome } from "../../../assets"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { Category, Gap, HotDealsBox, Promotion } from "../../../components"

export default function MainHomePage () {
 return (
    <ImageBackground source={IMHeaderHome} style={Style.bigContainer}>
    <View style={Style.container}>
    <ScrollView 
     nestedScrollEnabled={true}
     showsVerticalScrollIndicator={false}
    >
        <HotDealsBox/>
        <Promotion 
            titleContent="Vendor You Might Like in Surabaya"
        />
        <Gap height={10}/>
        <Promotion 
            titleContent="Newcomer Vendor"
        />
        <Gap height={10}/>
        <Category/>
    </ScrollView>
    </View>
    </ImageBackground>
 )
}

const Style = StyleSheet.create ({
    bigContainer : {
        height : "100%"
    },
    container : {
        height : "100%",
        backgroundColor : "white",
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25,
        paddingTop : 20,
        paddingHorizontal : wp("2%")
    }
})