import { HTMLAttributes, forwardRef } from 'react';

import { convertNumberToCSSValue } from '@utils';
import { CSSValue, GenericComponentProps } from 'src/typings';

import { SkeletonInner, SkeletonWrapper, StyledSkeleton } from './Skeleton.styles';

export interface SkeletonProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  ratio?: '1:1' | '1:2' | '2:1' | '4:3' | '16:9';
  width?: CSSValue;
  height?: CSSValue;
  maxWidth?: CSSValue;
  maxHeight?: CSSValue;
  minWidth?: CSSValue;
  minHeight?: CSSValue;
  round?: CSSValue;
  disableAspectRatio?: boolean;
  disableAnimation?: boolean;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  {
    ratio = '1:1',
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    round,
    disableAspectRatio,
    disableAnimation,
    customStyle,
    ...props
  },
  ref
) {
  if (disableAspectRatio) {
    return (
      <StyledSkeleton
        ref={ref}
        disableAspectRatio={disableAspectRatio}
        disableAnimation={disableAnimation}
        round={round}
        {...props}
        css={customStyle}
        style={{
          width: width ? convertNumberToCSSValue(width) : undefined,
          height: height ? convertNumberToCSSValue(height) : undefined,
          maxWidth: maxWidth ? convertNumberToCSSValue(maxWidth) : undefined,
          maxHeight: maxHeight ? convertNumberToCSSValue(maxHeight) : undefined,
          minWidth: minWidth ? convertNumberToCSSValue(minWidth) : undefined,
          minHeight: minHeight ? convertNumberToCSSValue(minHeight) : undefined,
          ...props.style
        }}
      />
    );
  }

  return (
    <SkeletonWrapper ratio={ratio} round={round}>
      <SkeletonInner round={round}>
        <StyledSkeleton
          ref={ref}
          disableAspectRatio={disableAspectRatio}
          disableAnimation={disableAnimation}
          round={round}
          {...props}
          css={customStyle}
        />
      </SkeletonInner>
    </SkeletonWrapper>
  );
});

export default Skeleton;
