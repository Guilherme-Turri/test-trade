import styled, { css } from 'styled-components'

export const Container = styled.header`
${({ theme }) => css`
display: flex;
justify-content: space-between;
padding: 15px;
align-items: center;
width: 100%;
height: 3rem;
background-color: white;
border-bottom: 2px solid ${theme.color.secondaryColor};
color: ${theme.color.secondaryColor};
font-weight:bold;

`}
`
