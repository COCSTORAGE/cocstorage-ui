import styled, { CSSObject } from '@emotion/styled';

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
  gap: 20px;
`;
