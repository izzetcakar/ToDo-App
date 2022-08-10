import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

const Container = styled.div`
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 700px;
  flex-direction: column;
`
const TaskContainer = styled.div`
  width: 500px;
  background-color: #fefefe;
  border-width: 10px;
  border-color: black;
  flex-direction: column;
`
const TaskShowContainer = styled.div`
  width: 500px;
  height: auto;
  max-height: 270px;
  overflow-x: hidden;
    ::-webkit-scrollbar{
        display: none;
    }
`

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [choice, setChoice] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, { title: task, isCompleted: false }]);
  }

  if (choice === "") {
    setChoice((prev) => "All");
  }

  return (
    <>
      <Container>
        <Header />
        <TaskContainer>
          <AddTask tasks={tasks} addTask={addTask} setTasks={setTasks} />
          {tasks.length > 0 ?
            <>
              <TaskShowContainer>
                <Tasks tasks={tasks} choice={choice} setTasks={setTasks} />
              </TaskShowContainer>
              <Footer tasks={tasks} setTasks={setTasks} setChoice={setChoice} />
            </>
            : false}
        </TaskContainer>
      </Container>
    </>
  )
}

export default App
