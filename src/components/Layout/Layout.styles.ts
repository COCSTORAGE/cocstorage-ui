import styled, { CSSObject } from '@emotion/styled';

import { LayoutProps } from '.';

export const StyledLayout = styled.div<
  Pick<LayoutProps, 'alignment' | 'justifyContent' | 'gap'> & {
    layoutDirection: 'horizontal' | 'vertical';
  }
>`
  display: flex;

  ${({ layoutDirection, alignment, justifyContent, gap }): CSSObject => {
    let cssObject: CSSObject = {
      gap,
      alignItems: alignment,
      justifyContent
    };

    if (layoutDirection === 'vertical') {
      cssObject = {
        ...cssObject,
        flexDirection: 'column'
      };
    }

    return cssObject;
  }};
`;
