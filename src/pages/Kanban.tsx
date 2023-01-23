import React from "react";
import styled from "styled-components";
import { ToDoColumn } from "../components/Column/ToDoColumn";

export const Kanban = () => {
  return (
    <KanbanStlye>
      <ToDoColumn />
    </KanbanStlye>
  );
};

const KanbanStlye = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
`;
