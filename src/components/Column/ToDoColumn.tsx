import React from "react";
import { Flex } from "../../styles/GlobalStyles";
import { BottomColBtn } from "../Button/BottomColBtn";
import { Card, ICard } from "../Card/Card";
import { ColumnHeader } from "./ColumnHeader";
import { ColumnWrapper } from "./ColumnStyled";

export const Column = ({ title, list }: { title: string; list: ICard[] }) => {
  const isCompleted = title?.toLowerCase().includes("completed");
  return (
    <div>
      <ColumnHeader title={title} numOfTasks={list.length} />
      <ColumnWrapper>
        <Flex column gap="5px" padding="5px" overflow="none">
          {list.map((item) => {
            return (
              <Card
                isCompleted={isCompleted}
                statusColors={item.statusColors ? item.statusColors : []}
                text={item.text}
                dates={item.dates}
                numOfComments={item.numOfComments}
                numOfFilters={item.numOfFilters}
                profileImgs={item.profileImgs}
                highPriority={item.highPriority}
              />
            );
          })}
        </Flex>
        <BottomColBtn isCompleted={isCompleted} />
      </ColumnWrapper>
    </div>
  );
};
