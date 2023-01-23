import React from "react";
import styled from "styled-components";

export const ColumnHeader = ({
  title,
  numOfTasks,
}: {
  title: string;
  numOfTasks: number;
}) => {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      <span>({numOfTasks})</span>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 20px;
  width: 236px;
  display: flex;
  padding: 0 22px 12px 22px;
  align-items: center;
  gap: 5px;

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
  span {
    color: #373737;
    opacity: 0.5;
  }
`;
