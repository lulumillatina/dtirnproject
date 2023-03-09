import React from "react"
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Square from "../Square";

export default function Carousel (props) {
 
 const {items} = props;
 const [active, setActive] = React.useState(0)

 const change = (x,w) => {
   const slide = Math.ceil(x / w)
   if(slide !== active){
      setActive(slide)
   }
 }
  return(
    <View style={Style.carouselContainer}>
      <ScrollView
       pagingEnabled
       horizontal
       contentContainerStyle={{paddingLeft:"3%"}}
       showsHorizontalScrollIndicator={false}
       onScroll={data => change(data.nativeEvent.contentOffset.x,data.nativeEvent.layoutMeasurement.width)}
      > 
        {items.map((items,index) =>{
         return(
          <View key={index} style={Style.imageContainer}>
            <TouchableOpacity>
              <Square source={items.source} style={items.style}/>
              </TouchableOpacity>
          </View>
         )
        })} 
      </ScrollView>
      <View style={Style.bulletColumn}>
        {items.map((items,index) =>{
          return(
            <Text key={index} style={index === active ? Style.bulletActive : Style.bulletPassive } >
              &bull;
            </Text>
          )
        })}
      </View>
    </View>
  )
}

const Style = StyleSheet.create ({
  imageContainer : {
      flexDirection : "row",
      width: wp("95%")
  },
  carouselContainer: {
    flexDirection : "column"
  },
  bulletColumn : {
    flexDirection : "row",
    position : "relative",
    alignSelf : "center",
    bottom : 0
  },
  bulletActive: {
    paddingHorizontal: 5,
    fontSize: 30,
    color : "#51BAC8"
  },
  bulletPassive: {
    paddingHorizontal: 5,
    fontSize: 30,
    color : "#C4C4C4"
  }
})