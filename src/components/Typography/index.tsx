import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import useTheme from '@theme/provider/useTheme';

import { StyledTypography } from './Typography.styles';
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
      lineClamp,
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
