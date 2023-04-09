import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCode } from '@utils';

import type { ImageOutlined } from '../../assets/icons';

import { IconProps } from '.';

export const StyledIcon = (icon: typeof ImageOutlined) => styled(icon)<Pick<IconProps, 'color'>>`
  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].main};

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
