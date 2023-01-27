import React from "react";
import { Flex } from "../../styles/GlobalStyles";
import { BottomColBtn } from "../Button/BottomColBtn";
import { Card, ICard } from "../Card/Card";
import { ColumnHeader } from "./ColumnHeader";
import { ColumnWrapper } from "./ColumnStyled";

export const Column = ({
  title,
  list,
  listIndex,
  onDragOver,
  onDragStart,
  onDragEnd,
  onMouseDown,
  setDraggableItem,
  draggableItem,
}: {
  title: string;
  list: ICard[];
  listIndex?: number;
  onDragEnd?: () => void;
  onDragOver?: () => void;
  onDragStart?: (item: ICard) => void;
  onMouseDown?: (e: any) => void;
  setDraggableItem?: (item: ICard) => void;
  draggableItem?: ICard;
}) => {
  const isCompleted = title?.toLowerCase().includes("completed");

  return (
    <div
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onMouseDown={onMouseDown}
    >
      <ColumnHeader title={title} numOfTasks={list.length} />
      <ColumnWrapper>
        <Flex column gap="5px" padding="5px" overflow="none">
          {list?.map((item: ICard) => {
            return (
              <Card
                notDragged={!!draggableItem && draggableItem.id !== item.id}
                key={item?.id}
                onDragStart={onDragStart}
                isCompleted={isCompleted}
                statusColors={item?.statusColors ? item?.statusColors : []}
                text={item?.text}
                dates={item?.dates}
                numOfComments={item?.numOfComments}
                numOfFilters={item?.numOfFilters}
                profileImgs={item?.profileImgs}
                highPriority={item?.highPriority}
                onMouseDown={() => {
                  setDraggableItem?.(item);
                }}
              />
            );
          })}
        </Flex>
        <BottomColBtn isCompleted={isCompleted} />
      </ColumnWrapper>
    </div>
  );
};
