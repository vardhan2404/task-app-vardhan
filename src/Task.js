import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Task = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const val = (inp)=>{
        setTask(inp)
    }

    const handleSubmit = ()=>{
        setTaskList((lst)=>([...lst, task]))
    }
  return (
    <View>
      <View>
        <inputBox onChangeText={val} placeholder="Enter the Task" />
        <Button onPress={handleSubmit} title="ADD" />
      </View>
      <View>
        <Text>Enter the Task</Text>
        <View>
            {taskList?.map((ele, index)=>(
                <Text key={index}>{ele}</Text>
            ))}
        </View>
      </View>
    </View>
  )
}

export default Task