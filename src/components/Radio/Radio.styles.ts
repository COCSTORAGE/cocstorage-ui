import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { RadioProps } from '.';

export const Wrapper = styled.div<Pick<RadioProps, 'disabled'>>`
  position: relative;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};
  border-radius: 20px;
  overflow: hidden;

  ${({ theme: { palette }, disabled }) =>
    disabled
      ? css`
          border-color: transparent;
          background-color: ${palette.box.filled.normal};
        `
      : ''};
`;

export const StyledRadio = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  z-index: 1;
`;

export const RadioMarker = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const RadioMarkerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const CheckedCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 20px;
  background-color: ${({ theme: { palette } }) => palette.primary.main};
`;
