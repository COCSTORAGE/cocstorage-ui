import styled, { CSSObject } from '@emotion/styled';

import { DropdownProps } from '.';

const DefaultDropdown = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  ${({
    theme: {
      typography: { p2 }
    }
  }): CSSObject => ({
    fontSize: p2.size,
    fontWeight: p2.weight.medium,
    letterSpacing: p2.letterSpacing,
    lineHeight: p2.lineHeight.default
  })}
`;

export const StyledDropdown = styled(DefaultDropdown)<
  Pick<DropdownProps, 'fullWidth'> & {
    open: boolean;
  }
>`
  width: 170px;

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
      palette: { text }
    }
  }): CSSObject => {
    switch (mode) {
      case 'dark':
        return {
          color: text.dark.text2,
          '& svg': {
            color: text.dark.text2
          }
        };
      default:
        return {
          color: text.light.text1,
          '& svg': {
            color: text.light.text1
          }
        };
    }
  }};

  ${({
    theme: {
      mode,
      palette: { primary, text }
    },
    open
  }): CSSObject =>
    open
      ? {
          borderColor: primary.main,
          color: text[mode].main,
          '& svg': {
            color: primary.main
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
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.fg2};
  z-index: 1;

  visibility: hidden;
  pointer-events: none;

  padding: 0;
  list-style: none;

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

  color: ${({
    theme: {
      mode,
      palette: { text }
    }
  }) => text[mode].main};

  &:hover {
    background-color: ${({
      theme: {
        palette: { box }
      }
    }) => box.filled.focused};
  }
`;
