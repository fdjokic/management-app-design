import React from 'react';
import { Flex } from '../../styles/GlobalStyles';
import { BottomColBtn } from '../Button/BottomColBtn';
import { Card, ICard } from '../Card/Card';
import { ColumnHeader } from './ColumnHeader';
import { ColumnWrapper } from './ColumnStyled';

export const Column = ({
  title,
  list,
  onDragOver,
  onDrop,
  onMouseDown,
  setDraggableItem,
  draggableItem,
  onDragStart,
}: {
  title: string;
  list: ICard[];
  listIndex?: number;
  onDrop?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onMouseDown?: () => void;
  setDraggableItem?: (item: ICard) => void;
  draggableItem?: ICard;
  onDragStart?: (e: React.DragEvent, card: any) => void;
}) => {
  const isCompleted = title?.toLowerCase().includes('completed');

  return (
    <div onDragOver={onDragOver} onMouseDown={onMouseDown}>
      <ColumnHeader title={title} numOfTasks={list.length} />
      <ColumnWrapper>
        <Flex column gap='5px' padding='5px' overflow='none'>
          {list?.map((card: ICard) => {
            return (
              <Card
                onDragStart={(e: React.DragEvent) => onDragStart?.(e, card)}
                notDragged={!!draggableItem && draggableItem.id !== card.id}
                key={card?.id}
                onDrop={(e: React.DragEvent) => onDrop?.(e)}
                isCompleted={isCompleted}
                statusColors={card?.statusColors ? card?.statusColors : []}
                text={card?.text}
                dates={card?.dates}
                numOfComments={card?.numOfComments}
                numOfFilters={card?.numOfFilters}
                profileImgs={card?.profileImgs}
                highPriority={card?.highPriority}
                onMouseDown={() => {
                  setDraggableItem?.(card);
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
