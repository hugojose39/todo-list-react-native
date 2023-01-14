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
    description: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
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
    buttonTaskDone: {
        color: '#5E60CE',
        fontSize: 24,
    },
    buttonNotTaskDone: {
        color: '#4EA8DE',
        fontSize: 24,
    },
});