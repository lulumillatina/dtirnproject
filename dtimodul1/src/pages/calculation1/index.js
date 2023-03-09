import React, {useState} from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export default function Calculation () {
    const number = useSelector (state => state.number)
    const dispatch = useDispatch ()

    return(
        <View>
            <Button title="Tambah" onPress={() => dispatch({
                type : "ADD"
            })}/>
            <Text style={{fontSize : 40}}>{number}</Text>
            <Button title="Kurang" onPress={() => dispatch({
                type : "MINUS"
            })}/>
        </View>
    )
}