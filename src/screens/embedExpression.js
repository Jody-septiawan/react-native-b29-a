import {View, Text} from 'react-native'

export default function EmbedExpression() {

    function getMajor() {
        return "Full-Stack Javascript"
    }

    const companyName = "Dumbways.id"

    return (
        <View>
            <Text> Welcome to {companyName} Class {getMajor()} </Text>
        </View>
    )
}