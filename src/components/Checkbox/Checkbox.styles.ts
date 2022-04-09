import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { CheckBoxProps } from '.';

export const Wrapper = styled.div<Pick<CheckBoxProps, 'checked' | 'disabled'>>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};
  border-radius: 4px;
  overflow: hidden;

  ${({ theme: { palette }, checked }) =>
    checked
      ? css`
          border-color: transparent;
          background-color: ${palette.primary.main};
        `
      : ''};

  ${({ theme: { palette }, disabled }) =>
    disabled
      ? css`
          border-color: transparent;
          background-color: ${palette.box.filled.normal};
        `
      : ''};
`;

export const StyledCheckbox = styled.input`
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

export const Check = styled.div<
  Pick<CheckBoxProps, 'checked'> & {
    hover: boolean;
  }
>`
  width: 6px;
  height: 10px;
  border: solid;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translate(-1px, -1px);

  border-color: ${({ theme: { type, palette } }) => palette.text[type].text2};

  ${({ theme: { palette }, checked }) =>
    checked
      ? css`
          border-color: ${palette.text.dark.main};
        `
      : ''};
`;
