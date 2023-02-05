import React from 'react';
import styled from 'styled-components';
import { PlusIcon } from '../../assets/icons/plusIcon';

export const AddColumn = () => {
  return (
    <AddColumnStyled>
      <PlusIcon />
    </AddColumnStyled>
  );
};

const AddColumnStyled = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 6px;
  min-width: 46px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e8e8e;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
