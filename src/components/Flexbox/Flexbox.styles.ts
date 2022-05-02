import styled, { CSSObject } from '@emotion/styled';

import { FlexboxProps } from '.';

export const StyledFlexbox = styled.div<
  Pick<FlexboxProps, 'alignment' | 'justifyContent' | 'gap'> & {
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
