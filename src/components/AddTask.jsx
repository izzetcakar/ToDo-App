import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useLayoutEffect } from "react";

const Container = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: solid;
  border-width: 1px;
  border-color: #c6c6c6;
`;
const Text = styled.input`
  width: 400px;
  font-size: 20px;
  height: 40px;
  border: 0px;
  :focus {
    outline: 0;
  }
`;
const IconContainer = styled.div`
  color: #c6c6c6;
  cursor: pointer;
`;

const AddTask = ({ tasks, addTask, setTasks }) => {
  const [task, setTask] = useState("");
  const [changeAll, setChangeAll] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      addTask(task);
      setTask((prev) => "");
    } else {
      return false;
    }
  };
  const handleChangeSubmit = (event) => {
    setTask(event.target.value);
  };

  useLayoutEffect(() => {
    if (tasks.every((t) => t.isCompleted === true)) {
      setChangeAll((prev) => false);
    } else if (tasks.every((t) => t.isCompleted === false)) {
      setChangeAll((prev) => true);
    }
  }, [tasks]);

  const handleChangeAll = () => {
    setTasks((prev) =>
      tasks.map((t) => {
        return { ...t, isCompleted: changeAll };
      })
    );
    setChangeAll((prev) => !prev);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <IconContainer onClick={() => handleChangeAll()}>
        <ExpandMoreOutlinedIcon fontSize="large" />
      </IconContainer>
      <Text
        name="title"
        value={task}
        onChange={(event) => handleChangeSubmit(event)}
        placeholder="What needs to be done?"
      />
    </Container>
  );
};

export default AddTask;
