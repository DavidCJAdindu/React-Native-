import React, {useState} from 'react';
import { View, Text, Platform, KeyboardAvoidingView, TextInput,TouchableOpacity, Keyboard, } from 'react-native';
import { styles }  from './Stylesheet.js';
import Task from './components/Task.js';


const App = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (

    <View style={styles.container}>

      {/* Todays Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}> 
          {/* This is where the tasks will go */}
          <Task text={'C0DE !'}/>
          {
            taskItems.map((item, index) => {
              return ( 
                <TouchableOpacity 
                  key={index} 
                  onPress={() => completeTask(index)} >
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>


      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput 
          style={styles.input} 
          placeholder={"Write a Task"} 
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity 
          onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  );
};


export default App;
