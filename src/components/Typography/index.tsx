import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import useTheme from '@theme/provider/useTheme';

import {
  BrandColor,
  CSSValue,
  Color,
  GenericComponentProps,
  TypographyComponent,
  TypographyLineHeight,
  TypographyVariant,
  TypographyWeight
} from '../../types';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps extends GenericComponentProps<HTMLAttributes<HTMLElement>> {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  fontWeight?: keyof TypographyWeight;
  lineHeight?: keyof TypographyLineHeight;
  letterSpacing?: CSSValue;
  color?: BrandColor | Color;
  noWrap?: boolean;
  lineClamp?: number;
}

// TODO 추후 피그마에 Typography 정의가 되면 보완
const Typography = forwardRef<HTMLDivElement, PropsWithChildren<TypographyProps>>(
  function Typography(
    {
      children,
      variant = 'p2',
      component,
      fontWeight = 'regular',
      lineHeight,
      letterSpacing,
      color,
      noWrap,
      lineClamp = 1,
      customStyle,
      ...props
    },
    ref
  ) {
    const {
      theme: { typography }
    } = useTheme();

    return (
      <StyledTypography
        as={component || typography[variant].component}
        ref={ref}
        variant={variant}
        textFontWeight={fontWeight}
        textLineHeight={lineHeight}
        textColor={color}
        textLetterSpacing={letterSpacing}
        noWrap={noWrap}
        lineClamp={lineClamp}
        {...props}
        css={customStyle}
      >
        {children}
      </StyledTypography>
    );
  }
);

export default Typography;
