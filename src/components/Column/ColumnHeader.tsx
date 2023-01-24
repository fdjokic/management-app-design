import React from "react";
import styled from "styled-components";
import { OptionsIcon } from "../../assets/icons/optionsIcon";

export const ColumnHeader = ({
  title,
  numOfTasks,
}: {
  title: string;
  numOfTasks: number;
}) => {
  return (
    <HeaderStyle>
      <div>
        <h1>{title}</h1>
        <span>({numOfTasks})</span>
      </div>
      <div>
        <OptionsIcon />
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  width: 236px;
  margin: 0 auto;
  div {
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-self: start;
    gap: 7px;
  }

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
    color: ${(props) => props.theme.secondaryText};
    opacity: 0.5;
    font-family: "HelveticaNeue-Bold";
    font-size: 14px;
  }
`;
