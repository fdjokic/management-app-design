import React from 'react';
import { Divider, Flex } from '../../styles/GlobalStyles';
import { ProfileImgType } from '../../utils/mockData';
import { CardStyled } from './CardStyle';
import { StatusBar } from './StatusBar';

export interface ICard {
  id?: number;
  text: string;
  numOfComments?: number;
  numOfFilters?: number | undefined;
  dates?: string;
  statusColors?: string[];
  isCompleted?: boolean;
  profileImgs: ProfileImgType[];
  highPriority?: boolean;
  onDrop?: (e: React.DragEvent) => void;
  onMouseDown?: () => void;
  setDraggableItem?: () => void;
  notDragged?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
}

export const Card = ({
  text,
  numOfComments,
  numOfFilters,
  dates,
  statusColors,
  isCompleted,
  profileImgs,
  highPriority,
  onMouseDown,
  onDrop,
  notDragged,
  onDragStart,
}: ICard) => {
  return (
    <CardStyled
      isCompleted={isCompleted}
      draggable
      onDrop={onDrop}
      onMouseDown={onMouseDown}
      onDragStart={onDragStart}
      notDragged={!!notDragged}
    >
      {highPriority && <Divider />}
      <p>{text}</p>
      {!statusColors || !numOfComments || !dates ? null : (
        <StatusBar
          colors={statusColors}
          comments={numOfComments}
          filters={numOfFilters}
        />
      )}
      {(profileImgs?.length > 0 || dates) && (
        <section>
          {dates && <b>{dates}</b>}
          {profileImgs && (
            <Flex relative width='100%'>
              {profileImgs?.map((i: string, index: number) => {
                return (
                  <img
                    src={i}
                    alt=''
                    style={{
                      width: '24px',
                      position: 'absolute',
                      right: '0',
                      transform: `${
                        dates
                          ? `translate(${index * -55}%)`
                          : `translateX(${index * 50}%)`
                      }`,
                    }}
                  />
                );
              })}
            </Flex>
          )}
        </section>
      )}
    </CardStyled>
  );
};
