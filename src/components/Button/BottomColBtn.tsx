import React from "react";
import styled from "styled-components";

export const BottomColBtn = ({ isCompleted }: { isCompleted?: boolean }) => {
  return (
    <AddTaskStyle>
      <span>{isCompleted ? "View Completed Tasks" : "+ Add a Task"}</span>
    </AddTaskStyle>
  );
};

const AddTaskStyle = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.mainBtnColor};
  font-size: 14px;
  font-family: HelveticaNeue-Medium;
  z-index: 99;
  position: sticky;
  bottom: 0;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 40px;

  span {
    line-height: 30px;
    margin-left: 22px;
  }
`;
