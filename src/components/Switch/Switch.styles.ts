import styled, { CSSObject } from '@emotion/styled';

import { SwitchProps } from '.';

const DefaultSwitch = styled.button`
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 20px;
  box-sizing: content-box;
`;

export const StyledSwitch = styled(DefaultSwitch)<Pick<SwitchProps, 'checked' | 'disabled'>>`
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  border: 1px solid
    ${({
      theme: {
        palette: { box }
      }
    }) => box.stroked.normal};

  ${({
    theme: {
      mode,
      palette: { primary, box }
    },
    checked,
    disabled
  }): CSSObject => {
    let cssObject: CSSObject = {};
    switch (mode) {
      default:
        if (checked) {
          cssObject = {
            borderColor: 'transparent',
            backgroundColor: primary.main
          };
        }

        if (disabled) {
          cssObject = {
            borderColor: 'transparent',
            backgroundColor: box.filled.normal
          };
        }
        return cssObject;
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

  ${({
    theme: {
      mode,
      palette: { text }
    },
    checked,
    disabled
  }): CSSObject => {
    let cssObject: CSSObject;
    switch (mode) {
      case 'dark':
        cssObject = {
          backgroundColor: text.dark.main
        };

        if (checked) {
          cssObject = {
            ...cssObject,
            left: 'auto',
            right: 4,
            backgroundColor: text.dark.main
          };
        }

        if (disabled) {
          cssObject = {
            ...cssObject,
            left: 4,
            right: 'auto',
            backgroundColor: text.dark.text3
          };
        }
        return cssObject;
      default:
        cssObject = {
          backgroundColor: text.light.main
        };

        if (checked) {
          cssObject = {
            ...cssObject,
            left: 'auto',
            right: 4,
            backgroundColor: text.dark.main
          };
        }

        if (disabled) {
          cssObject = {
            ...cssObject,
            left: 4,
            right: 'auto',
            backgroundColor: text.light.text3
          };
        }
        return cssObject;
    }
  }};
`;
