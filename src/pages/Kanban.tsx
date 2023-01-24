import React from "react";
import styled from "styled-components";
import { Column } from "../components/Column/ToDoColumn";
import {
  inProgressCards,
  todoCards,
  reviewCards,
  testingCards,
} from "../utils/mockData";

export const Kanban = () => {
  return (
    <KanbanStlye>
      <Column title="To Do" list={todoCards} />
      <Column title="In Progress" list={inProgressCards} />
      <Column title="Ready for review" list={reviewCards} />
      <Column title="Testing" list={testingCards} />
    </KanbanStlye>
  );
};

const KanbanStlye = styled.div`
  height: fit-content;
  padding: 1rem;
  display: flex;
  width: fit-content;
  background-color: ${(props) => props.theme.background};
`;
