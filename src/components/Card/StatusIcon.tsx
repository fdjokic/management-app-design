import React from "react";
import { Flex } from "../../styles/GlobalStyles";

export const StatusIcon = ({ color }: { color: string[] }) => {
  return <Flex>{color.map((i) => i)}</Flex>;
};
