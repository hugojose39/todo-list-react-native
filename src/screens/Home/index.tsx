import { styles } from './styles';
import { Task } from '../../components/Task';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Home(): JSX.Element {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescription, setTaskName] = useState('');

    function handleTaskAdd() {
        if (! taskDescription) {
            return Alert.alert('Tarefa inválida!')
        }

        setTasks(prevState => [...prevState, taskDescription]);
        setTaskName('');
    }

    function handleTaskRemove(name: string) {
        Alert.alert('Remover', `Remover a tarefa ${name}?`, [
            {
                text: 'Sim',

                onPress: () => setTasks(prevState => prevState.filter(participant => participant !== name)),
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.todo}>
                <Icon style={styles.rocket} name="rocket" />
                <Text style={styles.todoBaseText}>to</Text>
                <Text style={styles.todoInnerText}>do</Text>
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setTaskName}
                    value={taskDescription}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}>
                    <Icon style={styles.buttonText} name="plus-circle" />
                </TouchableOpacity>
            </View>

            <View style={styles.formCreatedCompleted}>
                <Text style={styles.created}>
                    Criadas:
                </Text>
                <Text style={styles.completed}>
                    Concluídas: 
                </Text>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        name={item}
                        onRemove={() => handleTaskRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.container}>
                        <Text style={styles.listEmptyTitle}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptySubTitle}>
                            Crie tarefas e organize seus itens a fazer.
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}