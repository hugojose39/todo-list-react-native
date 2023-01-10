import { styles } from './styles';
import { Task } from '../../components/Task';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Home(): JSX.Element {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescription, setTaskName] = useState('');
    const [countCreated, setCountCreated] = useState(0);
    const [countCompleted, setCountCompleted] = useState(0);

    function onPressCheck() {
        setCountCompleted(countCompleted + 1)
    }

    function onPressRemove(description: string) {
        setCountCreated(countCreated - 1),
        setTasks(prevState => prevState.filter(task => task !== description));
    }

    function handleTaskAdd() {
        if (tasks.includes(taskDescription)) {
            return Alert.alert('Tarefa já existe', 'Já existe uma tarefa na lista com essa descrição!')
        }

        if (! taskDescription) {
            return Alert.alert('Tarefa inválida!')
        }

        setCountCreated(countCreated + 1);
        setTasks(prevState => [...prevState, taskDescription]);
        setTaskName('');
    }

    function handleTaskCheck(description: string) {
        Alert.alert('Finalizar tarefa', `Deseja finaliza a tarefa ${description} ?`, [
            {
                text: 'Sim',

                onPress: () => onPressCheck(),
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    function handleTaskRemove(description: string) {
        Alert.alert('Remover', `Remover a tarefa ${description} ?`, [
            {
                text: 'Sim',

                onPress: () => onPressRemove(description),
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.formTodo}>
                <Icon style={styles.rocket} name="rocket" />
                <Text style={styles.todoBaseText}>to</Text>
                <Text style={styles.todoInnerText}>do</Text>
            </View>
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
                    Criadas: {countCreated}
                </Text>
                <Text style={styles.completed}>
                    Concluídas: {countCompleted}
                </Text>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        description={item}
                        onRemove={() => handleTaskRemove(item)}
                        onCheckTask={() => handleTaskCheck(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.container}>
                        <Icon style={styles.listEmptyIcon} name="clipboard-list-outline" />
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