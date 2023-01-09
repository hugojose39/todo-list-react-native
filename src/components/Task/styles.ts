import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        flex:1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCheck: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIsCheck: {
        color: '#5E60CE',
        fontSize: 30,
    },
    buttonNotCheck: {
        color: '#1E6F9F',
        fontSize: 30,
    },
});