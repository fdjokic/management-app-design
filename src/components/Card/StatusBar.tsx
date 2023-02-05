import React from 'react';
import { CommentIcon } from '../../assets/icons/comment';
import { FilterIcon } from '../../assets/icons/filter';
import { Flex } from '../../styles/GlobalStyles';
import { Icon } from '../Icon/Icon';
import { StatusBtn } from './CardStyle';

interface IStatusBar {
  colors?: string[];
  comments?: number;
  filters?: any;
}

export const StatusBar = ({ colors, comments, filters }: IStatusBar) => {
  return (
    <Flex
      center
      gap='6px'
      fontFamily='SF Pro Display'
      fontSize='12px'
      data-testid='status-bar'
    >
      {colors?.map((i) => (
        <StatusBtn background={i} />
      ))}
      <span style={{ color: '#8e8e8e' }}>{colors?.length === 5 && '+3'}</span>
      <Flex center gap='5px' color='#8E8E8E' fontSize='12px'>
        {comments && (
          <ul
            style={{
              margin: '0 10px',
            }}
          >
            <Icon children={<CommentIcon />} num={comments} />
          </ul>
        )}
        {filters && (
          <ul>
            <Icon children={<FilterIcon />} num={filters} />
          </ul>
        )}
      </Flex>
    </Flex>
  );
};
