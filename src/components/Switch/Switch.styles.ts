import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { SwitchProps } from '.';

const DefaultSwitch = styled.button`
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 20px;
  box-sizing: content-box;
`;

export const StyledSwitch = styled(DefaultSwitch)<Pick<SwitchProps, 'checked' | 'disabled'>>`
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};

  ${({ theme: { type, palette }, checked, disabled }) => {
    switch (type) {
      default:
        return css`
          ${checked
            ? css`
                border-color: transparent;
                background-color: ${palette.primary.main};
              `
            : ''}

          ${disabled
            ? css`
                border-color: transparent;
                background-color: ${palette.box.filled.normal};
              `
            : ''}
        `;
    }
  }};
`;

export const Circle = styled.div<Pick<SwitchProps, 'checked' | 'disabled'>>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${({ theme: { type, palette }, checked, disabled }) => {
    switch (type) {
      case 'dark':
        return css`
          background-color: ${palette.text.dark.main};

          ${checked
            ? css`
                left: auto;
                right: 4px;
                background-color: ${palette.text.dark.main};
              `
            : ''}

          ${disabled
            ? css`
                left: 4px;
                right: auto;
                background-color: ${palette.text.dark.text3};
              `
            : ''}
        `;
      default:
        return css`
          background-color: ${palette.text.light.main};

          ${checked
            ? css`
                left: auto;
                right: 4px;
                background-color: ${palette.text.dark.main};
              `
            : ''}

          ${disabled
            ? css`
                left: 4px;
                right: auto;
                background-color: ${palette.text.light.text3};
              `
            : ''}
        `;
    }
  }};
`;
