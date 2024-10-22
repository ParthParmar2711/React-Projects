// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from "./NavBar"
import FormComponent from "./FormComponent"
import DisplayNotes from "./DisplayNotes"
import TaskContent from "./context/TaskContext"
const App = () => {
  return (
    <>
      <NavBar />
      <TaskContent>
        <main id="mainContainer">
          <FormComponent />
          <DisplayNotes />
        </main>
      </TaskContent>
    </>
  )
}

export default App