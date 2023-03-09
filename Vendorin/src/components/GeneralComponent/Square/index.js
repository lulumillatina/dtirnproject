import React from 'react'
import { View, Image } from 'react-native'

const Square = ({ style, source}) => {
    return (
        <View style={[style, {backgroundColor : "#C4C4C4"}]}>
            <Image source={source} style={[style,{marginHorizontal : 0}]}/>
        </View>
    )
}

export default Square;
