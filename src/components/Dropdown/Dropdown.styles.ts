import styled, { CSSObject } from '@emotion/styled';

import { DropdownProps } from '.';

const DefaultDropdown = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
`;

export const StyledDropdown = styled(DefaultDropdown)<
  Pick<DropdownProps, 'fullWidth'> & {
    open: boolean;
  }
>`
  width: 170px;

  background-color: ${({ theme: { palette } }) => palette.background.bg};
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};

  ${({ theme: { type, palette } }): CSSObject => {
    switch (type) {
      case 'dark':
        return {
          color: palette.text.dark.text2,
          '& svg': {
            color: palette.text.dark.main
          }
        };
      default:
        return {
          color: palette.text.light.text1,
          '& svg': {
            color: palette.text.light.main
          }
        };
    }
  }};

  ${({ theme: { type, palette }, open }): CSSObject =>
    open
      ? {
          borderColor: palette.primary.main,
          color: palette.text[type].main,
          '& svg': {
            color: palette.primary.main
          }
        }
      : {}};

  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}};
`;

export const OptionWrapper = styled.ul<{
  open: boolean;
  top: number;
}>`
  position: absolute;
  width: 100%;
  bottom: -${({ top }) => top}px;
  left: 0;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme: { palette } }) => palette.background.fg2};
  z-index: 1;

  visibility: hidden;
  pointer-events: none;

  ${({ open }): CSSObject =>
    open
      ? {
          visibility: 'visible',
          pointerEvents: 'visible'
        }
      : {}};
`;

export const Option = styled.li`
  padding: 11px 12px;
  text-align: left;

  color: ${({ theme: { type, palette } }) => palette.text[type].main};

  &:hover {
    background-color: ${({ theme: { palette } }) => palette.box.filled.focused};
  }
`;
