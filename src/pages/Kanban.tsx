import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AddColumn } from "../components/Button/AddColumn";
import { ICard } from "../components/Card/Card";
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
  const [columnArray, setColumnArray] = useState<any>(columnList);
  const [columnIndex, setColumnIndex] = useState(0);
  const [draggableItem, setDraggableItem] = useState<any>();
  const [startIndex, setStartIndex] = useState<number>(0);

  function handleDragStart(item?: ICard) {
    setDraggableItem(item);
    setColumnArray((prev: any) => {
      const copy = [...prev];
      copy[startIndex]?.list?.filter((item: ICard) => {
        return item?.id !== draggableItem?.id;
      });

      copy[columnIndex]?.list?.unshift(draggableItem);

      return copy;
    });
  }

  const handleDragEnd = () => {
    // setColumnArray((prev: any) => {
    //   const copy = [...prev];
    //   copy[startIndex]?.list?.filter((item: ICard) => {
    //     return item?.id !== draggableItem?.id;
    //   });
    //   return copy;
    // });
  };

  useEffect(() => {
    console.log(columnIndex, draggableItem, startIndex);
  }, [columnIndex, draggableItem, startIndex]);
  return (
    <KanbanStlye>
      {columnArray.map((i: any, index: number) => {
        return (
          <Column
            key={i.id}
            onDragEnd={handleDragEnd}
            title={i.title}
            list={i.list}
            listIndex={index}
            onDragOver={() => setColumnIndex(index)}
            onDragStart={handleDragStart}
            onMouseDown={() => setStartIndex(index)}
          />
        );
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
