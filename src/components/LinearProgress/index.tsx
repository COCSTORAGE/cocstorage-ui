import { HTMLAttributes, forwardRef } from 'react';

import { GenericComponentProps } from '@typings';

import { ProgressBar, StyledLinearProgress } from './LinearProgress.styles';

export interface LinearProgressProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  value?: number;
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(function LinearProgress(
  { value = 0, customStyle, ...props },
  ref
) {
  return (
    <StyledLinearProgress ref={ref} {...props} css={customStyle}>
      <ProgressBar
        ref={ref}
        style={{
          transform: `translateX(-${100 - value}%)`
        }}
      />
    </StyledLinearProgress>
  );
});

export default LinearProgress;
