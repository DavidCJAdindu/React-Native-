import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    bgImage: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 15, // Smaller font size
        color: '#fff',
        // marginTop: , // Space between logo and text
        // width: 20,
    },
    loginPanel: {
        flex: 2,
        backgroundColor: '#f25c7f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupPanel: {
        flex: 2,
        backgroundColor: '#26b2bf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 600, // Adjust the height as needed
        // resizeMode: 'contain',
        marginTop: 45,
    },
    mainBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%', // Adjust the height as needed
        padding: 10,
    },
    boxOne: {
        flex: 1,
        height: '100%',
        width: 10,
        backgroundColor: '#f25c7f',
        margin: 5,
    },
    boxMiddle: {
        flex: 4,
        height: '100%',
        // width: 10,
        backgroundColor: '#000',
        margin: 5,
    },
    boxTwo: {
        flex: 1,
        height: '100%',
        // width: 10,
        backgroundColor: '#26b2bf',
        margin: 5,
    },

});