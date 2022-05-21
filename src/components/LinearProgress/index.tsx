import { HTMLAttributes, forwardRef } from 'react';

import { GenericComponentProps } from '../../types';
import { ProgressBar, StyledLinearProgress } from './LinearProgress.styles';

export interface LinearProgressProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  value?: number;
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(function LinearProgress(
  { value = 0, customStyle },
  ref
) {
  return (
    <StyledLinearProgress ref={ref} css={customStyle}>
      <ProgressBar value={100 - value} />
    </StyledLinearProgress>
  );
});

export default LinearProgress;
