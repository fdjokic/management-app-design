import React from "react";
import { Flex } from "../../styles/GlobalStyles";
import { todoCards } from "../../utils/mockData";
import { AddTask } from "../Button/AddTask";
import { Card } from "../Card/Card";
import { ColumnHeader } from "./ColumnHeader";
import { ColumnWrapper } from "./ColumnStyled";

export const ToDoColumn = () => {
  return (
    <>
      <ColumnHeader title="To Do" numOfTasks={todoCards.length} />
      <ColumnWrapper>
        <Flex column gap="5px">
          {todoCards.map((item) => {
            return (
              <Card
                height="114px"
                statusColors={item.statusColors ? item.statusColors : []}
                text={item.text}
                dates={item.dates}
                numOfComments={item.numOfComments}
                numOfFilters={item.numOfFilters}
              />
            );
          })}
        </Flex>
      </ColumnWrapper>
      <AddTask />
    </>
  );
};
