import styled, { CSSObject } from '@emotion/styled';

import { convertNumberToCSSValue } from '@utils';

import { TooltipProps } from '.';

export const Wrapper = styled.div<Pick<TooltipProps, 'fillWrapper'>>`
  width: max-content;

  ${({ fillWrapper }): CSSObject =>
    fillWrapper
      ? {
          width: '100%'
        }
      : {}}
`;

export const StyledTooltip = styled.div<
  Pick<
    TooltipProps,
    'variant' | 'placement' | 'transitionDuration' | 'centered' | 'left' | 'triangleLeft'
  > & {
    tooltipOpen: boolean;
    wrapperClientHeight: number;
    wrapperClientWidth: number;
    clientWidth: number;
    clientHeight: number;
  }
>`
  position: absolute;
  padding: 8px;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms ease;
  width: max-content;
  border-radius: 8px;
  pointer-events: none;

  ${({
    theme: {
      typography: { s1 }
    }
  }): CSSObject => ({
    fontSize: s1.size,
    fontWeight: s1.weight.medium,
    letterSpacing: s1.letterSpacing,
    lineHeight: s1.lineHeight.default
  })};
  
  ${({
    theme: {
      palette: { primary, text }
    },
    variant
  }): CSSObject => {
    switch (variant) {
      case 'semiAccent':
        return {
          backgroundColor: primary.bg2,
          color: primary.main,
          '& svg': {
            color: text.dark.main
          }
        };
      default:
        return {
          backgroundColor: primary.main,
          color: text.dark.main,
          '& svg': {
            color: primary.main
          }
        };
    }
  }};

  ${({
    placement,
    tooltipOpen,
    centered,
    wrapperClientWidth,
    wrapperClientHeight,
    clientWidth,
    clientHeight,
    left = 0
  }): CSSObject => {
    let cssObject: CSSObject;
    switch (placement) {
      case 'top':
        cssObject = {
          transform: `translate(${
            centered
              ? `calc(${Math.floor(wrapperClientWidth / 2)}px - ${Math.floor(clientWidth / 2)}px)`
              : convertNumberToCSSValue(left)
          }, -${wrapperClientHeight + clientHeight + 12}px)`
        };
        break;
      case 'left':
        cssObject = {
          top: '50%',
          transform: `translate(-${clientWidth + 12}px, -50%)`
        };
        break;
      case 'right':
        cssObject = {
          top: '50%',
          transform: `translate(${wrapperClientWidth + 12}px, -50%)`
        };
        break;
      default:
        cssObject = {
          transform: `translate(${
            centered
              ? `calc(${Math.floor(wrapperClientWidth / 2)}px - ${Math.floor(clientWidth / 2)}px)`
              : convertNumberToCSSValue(left)
          }, 12px)`
        };
        break;
    }
    if (tooltipOpen) {
      cssObject = {
        ...cssObject,
        opacity: 1,
        pointerEvents: 'visible'
      };
    }

    return cssObject;
  }};

  &:after {
    position: absolute;
    content: '';
    border-top: 0 solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    
    ${({
      theme: {
        palette: { primary }
      },
      variant,
      placement,
      centered,
      triangleLeft = 10
    }): CSSObject => {
      let cssObject: CSSObject;
      switch (variant) {
        case 'semiAccent':
          cssObject = {
            borderBottom: `8px solid ${primary.bg2}`
          };
          break;
        default:
          cssObject = {
            borderBottom: `8px solid ${primary.main}`
          };
          break;
      }

      switch (`${variant}-${placement}`) {
        case 'accent-top':
          cssObject = {
            ...cssObject,
            bottom: -8,
            left: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            transform: centered ? 'translateX(-50%) rotate(180deg)' : 'rotate(180deg)'
          };
          break;
        case 'semiAccent-top':
          cssObject = {
            ...cssObject,
            bottom: -8,
            left: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            transform: centered ? 'translateX(-50%) rotate(180deg)' : 'rotate(180deg)'
          };
          break;
        case 'accent-left':
          cssObject = {
            ...cssObject,
            top: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            right: -12,
            transform: centered ? 'translateY(-50%) rotate(90deg)' : 'rotate(90deg)'
          };
          break;
        case 'semiAccent-left':
          cssObject = {
            ...cssObject,
            top: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            right: -12,
            transform: centered ? 'translateY(-50%) rotate(90deg)' : 'rotate(90deg)'
          };
          break;
        case 'accent-right':
          cssObject = {
            ...cssObject,
            top: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            left: -12,
            transform: centered ? 'translateY(-50%) rotate(270deg)' : 'rotate(270deg)'
          };
          break;
        case 'semiAccent-right':
          cssObject = {
            ...cssObject,
            top: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            left: -12,
            transform: centered ? 'translateY(-50%) rotate(270deg)' : 'rotate(270deg)'
          };
          break;
        case 'accent-bottom':
          cssObject = {
            ...cssObject,
            top: -8,
            left: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            transform: centered ? 'translateX(-50%)' : undefined
          };
          break;
        default:
          cssObject = {
            ...cssObject,
            top: -8,
            left: centered ? '50%' : convertNumberToCSSValue(triangleLeft),
            transform: centered ? 'translateX(-50%)' : undefined
          };
          break;
      }

      return cssObject;
    }};
`;
