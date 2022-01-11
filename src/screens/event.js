import {View, Text, TouchableOpacity} from 'react-native'

export default function Event(){

    function Greeting(){
        return alert("Good Morning Everyone Have a Nice Day")
    }

    return (
        <View>
            <Text>If you press 'click here' then an alert well appear</Text>

            <TouchableOpacity onPress={() => alert("Hello Full-Stack Bootcamp Participants")}>
                <Text>Click Here</Text>
            </TouchableOpacity>

            <Text>If you press 'Greeting' then an alert well appear</Text>

            <TouchableOpacity onPress={Greeting}>
                <Text>Greeting</Text>
            </TouchableOpacity>
        </View>
    )
}