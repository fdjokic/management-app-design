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
      <span
        style={{
          color: "#8E8E8E",
          fontSize: "12px",
        }}
      >
        {colors?.length === 5 && "+3"}
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#8E8E8E",
          fontSize: "12px",
        }}
      >
        {comments && <span>icon {comments}</span>}
        {filters && <span>icon {filters}</span>}
      </div>
    </div>
  );
};
