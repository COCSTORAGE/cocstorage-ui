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
  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};

  ${({ theme: { type, palette }, checked, disabled }): CSSObject => {
    let cssObject: CSSObject = {};
    switch (type) {
      default:
        if (checked) {
          cssObject = {
            borderColor: 'transparent',
            backgroundColor: palette.primary.main
          };
        }

        if (disabled) {
          cssObject = {
            borderColor: 'transparent',
            backgroundColor: palette.box.filled.normal
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

  ${({ theme: { type, palette }, checked, disabled }): CSSObject => {
    let cssObject: CSSObject;
    switch (type) {
      case 'dark':
        cssObject = {
          backgroundColor: palette.text.dark.main
        };

        if (checked) {
          cssObject = {
            ...cssObject,
            left: 'auto',
            right: 4,
            backgroundColor: palette.text.dark.main
          };
        }

        if (disabled) {
          cssObject = {
            ...cssObject,
            left: 4,
            right: 'auto',
            backgroundColor: palette.text.dark.text3
          };
        }
        return cssObject;
      default:
        cssObject = {
          backgroundColor: palette.text.light.main
        };

        if (checked) {
          cssObject = {
            ...cssObject,
            left: 'auto',
            right: 4,
            backgroundColor: palette.text.dark.main
          };
        }

        if (disabled) {
          cssObject = {
            ...cssObject,
            left: 4,
            right: 'auto',
            backgroundColor: palette.text.light.text3
          };
        }
        return cssObject;
    }
  }};
`;
