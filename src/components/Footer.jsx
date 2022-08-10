import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 400px;
  height: 40px;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10px;
  border: solid;
  border-width: 1px;
  border-color: #c6c6c6;
  padding: 10px;
`;
const TaskCount = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.button`
  cursor: pointer;
  border-width: 0px;
  background-color: transparent;
  :focus {
    border-width: 1px;
    border-radius: 3px;
    border-color: #c6c6c6;
  }
`;
const Clear = styled.button`
  cursor: pointer;
  border-width: 0px;
  background-color: transparent;
`;

const Footer = ({ tasks, setTasks, setChoice }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = tasks.filter((t) => t.isCompleted === false);
    setCount((prev) => c.length);
  }, [tasks]);

  const changeChoice = (choice) => {
    setChoice((prev) => choice);
  };

  const clearCompleted = () => {
    setTasks((prev) => tasks.filter((t) => t.isCompleted === !true));
  };

  return (
    <Container>
      <MainContainer>
        <TaskCount>{count} items left</TaskCount>
        <ButtonContainer>
          <Button onClick={() => changeChoice("All")}>All</Button>
          <Button onClick={() => changeChoice("Active")}>Active</Button>
          <Button onClick={() => changeChoice("Completed")}>Completed</Button>
        </ButtonContainer>
        <Clear onClick={() => clearCompleted()}>Clear Completed</Clear>
      </MainContainer>
    </Container>
  );
};

export default Footer;
