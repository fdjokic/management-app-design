import React from "react";
import styled from "styled-components";

export const AddTask = () => {
  return <AddTaskStyle>+ Add a Task</AddTaskStyle>;
};

const AddTaskStyle = styled.div`
  cursor: pointer;
  padding: 12px 0 0 22px;
  color: ${(props) => props.theme.mainBtnColor};
  font-size: 14px;
  font-family: Helvetica Neue Medium;
  font-weight: 500;
`;
