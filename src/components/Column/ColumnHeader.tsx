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
  background-color: inherit;
  height: 20px;
  width: 80%;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-self: start;
  gap: 7px;

  h1 {
    height: 19px;
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
    font-family: "HelveticaNeue-Bold";
    font-size: 14px;
  }
`;
