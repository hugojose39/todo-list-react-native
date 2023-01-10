import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    description: string;
    onRemove: () => void;
    onCheckTask: () => void;
}

export function Task({ description, onRemove, onCheckTask }: Props) {

    const [estado, setEstado] = useState(false);

    const checkTask = () => {
        setEstado(!estado);
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
                onPress={onRemove}>
                <Icon style={styles.buttonText} name="trash-can-outline" />
            </TouchableOpacity>
        </View>
    )
}