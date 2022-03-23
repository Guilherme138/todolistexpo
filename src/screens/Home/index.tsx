import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  FlatList 
} from 'react-native';
import {TaskCard} from '../../components/TaskCard';
import { Button } from '../../components/Button';
import { styles } from './style';

interface TaskData {
  id: string;
  name: string;
}

export function Home() {
  const [newTask, setNewtask] = useState('');
  const [dataTasks, setDataTasks] = useState<TaskData[]>([]);

  function handleAddNewTask() {
    const task: TaskData = {
      id: String(new Date().getTime()),
      name: newTask,
    };
    setDataTasks(dataTasks => [...dataTasks, task]);
  }

  function handleRemoveTask(id: string) {
    setDataTasks(dataTasks => dataTasks.filter(task => task.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
      Ola, Guilherme
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Escreve uma tarefa..."
        placeholderTextColor="#6666"
        onChangeText={setNewtask}
      />

      <Button
        title="Adicionar Tarefa"
        onPress={handleAddNewTask}
        activeOpacity={0.7}
      />

      <Text style={styles.text}>Minhas Tarefas</Text>

      <FlatList
        data={dataTasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskCard
            name={item.name}
            onPress={() => handleRemoveTask(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}