import React from "react";
import { Flex } from "../../styles/GlobalStyles";
import { StatusBtn } from "./CardStyle";

interface IStatusBar {
  colors?: string[];
  comments?: number;
  filters?: any;
}

export const StatusBar = ({ colors, comments, filters }: IStatusBar) => {
  console.log(colors);
  return (
    <div
      style={{
        padding: "0 0 0 12px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {colors?.map((i) => (
        <StatusBtn background={i} />
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#8E8E8E",
          fontSize: "12px",
        }}
      >
        <span>{colors?.length === 5 ? "+3" : ""}</span>
        <span>icon {comments}</span>
        <span>icon {filters}</span>
      </div>
    </div>
  );
};
