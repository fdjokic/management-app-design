import React from "react";

export const Icon = ({ children, num }: { children: any; num?: number }) => {
  return (
    <>
      <li>
        {children}
        <span style={{ marginLeft: "5px", verticalAlign: "middle" }}>
          {num}
        </span>
      </li>
    </>
  );
};
