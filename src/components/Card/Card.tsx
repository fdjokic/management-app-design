import React from "react";
import { CardStyled } from "./CardStyle";
import { StatusBar } from "./StatusBar";

interface ICard {
  height?: string;
  text: string;
  numOfComments?: number;
  numOfFilters?: number;
  dates?: string;
  statusColors?: string[];
}

export const Card = ({
  height,
  text,
  numOfComments,
  numOfFilters,
  dates,
  statusColors,
}: ICard) => {
  return (
    <CardStyled>
      <p>{text}</p>
      <StatusBar
        colors={statusColors}
        comments={numOfComments}
        filters={numOfFilters}
      />
      {dates && <b>{dates}</b>}
    </CardStyled>
  );
};
