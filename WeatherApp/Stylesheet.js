import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    image: {
        flex: 1,
        flexDirection: 'column',
    }, 

    textInput: {
        borderBottomWidth: 3,
        padding: 5,
        paddingVertical: 20,
        marginVertical: 100,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 19, 
        borderRadius: 16,
        borderBlockColor: '#df8e00', 
    },

    infoView: {
        alignItems: 'center',
    },

    cityCountryText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },

    dateText: {
        color: '#fff',
        fontSize: 22,
        marginVertical: 10,
    },

    tempText: {
        fontSize: 45,
        color: '#fff',
        marginVertical: 10,
    },

    minMaxText: {
        fontSize: 15,
        color: '#fff',
        marginVertical: 10,
        fontWeight: '500',
    },


});