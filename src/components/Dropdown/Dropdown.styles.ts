import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { DropdownProps } from '.';

export const StyledDropdown = styled.button<
  Pick<DropdownProps, 'fullWidth'> & {
    open: boolean;
  }
>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid ${({ theme: { palette } }) => palette.box.stroked.normal};
  border-radius: 8px;
  font-size: 14px;

  ${({ theme: { type, palette } }) => {
    switch (type) {
      case 'dark':
        return css`
          color: ${palette.text.dark.text2};
          & svg path {
            fill: ${palette.text.dark.main};
          }
        `;
      default:
        return css`
          color: ${palette.text.light.text1};
          & svg path {
            fill: ${palette.text.light.main};
          }
        `;
    }
  }};

  ${({ theme: { type, palette }, open }) =>
    open
      ? css`
          border-color: ${palette.primary.main};
          color: ${type === 'dark' ? palette.text.dark.main : palette.text.light.main};
          & svg path {
            fill: ${palette.primary.main};
          }
        `
      : ''};

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''};
`;

export const OptionWrapper = styled.ul<{
  open: boolean;
  top: number;
}>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  bottom: -${({ top }) => top}px;
  left: 0;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme: { palette } }) => palette.background.fg2};
  z-index: 1;
`;

export const Option = styled.li`
  padding: 11px 12px;
  text-align: left;

  ${({ theme: { type, palette } }) => {
    switch (type) {
      case 'dark':
        return css`
          color: ${palette.text.dark.main};
        `;
      default:
        return css`
          color: ${palette.text.light.main};
        `;
    }
  }};

  &:hover {
    background-color: ${({ theme: { palette } }) => palette.box.filled.focused};
  }
`;
