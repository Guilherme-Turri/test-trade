import styled, { css } from "styled-components";

export const Container = styled.input`
${({ theme }) => css`
outline: none;
all: unset;
border: 1px solid ${theme.color.secondaryColor};
border-radius: ${theme.radius.small};
width: 100%;
height: 1.563rem;
padding: ${theme.spacings.normal};
box-sizing: border-box;
color: ${theme.color.primaryColor};
::placeholder{
  color:'#95A5A0'!important;
}
`}
`