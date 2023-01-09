import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {

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
                    style={estado ? styles.buttonIsCheck : styles.buttonNotCheck}
                    name={estado ? "check-circle" : "checkbox-blank-circle-outline"} />
            </TouchableOpacity>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}>
                <Icon style={styles.buttonText} name="trash-can-outline" />
            </TouchableOpacity>
        </View>
    )
}