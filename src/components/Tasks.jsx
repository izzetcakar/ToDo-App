import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: solid;
  border-width: 1px;
  border-color: #c6c6c6;
  border-bottom: 0px;
`;
const Task = styled.input`
  width: 400px;
  max-width: 400px;
  font-size: 20px;
  height: 40px;
  border: 0px;
`;
const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
const ClearIconContainer = styled.div`
  color: #862222;
  cursor: pointer;
`;
const CircleIconContainer = styled.div`
  color: #c6c6c6;
  cursor: pointer;
`;
const Tasks = ({ tasks, setTasks, choice }) => {
  const [showTasks, setShowTasks] = useState([]);

  useLayoutEffect(() => {
    switch (choice) {
      case "All":
        setShowTasks((prev) => tasks);
        break;
      case "Completed":
        let a = tasks.filter((t) => t.isCompleted === true);
        setShowTasks((prev) => a);
        break;
      case "Active":
        let b = tasks.filter((t) => t.isCompleted === false);
        setShowTasks((prev) => b);
        break;
    }
  }, [choice, tasks]);

  const changeComplete = (task) => {
    setTasks(
      tasks.map((item) => {
        return item.title === task.title
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      })
    );
  };

  const clearTask = (task) => {
    setTasks((prev) => tasks.filter((t) => t.title !== task));
  };

  const changeTaskTitle = (e,title) => {
    setTasks((prev) =>
      tasks.map((item) => {
        return item.title === title ? { ...item, title: e.target.value } : item;
      })
    );
  };

  return (
    <Container>
      {showTasks.map((task, i) => (
        <TaskContainer key={i}>
          <CircleIconContainer onClick={() => changeComplete(task)}>
            {task.isCompleted ? (
              <TaskAltOutlinedIcon
                fontSize="large"
                style={{ color: "#49df4e" }}
              />
            ) : (
              <CircleOutlinedIcon fontSize="large" />
            )}
          </CircleIconContainer>
          <Task
            type="text"
            value={task.title}
            onChange={(e) => changeTaskTitle(e,task.title)}
          ></Task>
          <ClearIconContainer onClick={() => clearTask(task.title)}>
            <ClearOutlinedIcon fontSize="medium" />
          </ClearIconContainer>
        </TaskContainer>
      ))}
    </Container>
  );
};

export default Tasks;
