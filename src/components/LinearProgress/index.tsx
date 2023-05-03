import { HTMLAttributes, forwardRef } from 'react';

import { ProgressBar, StyledLinearProgress } from './LinearProgress.styles';
import { GenericComponentProps } from '../../types';

export interface LinearProgressProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  value?: number;
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(function LinearProgress(
  { value = 0, customStyle, ...props },
  ref
) {
  return (
    <StyledLinearProgress ref={ref} {...props} css={customStyle}>
      <ProgressBar dataValue={100 - value} />
    </StyledLinearProgress>
  );
});

export default LinearProgress;
