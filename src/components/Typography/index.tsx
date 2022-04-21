import React, { memo, HTMLAttributes, PropsWithChildren } from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { StyledTypography } from './Typography.styles';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  color?: string;
  customStyle?: SerializedStyles;
}

// TODO 추후 피그마에 Typography 정의가 되면 보완
function Typography({
  children,
  component = 'h1',
  fontSize,
  fontWeight,
  lineHeight,
  color,
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
      css={customStyle}
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

export default memo(Typography);
