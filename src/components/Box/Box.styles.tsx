import styled from '@emotion/styled';

export const StyledBox = styled.div`
  border: 1px solid ${({ theme: { palette } }) => palette.primary.main};
`;
