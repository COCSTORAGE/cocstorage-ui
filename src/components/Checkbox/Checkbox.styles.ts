import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

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

  ${({ theme: { palette }, checked }): CSSObject =>
    checked
      ? {
          borderColor: 'transparent',
          backgroundColor: palette.primary.main
        }
      : {}};

  ${({ theme: { palette }, disabled }): CSSObject =>
    disabled
      ? {
          borderColor: 'transparent',
          backgroundColor: palette.box.filled.normal
        }
      : {}};
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

  ${({ theme: { palette }, checked }): CSSObject =>
    checked
      ? {
          borderColor: palette.text.dark.main
        }
      : {}};
`;
