import React from "react";
import styled from "styled-components";

export const ColumnHeader = ({
  title,
  numOfTasks,
}: {
  title: string;
  numOfTasks: string;
}) => {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      <span>({numOfTasks})</span>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  height: 20px;
  width: 236px;
  display: flex;
  align-items: center;
  h1 {
    height: 19px;
    width: 46px;
    color: ${(props) => props.theme.headingColor};
    font-family: "Helvetica Neue";
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 19px;
  }
`;
