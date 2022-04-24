import React, { memo, HTMLAttributes, PropsWithChildren } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps extends GenericComponentProps<HTMLAttributes<HTMLElement>> {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  color?: string;
  letterSpacing?: string;
}

// TODO 추후 피그마에 Typography 정의가 되면 보완
function Typography({
  children,
  component = 'h1',
  fontSize,
  fontWeight,
  lineHeight,
  color,
  letterSpacing,
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
      css={customStyle}
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

export default memo(Typography);
