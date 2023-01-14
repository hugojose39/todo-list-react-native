import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24,
    },
    formTodo: {
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '100%',
        marginTop: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rocket: {
        color: '#4EA8DE',
        fontSize: 40,
    },
    todoBaseText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 40,
    },
    todoInnerText: {
        color: '#5E60CE',
        fontSize: 40,
        fontWeight: 'bold',
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
    },
    listEmptyIcon: {
        color: '#808080',
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listEmptyTitle: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listEmptySubTitle: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
    },
    formCreatedCompleted: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 42,
        marginTop: 40,
    },
    created: {
        color: '#4EA8DE',
        fontSize: 16,
        fontWeight: 'bold',
    },
    completed: {
        color: '#5E60CE',
        fontSize: 16,
        fontWeight: 'bold',
    },
});