import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

interface TaskButtonProps extends TouchableOpacityProps {
  name: string;
  onPress: () => void;
}
export function TaskCard({name, onPress, ...rest}: TaskButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonTask} onPress={onPress} {...rest}>
      <Text style={styles.textTask}>
      {name}
      </Text>
    </TouchableOpacity>
  );
}
        