import {View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function State() {
    const [counter, setCounter] = useState(0)

    function Add() {
        return setCounter(counter + 1)
    }

    function Less() {
        return setCounter(counter - 1)
    }

    return (
        <View>
            <Text>
                If you click the 'Add' button it will increase by one, vice versa if you click the 'Less' button it will descrease by one
            </Text>

            <Text>{counter}</Text>

            <TouchableOpacity onPress={Add}>
                <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Less}>
                <Text>Less</Text>
            </TouchableOpacity>
        </View>
    )
}