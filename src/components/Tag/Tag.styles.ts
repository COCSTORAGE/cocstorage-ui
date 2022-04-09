import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TagProps } from '.';

const DefaultTag = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 7px 10px;
  border-radius: 8px;
  line-height: 18px;
  font-size: 14px;
  cursor: default;
`;

export const StyledTag = styled(DefaultTag)<Pick<TagProps, 'variant'>>`
  ${({ theme: { type, palette }, variant }) => {
    switch (variant) {
      case 'semiAccent':
        return css`
          background-color: ${palette.primary.bg1};
          color: ${palette.primary.main};
          font-weight: 700;

          & svg path {
            fill: ${palette.primary.main};
          }
        `;
      case 'transparent':
        return css`
          background-color: transparent;
          color: ${palette.text[type].text2};

          & svg path {
            fill: ${palette.text[type].text2};
          }
        `;
      default:
        return css`
          background-color: ${palette.box.filled.normal};
          color: ${palette.text[type].main};

          & svg path {
            fill: ${palette.text[type].main};
          }
        `;
    }
  }}
`;
