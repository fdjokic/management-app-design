import React from "react";
import { Divider, Flex } from "../../styles/GlobalStyles";
import { ProfileImgType } from "../../utils/mockData";
import { CardStyled } from "./CardStyle";
import { StatusBar } from "./StatusBar";

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
  onDragEnd?: () => void;
  onMouseDown?: () => void;
  setDraggableItem?: () => void;
  notDragged?: boolean;
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
  onDragEnd,
  notDragged,
}: ICard) => {
  return (
    <CardStyled
      isCompleted={isCompleted}
      draggable
      onDragEnd={onDragEnd}
      onMouseDown={onMouseDown}
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
            <Flex relative width="100%">
              {profileImgs?.map((i: string, index: number) => {
                return (
                  <img
                    src={i}
                    alt=""
                    style={{
                      width: "24px",
                      position: "absolute",
                      right: "0",
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
