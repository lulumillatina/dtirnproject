import React from "react"
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { 
    ICStars
} from "../../../../assets"

export default function PromotionCard ({source,vendorName,category}) {
    return(
        <TouchableOpacity>
            <View style={Style.contentSquare}>
                    <Image source={source} style={Style.imageContent}/>
                    <Text numberOfLines={1} style={Style.titleText}>{vendorName}</Text>
                    <View style={{flexDirection : "row"}}>
                        <View style={{flex :1}}>
                            <Text style={Style.categoryText}>{category}</Text>
                        </View>
                        <View style={{flexDirection :"row", alignItems : "center"}}>
                            <ICStars/>
                            <ICStars/>
                            <ICStars/>
                        </View>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    contentSquare : {
        width : wp("40%"),
        height : hp("20%"),
        marginRight : 10
    },
    imageContent : {
        height : hp("13%"),  
        width : wp ("40%"), 
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titleText : {
        fontFamily : "Poppins-Medium"
    },
    categoryText : {
        fontFamily : "Poppins-Regular",
        color : "#515355"
    }
})