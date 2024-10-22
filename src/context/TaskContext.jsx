//todo From "TaskContent.jsx (Sender)" we are sending data to "FormComponent.jsx" and "DisplayNotes.jsx" with the help of Context Api. 
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

//todo Step 01: Create a Context
//* createContext() methods it return "Component(ContextApi)" ----> to store Component take first letter of variable as Capital.
export let TaskApi = createContext();

const TaskContext = (props) => {

  console.log("TaskContext", props); //!object {children: value}

  //! To store Form Data
  let [inputData, setInputData] = useState({
    title: "",
    description: "",
    category: "",
    id: uuidv4()
  });
  
  //? get the data from local storage
  let getData=()=>{
    let data= localStorage.getItem("list") //? data is in JSON format
    if(data){
      return JSON.parse(data);
    }else{
      return []
    }
  }

  //! To store Multiple Notes
  let [multiTask, setMultiTask] = useState(getData());

  //! Storing data in local Storage
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(multiTask))
  }, [multiTask])

  
  //! To store selected-category
  let [selected, setSelected] = useState({
    selectedCategory: "all"
  });

  //! changes in radio button
  let handleSelectedCategory = (e) => {
    let { name, value } = e.target;
    setSelected({ [name]: value })
  }

  //! handle changes in form
  let handleChange = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //! Handle Delete Logic
  let handleDelete = (id) => {
    setMultiTask(multiTask.filter(task => task.id !== id));
  };

  //! Handle Edit Logic
  let handleEdit = (id) => {
    const taskToEdit = multiTask.find(task => task.id === id);
    if (taskToEdit) {
      setInputData(taskToEdit); 
    }
  };

  //! Add or Update Note Logic
  let handleAddOrUpdateNote = () => {
    if (inputData.title === "")return;
    if (!multiTask.some(task => task.id === inputData.id)) {
      setMultiTask([...multiTask, { ...inputData, id: uuidv4() }]);
    } else {
      setMultiTask(multiTask.map(task => (task.id === inputData.id ? inputData : task)));
    }
    setInputData({ title: "", description: "", category: "", id: uuidv4() });
  };

  return (
    //todo Step 2: Context Provider ----> Wrap the Provider
    <TaskApi.Provider value={{ inputData, handleChange, multiTask, setMultiTask, setInputData, selected, handleSelectedCategory, handleEdit, handleAddOrUpdateNote, handleDelete }}>
      {props.children}
    </TaskApi.Provider>
  )
}

export default TaskContext