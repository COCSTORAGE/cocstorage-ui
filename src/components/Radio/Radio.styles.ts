import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

import { RadioProps } from '.';

export const Wrapper = styled.div<Pick<RadioProps, 'disabled'>>`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};
  border-radius: 20px;
  overflow: hidden;

  ${({ theme: { palette }, disabled }): CSSObject =>
    disabled
      ? {
          borderColor: 'transparent',
          backgroundColor: palette.box.filled.normal
        }
      : {}};
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

export const Marker = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const MarkerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 20px;
  background-color: ${({ theme: { palette } }) => palette.primary.main};
`;
