import React, { memo, HTMLAttributes, PropsWithChildren } from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps, CSSValue, Color } from '../../types';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps extends GenericComponentProps<HTMLAttributes<HTMLElement>> {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  fontSize?: CSSValue;
  fontWeight?: number;
  lineHeight?: string;
  color?: Color;
  letterSpacing?: string;
  noWrap?: boolean;
  lineClamp?: number;
}

// TODO 추후 피그마에 Typography 정의가 되면 보완
function Typography({
  children,
  component = 'h1',
  fontSize = 14,
  fontWeight,
  lineHeight,
  color,
  letterSpacing = '-0.04em',
  noWrap,
  lineClamp = 1,
  customStyle,
  ...props
}: PropsWithChildren<TypographyProps>) {
  const { theme } = useTheme();
  return (
    <StyledTypography
      as={component}
      theme={theme}
      textFontSize={fontSize}
      textFontWeight={fontWeight}
      textLineHeight={lineHeight}
      textColor={color}
      textLetterSpacing={letterSpacing}
      noWrap={noWrap}
      lineClamp={lineClamp}
      css={customStyle}
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

export default memo(Typography);
