import styled, { CSSObject } from '@emotion/styled';

import type { BellOutlined } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof BellOutlined) => styled(icon)<Pick<IconProps, 'color'>>`
  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  ${({ color }): CSSObject =>
    color
      ? {
          color: `${color} !important`
        }
      : {}};
`;
