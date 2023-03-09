import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { IMNearVendor } from "../../../assets"
import PromotionCard from "./PromotionCard"


export default function Promotion ({titleContent}){
    return(
        <View>
            <View style={Style.titleBox}>
                <View style={Style.titleBox2}>
                    <Text style={Style.titleText}>{titleContent}</Text>
                    <Text style={{color : "#515355", fontFamily : "Poppins-Regular"}}>Promotion</Text>
                </View>
                <TouchableHighlight style={Style.viewAllBox}>
                    <Text style={Style.viewAll}>View All</Text>
                </TouchableHighlight>
            </View>
            <View style={Style.contentBox}>
            <ScrollView
             horizontal
             contentContainerStyle={{paddingLeft:"3%"}}
             showsHorizontalScrollIndicator={false}
            >
                <PromotionCard source={IMNearVendor} vendorName={"Trias Mustika Wedding and Gown"} category={"Dress"}/>
                <PromotionCard source={IMNearVendor} vendorName={"Trias Wedding and Gown"} category={"Dress"}/>
                <PromotionCard source={IMNearVendor} vendorName={"Trias Wedding and Gown"} category={"Dress"}/>
                <PromotionCard source={IMNearVendor} vendorName={"Trias Wedding and Gown"} category={"Dress"}/>
            </ScrollView>
            </View>
        </View>
    )
}

const Style = StyleSheet.create ({
    contentBox : {
        flexDirection : "column",
        height : hp("20%"),
        alignItems : "center"
    },
    titleText : {
        fontSize : 21,
        fontFamily : "Poppins-SemiBold"
    },
    titleBox : {
        flexDirection : "row",
        alignContent : "center",
        paddingLeft : 10,
        marginBottom : 5
    },
    titleBox2 : {
        alignContent : "center",
        width : wp("70%")
    },
    viewAll : {
        color : "#C4C4C4",
        fontSize : 16,
        textAlign : "right",
        fontFamily : "Poppins-Regular"
    },
    viewAllBox : {
        paddingRight : 5,
        width : wp("20%")
    }
})