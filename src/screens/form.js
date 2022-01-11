import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default function Form() {
    return (
        <View style={style.container}>
            <Text style={style.header}>Sign In</Text>

            <Text style={style.textStyle}>Email</Text>
            <TextInput style={style.textInput} />

            <Text style={style.textStyle}>Password</Text>
            <TextInput style={style.textInput} />

            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20
    },
    header: { 
        fontSize: 30, 
        fontWeight: "bold", 
        color: 'blue',
        textAlign: 'center',
        marginBottom: 50
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold", 
        marginBottom: 5
    },
    textInput: {
        color: 'black',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15
    },
    button: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 10,
        height: 35,
        marginTop: 30
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold", 
        textAlign: 'center'
    }

})