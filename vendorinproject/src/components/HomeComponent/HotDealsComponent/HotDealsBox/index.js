import React from "react"
import {
    View,
    StyleSheet,
    Text
} from "react-native"
import { IMHotDeals } from "../../../../assets"
import { Carousel } from "../../../GeneralComponent"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export default function HotDealsBox () {
 return(
    <View>
        <View style={Style.titleBox}>
            <Text style={Style.titleText}>Vendor.in Hot Deals</Text>
        </View>
        <Carousel
        itemsPerInterval={1}
        items={[
            {
                source: IMHotDeals,
                style : Style.imageStyle
            },
            {
                source: IMHotDeals,
                style : Style.imageStyle
            },
            {
                source: IMHotDeals,
                style : Style.imageStyle
            },
        ]}
        />
    </View>
 )
}

const Style = StyleSheet.create ({
    titleText : {
        fontSize : 21,
        fontFamily : "Poppins-SemiBold",
        marginBottom : 5,
        paddingLeft : 10,
        width : wp("70%")
    },
    titleBox : {
        flexDirection : "row",
        alignContent : "center",
    },
    imageStyle : {
        width: wp("90%"),
        height : hp("20%"),
        borderRadius : 10
    }
})
