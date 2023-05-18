import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  `}
`;