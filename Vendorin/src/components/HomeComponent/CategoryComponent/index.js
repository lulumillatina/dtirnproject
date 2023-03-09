import React from "react"
import {
    View,
    Text,
    StyleSheet
} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { IMCategory } from "../../../assets"
import CategoryCard from "./CategoryCard"

export default function Category () {
    
    return (
        <View style={{
            width : wp("95%"),
            paddingLeft : 10
        }}>
            <View style={Style.titleBox}>
                <Text style={Style.titleText} >Categories</Text>
            </View>
                <View 
                    style={{
                    flexDirection : "row",
                    justifyContent : "space-between",
                    flexWrap : "wrap",
                    alignItems : "center"
                }}
                >
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Catering"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Bouquet"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Make Up"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Venue"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Dress"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Decoration"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Invitation Letter"
                    />
                    <CategoryCard 
                    image={IMCategory}
                    categoryName="Photographer"
                    />
                </View>
        </View>
    )
}

const Style = StyleSheet.create ({
    titleBox : {
        width : wp("70%"),
        marginBottom : 10
    },
    titleText : {
        fontSize : 23,
        fontWeight : "bold"
    },
})