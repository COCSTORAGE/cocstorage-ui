import styled from '@emotion/styled';

export const StyledBox = styled.div`
  border: 5px solid ${({ theme: { palette } }) => palette.primary};
`;
