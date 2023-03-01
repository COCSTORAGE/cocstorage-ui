import styled, { CSSObject } from '@emotion/styled';

import { TabsProps } from '.';

export const StyledTabs = styled.div<Pick<TabsProps, 'centered' | 'fullWidth' | 'hideLine'>>`
  display: flex;
  width: fit-content;

  ${({
    theme: {
      palette: { box }
    },
    hideLine
  }): CSSObject =>
    !hideLine
      ? {
          borderBottom: `1px solid ${box.stroked.normal}`
        }
      : {}};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};

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
  width: 100%;
`;
