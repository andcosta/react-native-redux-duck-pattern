import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'rgba(000,000,000,.3)',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    avatar: {
        marginTop: 15, 
        width: 35, 
        height: 35, 
        borderRadius: 3
    },
    user: {
        color: '#000000',
        fontSize: 25,
    },
    button: {
        marginTop: 21,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#000"
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        paddingHorizontal: 15
    },
    loading: {
        marginTop: 15,
    },
});