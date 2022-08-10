import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  font-size: 100px;
  color: #ead7d7;
`;


const Header = () => {
  return (
    <>
      <Container>todos</Container>
    </>
  );
};

export default Header;
