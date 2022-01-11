import { View, Text } from 'react-native'

export default function List() {

    const cars = ["MBW", "Mercedes-Benz", "Bugati", "Lexus"]

    return (
        <View>
            <Text>This is List On React Native with Map</Text>
            {cars.map((car, index)=> (
                <Text key={index}>{car}</Text>
            ))}
        </View>
    )
}