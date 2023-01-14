import { styles } from './styles'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';

type Props = {
    description: string;
    onRemove: (estado: boolean) => void;
    onCheckTask: (estado: boolean) => void;
}

export function Task({ description, onRemove, onCheckTask }: Props) {

    const [estado, setEstado] = useState(false);

    const checkTask = () => {
        setEstado(!estado);

        onCheckTask(!estado);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonCheck}
                onPress={() => checkTask()}>
                <Icon
                    style={estado ? styles.buttonTaskDone : styles.buttonNotTaskDone}
                    name={estado ? "check-circle" : "checkbox-blank-circle-outline"} />
            </TouchableOpacity>
            <Text style={styles.description}>
                {description}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRemove(estado)}>
                <Icon style={styles.buttonText} name="trash-can-outline" />
            </TouchableOpacity>
        </View>
    )
}