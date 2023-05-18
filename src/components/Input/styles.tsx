import styled, { css } from "styled-components";

export const Container = styled.input`
${({ theme }) => css`
outline: none;
all: unset;
border: 1px solid ${theme.color.secondaryColor};
border-radius: 5px;
width: 100%;
height: 25px;
padding: 15px;
box-sizing: border-box;
color: ${theme.color.primaryColor};
::placeholder{
  color:'#95A5A0'!important;
}
`}
`