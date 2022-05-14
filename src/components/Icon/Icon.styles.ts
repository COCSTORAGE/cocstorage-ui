import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCode } from '@utils';

import type { BellOutlined } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof BellOutlined) => styled(icon)<Pick<IconProps, 'color'>>`
  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  ${({ theme, color }): CSSObject => {
    const brandColorCode = getBrandColorCode(theme, color);

    if (brandColorCode) {
      return {
        color: `${brandColorCode} !important`
      };
    }

    return {
      color: `${color} !important`
    };
  }}
`;
