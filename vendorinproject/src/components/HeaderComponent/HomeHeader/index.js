import React from "react"
import { 
    View,
    StyleSheet,
    ImageBackground
} from "react-native"
import { heightPercentageToDP as hp} from "react-native-responsive-screen"
import { CompHomeSearchBar } from ".."
import { ICNotification, ICWishlist, IMHeaderHome } from "../../../assets"
import { Gap } from "../../GeneralComponent"


export default function HomeHeaderFeatures () {

 return(
    <ImageBackground style={[Style.bigContainer,{height : (hp>600? hp("10%"): hp("15%")), width : "100%"}]} source={IMHeaderHome}>
        <View style={Style.container}>
            <CompHomeSearchBar/>
            <Gap width={hp("2%")}/>
            <View style={Style.containerFeatures}>
                <ICWishlist onPress={() => alert("Wishlist")} />
                <Gap width={5}/>
                <ICNotification onPress={() => alert("Notification")}/>
            </View>
        </View>
    </ImageBackground>
 )
}

const Style = StyleSheet.create ({
    bigContainer : {
        flexDirection : "row"
    },
    container : {
        flexDirection : "row",
        marginTop: 15,
        marginVertical : 5,
        alignItems : "center"
    },
    containerFeatures : {
        flexDirection : "row",
        alignItems : "center"
    }
})