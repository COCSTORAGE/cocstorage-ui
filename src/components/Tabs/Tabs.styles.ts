import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { TabsProps } from '.';

export const StyledTabs = styled.div<Pick<TabsProps, 'centered'>>`
  display: flex;

  ${({ centered }): CSSObject =>
    centered
      ? {
          justifyContent: 'center'
        }
      : {}}
`;

export const TabsInner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
