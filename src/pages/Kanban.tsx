import React from "react";
import styled from "styled-components";
import { AddColumn } from "../components/Button/AddColumn";
import { Column } from "../components/Column/ToDoColumn";
import {
  inProgressCards,
  todoCards,
  reviewCards,
  testingCards,
  completeCards,
  columnList,
} from "../utils/mockData";

export const Kanban = () => {
  return (
    <KanbanStlye>
      {columnList.map((i) => {
        return <Column title={i.title} list={i.list} />;
      })}

      <AddColumn />
      <Column title="Completed Tasks" list={completeCards} />
    </KanbanStlye>
  );
};

const KanbanStlye = styled.div`
  height: fit-content;
  padding: 1rem;
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};
  overflow-x: auto;
`;
