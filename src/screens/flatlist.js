import { View, Text, FlatList } from 'react-native'

export default function FlatListComponents() {

    const cars = ["MBW", "Mercedes-Benz", "Bugati", "Lexus"]

    return (
        <View>
            <Text>This is List On React Native with FlatList</Text>
            <FlatList 
                data={cars}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={(item) => item}
            />
        </View>
    )
}