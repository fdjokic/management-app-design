import React from "react";
import { Flex } from "../../styles/GlobalStyles";
import { CardStyled } from "./CardStyle";
import { StatusBar } from "./StatusBar";
import Avatar from "../../assets/images/user.png";

export interface ICard {
  height?: string;
  text: string;
  numOfComments?: number;
  numOfFilters?: number;
  dates?: string;
  statusColors?: string[];
  isCompleted?: boolean;
  profileImgs?: any;
}

export const Card = ({
  height,
  text,
  numOfComments,
  numOfFilters,
  dates,
  statusColors,
  isCompleted,
  profileImgs,
}: ICard) => {
  console.log(profileImgs);
  return (
    <CardStyled isCompleted={isCompleted}>
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
                console.log(i);
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
