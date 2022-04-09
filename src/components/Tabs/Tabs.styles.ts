import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TabsProps } from '.';

export const StyledTabs = styled.div<Pick<TabsProps, 'centered'>>`
  display: flex;

  ${({ centered }) =>
    centered
      ? css`
          justify-content: center;
        `
      : ''}
`;

export const TabsInner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
